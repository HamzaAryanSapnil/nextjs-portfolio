"use client";

import { logout } from "@/services/auth/logout";
import { Button } from "../ui/button";

export default function LogoutBtn() {
  const handleLogout = async () => {
    await logout();
  };
  return <Button variant={"outline"} onClick={handleLogout}>Logout</Button>;
}
