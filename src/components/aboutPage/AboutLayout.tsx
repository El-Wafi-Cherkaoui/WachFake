"use client"
import { ReactNode } from "react";

export default function AboutLayout({children} : {children: ReactNode}) {
    return(
        <div className="aboutLayout">
            {children}
        </div>
    )
}