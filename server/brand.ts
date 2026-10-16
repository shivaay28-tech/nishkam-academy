export const BRAND = {
  id: 'nishkam-academy',
  name: 'Nishkam Academy',
  shortName: 'Nishkam',
  engineName: 'Nishkam Engine',
  company: 'Nishkam Academy',
  url: 'https://nishkam-academy.vercel.app',
  host: 'nishkam-academy.vercel.app',
  storagePrefix: 'nishkam.academy',
  demoStudentEmail: 'student@nishkam-academy.vercel.app',
  demoAdminEmail: 'admin@nishkam-academy.vercel.app',
  colors: {
      "navy": "#1a1610",
      "navy800": "#14110c",
      "navy700": "#2a2418",
      "navy600": "#0e0c09",
      "baazex": "#d4af37",
      "baazex600": "#b8922a",
      "bright": "#f0d78c",
      "accent": "#e8c872",
      "ink": "#f6f1e4",
      "muted": "#b7a88a",
      "canvas": "#070707",
      "line": "#3a3224",
      "onButton": "#0a0a0a",
      "glow": "212 175 55"
  },
} as const

export type Brand = typeof BRAND
