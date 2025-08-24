"use server"

import SubProfile from "./SubProfile";
import Logo from "@/components/header/lgScreen/Logo";
import { SessionProvider } from "next-auth/react";
import NavBar from "./NavBar";
import NavBarGuest from "./NavBarGuest";
import { auth } from "@/auth";


export default async function LgHeader() {
  const session = await auth()
  return(
      <header className="lgHeader">
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