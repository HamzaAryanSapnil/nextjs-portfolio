"use server";
import { redirect } from "next/navigation";
import { deleteCookie } from "./tokenHandler";

export const logout = async () => {
  await deleteCookie("accessToken");
  await deleteCookie("refreshToken");

  redirect("/?logged-out=true");
};
