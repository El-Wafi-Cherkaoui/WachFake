"use client"
import { logout } from "@/lib/actions/auth";
import SignoutSvg from "./svgs/SignoutSvg";

export default function SignOutBtn() {
    return(
        <button className="logoutBtn"
        onClick={logout}>
            <SignoutSvg width={30}/>
        </button>
    )
}