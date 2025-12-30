
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";
export async function POST(request: Request) {
      const session = await auth();
      if (!session?.user || !session?.user?.id) {
            return NextResponse.redirect(new URL("/auth/signin", request.url))
      }
      try {
            const data = await request.json()
            console.log({
                  ...data,
                  postedById: session.user.id,
            })
            const job = await prisma.job.create({
                  data: {
                        ...data,
                        postedById: session.user.id,
                  }
            })
            return NextResponse.json(
                  { message: "success", job },
                  { status: 201 }
            );
      } catch (err) {
            return NextResponse.json(
                  { message: "fail", err },
                  { status: 500 }
            );
      }

}
export async function GET(request: Request) {
     
      try {
            const data = await request.json()
            
            const jobs = await prisma.job.findMany({
                  orderBy: { postedAt: "desc" }, 
                });
            return NextResponse.json(
                  { message: "success", jobs },
                  { status: 201 }
            );
      } catch (err) {
            return NextResponse.json(
                  { message: "fail", err },
                  { status: 500 }
            );
      }

}