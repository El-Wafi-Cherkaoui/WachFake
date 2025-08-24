"use server"

import { auth } from "@/auth";
import MobileNavBarGuest from "./MobileNavBarGuest";
import MobileLogo from "./MobileLogo";
import CompactMenu from "./CompactMenu";
import NavBarMobileLogged from "./NavBarMobileLogged";
import SubProfileMobile from "./SubProfileMobile";


export default async function MobileHeader() {
  const session = await auth()
  return(
      <header className="mobileHeader">
        <CompactMenu>
          <SubProfileMobile/>
        {
          session?.user
          ? <NavBarMobileLogged/>
          : <MobileNavBarGuest/>
        }
        </CompactMenu>
        <MobileLogo/>
      </header>
  )
}
