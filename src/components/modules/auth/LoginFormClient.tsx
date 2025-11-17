/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// components/auth/LoginFormClient.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast, Toaster } from "sonner";
import { Eye } from "lucide-react";
import { loginAdmin } from "@/services/auth/loginAdmin";

export default function LoginFormClient({ redirect }: { redirect?: string }) {
  const router = useRouter();
  const [state, formAction, isPending] = React.useActionState(loginAdmin, null);

  console.log("login state: ", state);
  const getFieldsErrors = (field: string) => {
    if (state && state?.errors) {
      return (
        state?.errors?.find((error: any) => error.field === field)?.message ||
        ""
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <Toaster position="top-right" richColors />
      <form action={formAction} className="space-y-4">
        {redirect && <input type="hidden" name="redirect" value={redirect} />}
        <div>
          <Label htmlFor="email" className="text-sm">
            Admin Email
          </Label>
          <Input
            id="email"
            name="email"
            type="text"
            autoComplete="admin-email"
            placeholder="admin@email.com"
            required
          />
          {getFieldsErrors("email") && (
            <p className="text-sm text-red-600">{getFieldsErrors("email")}</p>
          )}
        </div>

        <div>
          <Label htmlFor="password" className="text-sm">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="••••••••"
            autoComplete="current-password"
            required
          />
          {getFieldsErrors("password") && (
            <p className="text-sm text-red-600">
              {getFieldsErrors("password")}
            </p>
          )}
        </div>

        <div className="pt-2">
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Signing in…" : "Sign in"}
          </Button>
        </div>
        <Button onClick={() => router.push("/")}>return to home</Button>
      </form>
    </>
  );
}
