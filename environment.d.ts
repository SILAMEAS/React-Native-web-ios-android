declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_URL: string;
      API_VERSION: string;
      PDF_TRON_KEY: string;
    }
  }
}
export {};
