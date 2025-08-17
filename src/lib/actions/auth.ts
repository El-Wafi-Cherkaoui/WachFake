"use server"
import { signIn, signOut } from "@/auth";

export const login = async (type : string) => {
    await signIn(type, {redirectTo: "/"})
}
export const logout = async () => {
    await signOut({redirectTo: "/"})
}