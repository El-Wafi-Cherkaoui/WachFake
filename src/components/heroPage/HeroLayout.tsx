"use client"
import { ReactNode } from "react";

export default function HeroLayout({children} : {children: ReactNode}) {
    return(
        <div className="heroLayout">
            {children}
        </div>
    )
}