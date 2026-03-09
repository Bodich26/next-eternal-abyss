/**
 * ============================
 * 🌍 API ENDPOINTS
 * ============================
 * Серверные маршруты (используются для запросов)
 */
export const API_ROUTES = {
  BASE_URL: process.env.NEXT_BASE_URL!,
  BASE_API: "/api",
  ALBUMS: "/albums",
  MERCH: "/merch",
  TOURS: "/tours",
} as const;

/**
 * ============================
 * 🌐 PUBLIC ROUTES
 * ============================
 * Основные публичные страницы (фронтенд)
 */
export const PUBLIC_ROUTES = {
  HOME: "/",
  ADMIN: "/admin",
  ALBUMS: "/albums",
  MERCH: "/merch",
  TOURS: "/tours",
  CONTACT: "/contact",
  ABOUT: "/about",
} as const;
