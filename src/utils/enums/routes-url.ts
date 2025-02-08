export const RoutesUrls = {
  BASE_URL: '/',
  BASE_URL_TEST: '/test',
  BASE_URL_CART: '/cart',
  ERROR_GENERIC: '/error'
} as const

export type RoutesUrls = (typeof RoutesUrls)[keyof typeof RoutesUrls]
