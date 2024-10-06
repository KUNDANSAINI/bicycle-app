import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export default function Middleware(request) {
    try {
        const path = request.nextUrl.pathname;
        const checkPublicPath = path === '/signup' || path === '/login' || path === '/';

        if (checkPublicPath) {
            return NextResponse.next();
        }
        const getCookies = cookies()
        const token = getCookies.get('token').value || ""
        if (!token && !checkPublicPath) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
        return NextResponse.next();
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Token Not Found" })
    }
}

export const config = {
    matcher: [
        '/admin/dashboard',
        '/',
        '/login',
        '/signup',
    ],
};