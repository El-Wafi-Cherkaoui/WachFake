"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname()
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
}