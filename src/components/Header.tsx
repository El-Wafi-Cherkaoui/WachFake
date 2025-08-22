"use server"

import NavBar from "@/components/header/NavBar";
import SubProfile from "./SubProfile";
import Logo from "@/components/header/Logo";
import { SessionProvider } from "next-auth/react";

export default async function Header() {
    return(
        <header>
          <SubProfile/>
          <SessionProvider>
          <NavBar/>
          </SessionProvider>
          <Logo/>
        </header>
    )
}