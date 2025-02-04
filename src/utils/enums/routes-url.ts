export const RoutesUrls = {
  BASE_URL: '/',
  BASE_URL_TEST: '/test'
} as const

export type RoutesUrls = (typeof RoutesUrls)[keyof typeof RoutesUrls]
