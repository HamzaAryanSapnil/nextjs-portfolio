// app/(auth)/login/page.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import LoginFormClient from "@/components/modules/auth/LoginFormClient";

export default async function LoginPage({
  searchParams,
}: {
  searchParams?: Promise<{ redirect?: string }>;
}) {
  const { redirect } = (await searchParams) || {};
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4 py-16">
      <div className="w-full max-w-md">
        <Card className="bg-card/80 border border-border shadow-lg">
          <CardContent className="p-6 sm:p-8">
            <h1 className="text-2xl font-bold mb-1">Admin Login</h1>
            <p className="text-sm text-muted-foreground mb-6">
              This page is for admin only. If you are not the admin, your
              credentials will not match.
            </p>

            <LoginFormClient redirect={redirect} />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
