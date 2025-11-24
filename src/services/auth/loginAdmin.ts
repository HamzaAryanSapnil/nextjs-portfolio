/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import z, { ZodError } from "zod";
import { parse } from "cookie";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt, { JwtPayload } from "jsonwebtoken";
import {
  getDefaultDashboardRoute,
  isValidRedirectForRole,
  UserRole,
} from "@/lib/auth-utils";
import { setCookie } from "./tokenHandler";
import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { loginValidationZodSchema } from "@/zod/auth.validation";

const loginValidationSchema = z.object({
  email: z.email({ error: "Invalid email address" }),
  password: z.string().min(6),
});

export const loginAdmin = async (
  _currentState: any,
  formData: any
): Promise<any> => {
  try {
    const redirectTo = formData.get("redirect") as string | null;
    let accessTokenObject: null | any = null;
    let refreshTokenObject: null | any = null;
    
    const payload = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    
    
    // const validatedFields = loginValidationSchema.safeParse({
    //   email: formData.get("email"),
    //   password: formData.get("password"),
    // });

    // if (!validatedFields.success) {
    //   return {
    //     success: false,
    //     errors: validatedFields.error.issues.map((issue) => ({
    //       field: issue.path[0],
    //       message: issue.message,
    //     })),
    //   };
    // }

       if (zodValidator(payload, loginValidationZodSchema).success === false) {
         return zodValidator(payload, loginValidationZodSchema);
       }

       const validatedPayload = zodValidator(
         payload,
         loginValidationZodSchema
       ).data;


    const res = await serverFetch.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      {
        method: "POST",
        body: JSON.stringify(validatedPayload),
      }
    );

    const setCookieHeaders = res.headers.getSetCookie();

    if (setCookieHeaders && setCookieHeaders.length > 0) {
      setCookieHeaders.forEach((cookieString: string) => {
        const parsedCookie = parse(cookieString);
        // Here you can handle the cookie as needed
        console.log("parsed cookie", parsedCookie);

        if (parsedCookie["accessToken"]) {
          accessTokenObject = parsedCookie;
        }
        if (parsedCookie["refreshToken"]) {
          refreshTokenObject = parsedCookie;
        }
      });
    } else {
      console.log("No Set-Cookie headers found");
      throw new Error("Authentication cookies not found");
    }

    if (!accessTokenObject) {
      throw new Error("Authentication tokens not found");
    }

    if (!refreshTokenObject) {
      throw new Error("Authentication tokens not found");
    }

    console.log("Access Token Object: ", accessTokenObject);
    console.log("Refresh Token Object: ", refreshTokenObject);

    await setCookie("accessToken", accessTokenObject.accessToken, {
      httpOnly: true,
      maxAge: parseInt(accessTokenObject["Max-Age"]) || 1000 * 60 * 60,
      path: accessTokenObject.Path || "/",
      sameSite: accessTokenObject["SameSite"] || "none",
      secure: true,
      // expires: accessTokenObject["Expires"] || "7d",
    });

    await setCookie("refreshToken", refreshTokenObject.refreshToken, {
      httpOnly: true,
      maxAge:
        parseInt(refreshTokenObject["Max-Age"]) || 1000 * 60 * 60 * 24 * 90,
      path: refreshTokenObject["Path"] || "/",
      sameSite: refreshTokenObject["SameSite"] || "none",
      secure: true,
      // expires: refreshTokenObject["Expires"] || "30d",
    });

    const result = await res.json();

    if (result?.success) {
      const verifiedToken: JwtPayload | string = jwt.verify(
        accessTokenObject.accessToken,
        process.env.JWT_SECRET as string
      );

      if (typeof verifiedToken === "string") {
        throw new Error("Invalid token");
      }

      const userRole: UserRole = verifiedToken.role as UserRole;

      if (!result.success) {
        throw new Error(result.message || "Invalid credentials");
      }

      if (redirectTo) {
        const requestedPath = redirectTo.toString();
        if (isValidRedirectForRole(requestedPath, userRole)) {
          redirect(`${requestedPath}/?logged-in=true`);
        } else {
          redirect(`${getDefaultDashboardRoute(userRole)}/?logged-in=true`);
        }
      } else {
        redirect("/admin/dashboard?logged-in=true");
      }
    }
  } catch (err: any) {
    console.error("Login error:", err);
    if (err?.digest?.startsWith("NEXT_REDIRECT")) {
      throw err;
    }
    return {
      success: false,
      message:
        err instanceof Error
          ? process.env.NODE_ENV === "development"
            ? err.message
            : "Invalid Credentials"
          : err instanceof ZodError
          ? err.issues.map((issue) => issue.message).join(", ")
          : "An unknown error occurred",
    };
  }
};
