/**
 * Configuración básica del cliente HTTP para consumir APIs externas
 */

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.example.com";

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}

/**
 * Cliente HTTP genérico para hacer peticiones a la API
 */
export const apiClient = {
  /**
   * Método GET para obtener datos
   */
  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      return {
        data: data as T,
        status: response.status,
      };
    } catch (error) {
      console.error("API GET error:", error);
      return {
        error: error instanceof Error ? error.message : "Unknown error",
        status: 500,
      };
    }
  },

  /**
   * Método POST para enviar datos
   */
  async post<T, U>(endpoint: string, body: T): Promise<ApiResponse<U>> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      return {
        data: data as U,
        status: response.status,
      };
    } catch (error) {
      console.error("API POST error:", error);
      return {
        error: error instanceof Error ? error.message : "Unknown error",
        status: 500,
      };
    }
  },
};

export default apiClient;
