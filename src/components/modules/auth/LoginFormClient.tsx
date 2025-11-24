/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// components/auth/LoginFormClient.tsx
"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { loginAdmin } from "@/services/auth/loginAdmin";
import { toast } from "sonner";
import { getInputFieldError } from "@/lib/getInputFieldError";
import InputFieldError from "@/components/shared/InputFieldError";

export default function LoginFormClient({ redirect }: { redirect?: string }) {
  const router = useRouter();
  const [state, formAction, isPending] = React.useActionState(loginAdmin, null);

  console.log("login state: ", state);


  useEffect(() => {
    if (state && !state?.success && state?.message) {
      toast.error(state?.message);
    }

    // return () => {};
  }, [state]);

  return (
    <>
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
          <InputFieldError field="email" state={state} />
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
          <InputFieldError field="password" state={state} />
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
