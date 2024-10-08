// import { signUpUserSchema } from "@/app/validationSchema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { Prisma, PrismaClient } from "@prisma/client";
import { signUpUserSchema } from "@/app/validation/authValidationSchema";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validation = signUpUserSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(validation.error.format(), { status: 400 });
    }

    const hashPassword = await bcrypt.hash(body.password, 10);

    const newUser = await prisma.user.create({
      data: { email: body.email, password: hashPassword },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
