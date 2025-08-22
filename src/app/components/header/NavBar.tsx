"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const session = useSession()
    const pathname = usePathname()
    console.log(pathname);
    
    if (session.data?.user) {
        return(
            <div className="navBar">
                <Link href={"/videos"} className={`${pathname?.startsWith("/videos") ? "active" : ""}`}>
                    <span >فيديو</span>
                </Link>
                <Link href={"/images"} className={`${pathname?.startsWith("/images") ? "active" : ""}`}>
                    <span>صور</span>
                </Link>
                <Link href={"/profile"} className={`${pathname?.startsWith("/profile") ? "active" : ""}`}>
                    <span>ملفي</span>
                </Link>
            </div>
        )
    } else{
        return(
            <div className="navBar">
                <Link href={"/"} className={`${pathname === "/" ? "active" : " "}`}>
                    <span>الرئيسية</span>
                </Link>
                <Link href={"/ourGoals"} className={`${pathname?.startsWith("/goals") ? "active" : ""}`}>
                    <span>هدفنا</span>
                </Link>
                <Link href={"/about"} className={`${pathname?.startsWith("/about") ? "active" : ""}`}>
                    <span>من نحن</span> 
                </Link>
            </div>
        )
    }
}