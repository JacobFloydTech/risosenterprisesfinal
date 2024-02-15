import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) { 
    const { token } = await req.json();
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY!}&response=${token}`)
    const data = await response.json();
    console.log(data);
    return NextResponse.json(data);
}