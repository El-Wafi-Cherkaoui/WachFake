"use client"
import { login } from "@/lib/actions/auth";

export default function SignInBtn({type}: {type: string}) {
    return(
        <button 
        className="bg-red-500 p-2 mx-2 rounded-2xl cursor-pointer" 
        onClick={()=>{login(type)}}>
            sign in using {type}
        </button>
    )
}