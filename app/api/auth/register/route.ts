import { NextResponse } from "next/server";
import supabase from "@/lib/supabase";

export const POST = async (req: Request) => {
  try {
    const { email, password } = await req.json();
    console.log("Received data:", { email, password });

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { message: "User created successfully!", user: data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
