import { z } from "zod";

const signupSchema = z
  .object({
    first_name: z
      .string()
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name must be less than 50 characters")
      .regex(
        /^[a-zA-Z\s-]+$/,
        "First name can only contain letters, spaces, or hyphens",
      )
      .transform((val) => val.trim()),

    last_name: z
      .string()
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name must be less than 50 characters")
      .regex(
        /^[a-zA-Z\s-]+$/,
        "Last name can only contain letters, spaces, or hyphens",
      )
      .transform((val) => val.trim()),

    email: z
      .string()
      .email("Please enter a valid email address")
      .max(255, "Email is too long")
      .transform((val) => val.trim().toLowerCase()),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(72, "Password must be less than 72 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character",
      ),

    confirm_password: z.string(),

    terms: z
      .string({
        required_error:
          "You must agree to the terms (we know you won't read them)",
      })
      .refine((val) => val === "on", "You must agree to the terms"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export const validateSignup = (req, res, next) => {
  const result = signupSchema.safeParse(req.body);

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;

    // grab the first error message from each field
    const firstErrors = Object.fromEntries(
      Object.entries(errors).map(([field, messages]) => [field, messages[0]]),
    );

    return res.render("index", {
      error: Object.values(firstErrors)[0], // show first error on top
      errors: firstErrors, // pass all errors for per-field display
      formData: req.body, // re-fill the form
    });
  }

  // attach sanitized + transformed data to req
  req.validatedData = result.data;
  next();
};
