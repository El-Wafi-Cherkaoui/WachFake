import {NextResponse} from "next/server"

import type { NextRequest } from "next/server"

const protectedRoutes = ["/profile"];

export default async function middleware(request: NextRequest) {
    const {pathname} = request.nextUrl
    const isProtected = protectedRoutes.some((route)=>
        pathname.startsWith(route)
    )
    const sessionCookie = request.cookies.get("authjs.session-token") 
    
    if(isProtected && !sessionCookie){
        return NextResponse.redirect(new URL("/api/auth/signin", request.url))
    }
    return NextResponse.next()
}