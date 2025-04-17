/**
 * Utilidades para validación de formularios
 */

/**
 * Valida si una dirección de correo electrónico es válida
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validaciones de campos específicos
 */
export const validators = {
  /**
   * Valida un nombre (no vacío y longitud mínima)
   */
  name: (value: string): string | null => {
    if (!value.trim()) return "El nombre es requerido";
    if (value.trim().length < 2)
      return "El nombre debe tener al menos 2 caracteres";
    return null;
  },

  /**
   * Valida un correo electrónico
   */
  email: (value: string): string | null => {
    if (!value.trim()) return "El correo electrónico es requerido";
    if (!isValidEmail(value))
      return "Por favor, introduce un correo electrónico válido";
    return null;
  },

  /**
   * Valida el asunto del mensaje
   */
  subject: (value: string): string | null => {
    if (!value.trim()) return "El asunto es requerido";
    if (value.trim().length < 3)
      return "El asunto debe tener al menos 3 caracteres";
    return null;
  },

  /**
   * Valida el contenido del mensaje
   */
  message: (value: string): string | null => {
    if (!value.trim()) return "El mensaje es requerido";
    if (value.trim().length < 10)
      return "El mensaje debe tener al menos 10 caracteres";
    return null;
  },
};

/**
 * Valida un objeto completo de formulario
 * @returns Objeto con errores por campo, o null si todo es válido
 */
export const validateForm = <T extends Record<string, string>>(
  formData: T,
  fieldValidators: Record<keyof T, (value: string) => string | null>
): Record<keyof T, string | null> | null => {
  const errors = {} as Record<keyof T, string | null>;
  let isValid = true;

  for (const key in fieldValidators) {
    if (Object.prototype.hasOwnProperty.call(fieldValidators, key)) {
      const validator = fieldValidators[key];
      const value = formData[key];
      const error = validator(value);

      errors[key] = error;
      if (error) isValid = false;
    }
  }

  return isValid ? null : errors;
};
