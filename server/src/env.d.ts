declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      HOST: string;
      DATABASE_PORT: string;
      DATABASE_USERNAME: string;
      DATABASE_PASSWORD: string;
      DATABASE: string;
    }
  }
}

export {}
