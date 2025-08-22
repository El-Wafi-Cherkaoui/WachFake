"use client"
import GuestSvg from "@/components/svgs/GuestSvg";
import SearchSvg from "@/components/svgs/SearchSvg";
import Link from "next/link";

export default function HeroBtns() {
    return(
        <div className="btns">
            <Link href={"http://localhost:3000/api/auth/signin"}>
                <button className="primaryBtn">
                    <SearchSvg width="24px" />
                    ! إبدأ التحقيق الآن
                </button>
            </Link>
            
            <Link href={"http://localhost:3000/api/auth/signin"}>
                <button className="secondaryBtn">
                    <GuestSvg height="20px" width="20px" />
                    دخول كضيف
                </button>
            </Link>
        </div>
    )
}