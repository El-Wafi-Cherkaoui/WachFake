"use client"
import { ReactNode } from "react";

export default function GoalsLayout({children} : {children: ReactNode}) {
    return(
        <div className="goalsLayout">
            {children}
        </div>
    )
}