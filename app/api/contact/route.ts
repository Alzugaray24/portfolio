import { NextRequest, NextResponse } from "next/server";
import { ContactFormData, ContactResponse } from "@/types/contact";

export async function POST(req: NextRequest) {
  try {
    // Obtener datos del cuerpo de la solicitud
    const data: ContactFormData = await req.json();

    // Validación básica de los datos del formulario
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        {
          success: false,
          message: "Se requieren nombre, correo electrónico y mensaje.",
        } as ContactResponse,
        { status: 400 }
      );
    }

    // En el futuro, aquí se enviaría el correo o se guardaría en una base de datos
    // Por ahora, solo simulamos una respuesta exitosa

    // Ejemplos de lo que podrías hacer:
    // 1. Enviar un correo electrónico utilizando un servicio como SendGrid, AWS SES, etc.
    // 2. Guardar el mensaje en una base de datos
    // 3. Integrarse con un CRM o sistema de tickets

    console.log("Mensaje de contacto recibido:", {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message.substring(0, 50) + "...", // Log truncado por privacidad
    });

    // Simular un pequeño retraso para efectos de demostración
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      {
        success: true,
        message:
          "Mensaje enviado correctamente. Nos pondremos en contacto pronto.",
      } as ContactResponse,
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en la API de contacto:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Error al procesar su solicitud. Por favor, inténtelo de nuevo más tarde.",
      } as ContactResponse,
      { status: 500 }
    );
  }
}
