"use server"

import SubProfile from "./SubProfile";
import Logo from "@/components/header/Logo";
import { SessionProvider } from "next-auth/react";
import NavBar from "./header/NavBar";
import NavBarGuest from "./header/NavBarGuest";
import { auth } from "@/auth";


export default async function Header() {
  const session = await auth()
  return(
      <header>
        <SubProfile/>
        <SessionProvider>
        {
          session?.user
          ? <NavBar/>
          : <NavBarGuest/>
        }
        </SessionProvider>
        <Logo/>
      </header>
  )
}