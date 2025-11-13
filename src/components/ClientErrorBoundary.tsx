// components/ClientErrorBoundary.tsx
"use client";

import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorUI from "./ErrorUI";

export default function ClientErrorBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary
      FallbackComponent={({ error, resetErrorBoundary }) => (
        <ErrorUI
          title="Something went wrong"
          message={error.message}
          reset={resetErrorBoundary}
        />
      )}
      onError={(error, info) => {
        // send to logging service
        console.error("Client boundary error:", error, info);
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
