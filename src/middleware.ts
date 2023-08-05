import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    console.log('yo')
    return NextResponse.redirect(new URL("/home", request.url))

} 

export const config = {
    matcher: "/"
}

