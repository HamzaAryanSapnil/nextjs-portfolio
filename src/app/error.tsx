// app/error.tsx
"use client";

import React from "react";
import ErrorUI from "@/components/ErrorUI";

interface Props {
  error: Error;
  reset: () => void;
}

export default function RootError({ error, reset }: Props) {
  // server-side logging could be added; here we console.error for dev
  React.useEffect(() => {
    console.error("Unhandled app error:", error);
    // optionally: send to logging service e.g. Sentry
  }, [error]);

  return (
    <ErrorUI
      title="Something went wrong"
      message={error?.message ?? "An unexpected error occurred."}
      reset={reset}
    />
  );
}
