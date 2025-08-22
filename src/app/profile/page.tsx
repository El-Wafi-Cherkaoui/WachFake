"use server"
import Image from "next/image"
import SignOutBtn from "../../components/SignOutBtn"
import { auth } from "@/auth"

export default async function Profile() {
    const session = await auth()
    if(session?.user){
    return(
        <div>
            Welcome {session.user.name}<br/>
            {session.user.email}
            {
                session.user.image &&
                <Image src={session.user.image ?? ""} width={80} height={80} alt="" className="rounded-full"/>
            }
            <SignOutBtn/>
        </div>
    )
    } 
    else{
        return(
            "nothing to see"
        )
    }
}