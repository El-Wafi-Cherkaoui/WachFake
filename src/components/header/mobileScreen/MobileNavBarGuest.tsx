"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNavBarGuest() {
    const pathname = usePathname()
    return (
        <>
            <Link href={"/"} className={`${pathname === "/" ? "active" : " "}`}>
                <span>الرئيسية</span>
            </Link>
            <Link href={"/goals"} className={`${pathname?.startsWith("/goals") ? "active" : ""}`}>
                <span>هدفنا</span>
            </Link>
            <Link href={"/about"} className={`${pathname?.startsWith("/about") ? "active" : ""}`}>
                <span>من نحن</span> 
            </Link>
        </>
    )   
}