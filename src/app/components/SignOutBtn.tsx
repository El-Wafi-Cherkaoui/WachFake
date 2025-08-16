"use client"
import { logout } from "@/lib/actions/auth";

export default function SignOutBtn() {
    return(
        <button className="bg-red-500" onClick={()=>logout()}>sign out</button>
    )
}