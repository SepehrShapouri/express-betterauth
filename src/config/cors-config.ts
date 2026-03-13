export const allowedOrigins = process.env.CORS_ALLOWED_ORIGINS
  ? process.env.CORS_ALLOWED_ORIGINS.split(",")
  : [];

export const corsConfig = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, ok?: boolean) => void
  ) => {
    console.log("CORS Origin:", origin);
    if (allowedOrigins.indexOf(origin ?? "") !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

