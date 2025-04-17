/**
 * Interfaces y tipos para el formulario de contacto
 */

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

export type ContactFormStatus = "idle" | "submitting" | "success" | "error";
