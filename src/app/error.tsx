"use client"
import errorImg from "@public/images/error.png"

import Image from "next/image"

export default function Error() {
    return(
        <div className="h-full flex justify-center items-center flex-col gap-2">
            <Image alt="error img" src={errorImg} width={400} height={400} />
            <h3 className="underline decoration-primaryColor decoration-4 underline-offset-10 text-textColor p-2 text-4xl flex items-center" dir="rtl">
                نعتذر منك,  حدث خطأ ما !
            </h3>
        </div>
    )
}