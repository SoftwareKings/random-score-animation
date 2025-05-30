// env.d.ts
interface ImportMetaEnv {
  readonly VITE_API_URL: string
  // add any other env vars you use here…
  readonly [key: string]: string | undefined
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
