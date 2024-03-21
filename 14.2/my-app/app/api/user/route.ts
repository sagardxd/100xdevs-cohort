import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const client = new PrismaClient();

export function GET() {
    return Response.json({
        email: "sagar@gmail.com",
        name: 'sagar'
    })
}

export async function POST(req: NextRequest) {
    const body = await req.json()

    const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })

    console.log(user.id)
    return NextResponse.json({
        msg: "Sign up"
    })
}