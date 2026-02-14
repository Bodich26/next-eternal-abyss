/**
 * ============================
 * 🌍 API ENDPOINTS
 * ============================
 * Серверные маршруты (используются для запросов)
 */
export const API_ROUTES = {
  BASE_API: process.env.NEXT_PUBLIC_API_URL!,
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
