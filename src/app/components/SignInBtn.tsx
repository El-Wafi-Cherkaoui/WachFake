"use client"
import { login } from "@/lib/actions/auth";

export default function SignInBtn() {
    return(
        <button 
        className="bg-red-500" 
        onClick={login}>
            sign in
        </button>
    )
}