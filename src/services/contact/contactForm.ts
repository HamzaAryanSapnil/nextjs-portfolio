/* eslint-disable @typescript-eslint/no-explicit-any */

"use server";

import { serverFetch } from "@/lib/server-fetch";
import {
  contactFormZodSchema,
  ContactFormZodSchema,
} from "@/zod/contact.validation";
import { zodValidator } from "@/lib/zodValidator";

export async function submitContactForm(_prevState: any, formData: FormData) {
  try {
    const payload: ContactFormZodSchema = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    // Validate using Zod
    if (zodValidator(payload, contactFormZodSchema).success === false) {
      return zodValidator(payload, contactFormZodSchema);
    }

    const validatedPayload = zodValidator(payload, contactFormZodSchema).data;

    // Send to backend API
    const response = await serverFetch.post("/contact/submit", {
      body: JSON.stringify(validatedPayload),
      headers: { "Content-Type": "application/json" },
    });

    // Check if response is ok
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));

      // Convert errors object to array format if needed
      let errorsArray: { field: string; message: string }[] = [];
      if (errorData?.errors) {
        if (Array.isArray(errorData.errors)) {
          errorsArray = errorData.errors;
        } else if (typeof errorData.errors === "object") {
          // Convert object format to array format
          errorsArray = Object.entries(errorData.errors).flatMap(
            ([field, messages]) => {
              const messageArray = Array.isArray(messages)
                ? messages
                : [messages];
              return messageArray.map((msg: string) => ({
                field,
                message: msg,
              }));
            }
          );
        }
      }

      return {
        success: false,
        message:
          errorData?.message || `Request failed with status ${response.status}`,
        errors: errorsArray,
      };
    }

    const result = await response.json();

    return result;
  } catch (error: any) {
    console.error("Contact form submission error:", error);
    return {
      success: false,
      message:
        error?.message || "Failed to submit contact form. Please try again.",
      errors: [],
    };
  }
}
