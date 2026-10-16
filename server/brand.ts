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
      "navy": "#f8e4ea",
      "navy800": "#f0c9d4",
      "navy700": "#e0a3b5",
      "navy600": "#fbeff3",
      "baazex": "#b4234a",
      "baazex600": "#8e1b3a",
      "bright": "#e25b7a",
      "accent": "#7a1530",
      "ink": "#2a0c14",
      "muted": "#7a5360",
      "canvas": "#fff7f9",
      "line": "#f0d0da",
      "onButton": "#ffffff",
      "glow": "180 35 74"
  },
} as const

export type Brand = typeof BRAND
