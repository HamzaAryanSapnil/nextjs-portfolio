/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
export const loginAdmin = async (
  _currentState: any,
  formData: any
): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    }).then((res) => res.json());

    console.log("login res", res);
    if (res?.success) {
      return res;
    }
  } catch (err) {
    console.error("Login error:", err);
    return {
      success: false,
      message: err instanceof Error ? err.message : "Internal Server Error",
    };
  }
};
