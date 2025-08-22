import SignOutBtn from "@/components/SignOutBtn"
import { auth } from "@/auth"
import Image from "next/image"
import Link from "next/link"

export default async function SubProfile(){
    const session = await auth()
    if(session?.user){
        return(
            <div className="subProfile group">
                <SignOutBtn/>
                <h6 >
                    <span>
                        <Image className=""
                        src={session.user.image || ""} width={30} 
                        height={30} alt="profile image" />
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