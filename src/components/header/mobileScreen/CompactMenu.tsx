"use client"

import CloseSvg from "@/components/svgs/CloseSvg"
import MenuSvg from "@/components/svgs/MenuSvg"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode, useState } from "react"

export default function CompactMenu({children} : {children: ReactNode}) {
    const [visible, toggleMenu] = useState(false)
    function showCompactMenu() {
        toggleMenu(!visible)
    }
    return(
        <>
        <button onClick={showCompactMenu}>
            <MenuSvg width="64px"/> 
        </button>
        {
            visible && 
            <div className="test">
                <button className="p-4 absolute left-5 top-5" onClick={showCompactMenu}>
                    <CloseSvg width="64px"/>
                </button>
                <div className="compactMenuContent">
                    {children}
                </div>
            </div>
        }
        </>
    )
}