import apiClient from "@/lib/api/client";
import { ContactFormData, ContactResponse } from "@/types/contact";

/**
 * Servicio para manejar las operaciones relacionadas con el formulario de contacto
 */
export const contactService = {
  /**
   * Envía un mensaje de contacto a través de la API
   * @param data Datos del formulario de contacto
   * @returns Respuesta de la API
   */
  async sendContactMessage(data: ContactFormData): Promise<ContactResponse> {
    // En un futuro, esto se conectará a una API real
    // Por ahora, simularemos una respuesta exitosa

    try {
      // Simular una petición API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Para probar la integración real cuando esté disponible:
      // const response = await apiClient.post<ContactFormData, ContactResponse>('/contact', data);
      // return response.data || { success: false, message: response.error || 'Error inesperado' };

      console.log("Datos de contacto enviados (simulado):", data);

      return {
        success: true,
        message:
          "Su mensaje ha sido enviado correctamente. Me pondré en contacto con usted pronto.",
      };
    } catch (error) {
      console.error("Error al enviar mensaje de contacto:", error);
      return {
        success: false,
        message:
          "Ha ocurrido un error al enviar el mensaje. Por favor, inténtelo de nuevo.",
      };
    }
  },
};

export default contactService;
