// app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const username = String(body.username ?? "");
    const password = String(body.password ?? "");

    // validate env vars
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

    if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
      console.error("Admin credentials not set in environment variables.");
      return NextResponse.json(
        { message: "Server not configured." },
        { status: 500 }
      );
    }

    // simple check
    if (username !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { message: "Only admin can login." },
        { status: 401 }
      );
    }

    // create session token (in production store in DB or use signed JWT)
    const sessionToken = crypto.randomUUID();

    // Set cookie (HttpOnly, Secure in prod). Adjust domain/path/max-age as needed.
    const cookie = `admin_session=${sessionToken}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${
      60 * 60 * 24 * 7
    }${process.env.NODE_ENV === "production" ? "; Secure" : ""}`;

    // optionally: store sessionToken in DB against admin user for server-side validation (recommended)
    // await saveSessionToDb(sessionToken, ADMIN_USERNAME);

    return NextResponse.json(
      { ok: true },
      { status: 200, headers: { "Set-Cookie": cookie } }
    );
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }
}
