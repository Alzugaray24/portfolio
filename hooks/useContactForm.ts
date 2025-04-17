import { useState } from "react";
import { ContactFormData, ContactFormStatus } from "@/types/contact";
import contactService from "@/services/contact/contactService";

/**
 * Hook personalizado para manejar el formulario de contacto
 */
export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<ContactFormStatus>("idle");
  const [response, setResponse] = useState<string | null>(null);

  /**
   * Maneja cambios en los campos del formulario
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Maneja el envío del formulario
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      setResponse("Por favor, complete todos los campos requeridos.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setResponse(null);

    try {
      const result = await contactService.sendContactMessage(formData);

      if (result.success) {
        setStatus("success");
        setResponse(result.message);
        // Limpiar el formulario en caso de éxito
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
        setResponse(result.message);
      }
    } catch (error) {
      setStatus("error");
      setResponse(
        "Ha ocurrido un error inesperado. Por favor, inténtelo de nuevo."
      );
      console.error("Error en el formulario de contacto:", error);
    }
  };

  /**
   * Resetea el formulario a su estado inicial
   */
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setStatus("idle");
    setResponse(null);
  };

  return {
    formData,
    status,
    response,
    handleChange,
    handleSubmit,
    resetForm,
    isSubmitting: status === "submitting",
    isSuccess: status === "success",
    isError: status === "error",
  };
}
