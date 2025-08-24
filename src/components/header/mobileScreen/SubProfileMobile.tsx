import { auth } from "@/auth"
import Image from "next/image"
import Link from "next/link"

export default async function SubProfileMobile(){
    const session = await auth()
    if(session?.user){
        return(
            <div className="subProfileMobile">
                <h6 className="flex flex-col gap-6 justify-center items-center">
                    <span>
                        <Image className="rounded-full border-4 shadow-black/50 shadow-xl border-secondaryColor "
                        src={session.user.image || ""} width={120} 
                        height={120} alt="profile image" />
                    </span>
                    <Link href={"/profile"} className="hover:underline"> 
                        {session.user.name}
                    </Link>
                </h6>
            </div>
        )
    }
    else{
        return (
            <div>
                <Link href={"http://localhost:3000/api/auth/signin"}>
                    <button className="signupBtn">
                        إنضم لنا
                    </button> 
                </Link>
            </div>
        )
    }
}