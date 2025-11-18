"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export default function LoginSuccessToast() {
  const searchParams = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    if (searchParams.get("logged-in") === "true") {
      toast.success("You have been logged in successfully");
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete("logged-in");
      router.replace(newUrl.toString());
    }
  }, [searchParams, router]);

  return <div>LoginSuccessToast</div>;
}
