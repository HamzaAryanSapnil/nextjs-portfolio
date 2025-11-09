// components/ClientNavHeader.tsx
"use client";

import React from "react";

export default function ClientNavHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return <header className="w-full z-50">{children}</header>;
}
