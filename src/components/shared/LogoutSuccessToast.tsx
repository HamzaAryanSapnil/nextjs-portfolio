"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export default function LogoutSuccessToast() {
  const searchParams = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    if (searchParams.get("logged-out") === "true") {
        toast.success("You have been logged out successfully")
        const newUrl = new URL(window.location.href)
        newUrl.searchParams.delete("logged-out")
        router.replace(newUrl.toString())
    }
  }, [searchParams, router]);

  return null;
}
