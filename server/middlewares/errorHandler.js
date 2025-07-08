import { ZodError } from "zod";

export default function errorHandler(err, req, res, next) {
  // 1) Zod validation errors
  if (err instanceof ZodError) {
    const errors = err.errors.map((e) => ({
      field: e.path[0],
      message: e.message,
    }));
    return res.status(400).json({ errors });
  }

  // 2) Already‐formatted errors (e.g. thrown via `next(new AppError(...))`)
  if (err.statusCode && err.message) {
    return res
      .status(err.statusCode)
      .json({ message: err.message });
  }

  // 3) Fallback for unexpected errors
  console.error(err);
  res
    .status(500)
    .json({ message: "Internal server error" });
}
