"use server"
import { auth } from "@/auth";
import SignInBtn from "./components/SignInBtn";
import Image from "next/image";
import SignOutBtn from "./components/SignOutBtn";

export default async function Home() {
  const session = await auth()
  console.log(session);
  if(session?.user){
    return <div>
      Welcome {session.user.name}
      {
        session.user.image &&
        <Image src={session.user.image ?? ""} width={80} height={80} alt="" className="rounded-full"/>
      }
      <SignOutBtn/>
    </div>
  }
  return (
    <div>
      You aren't signed in <br/>
      <SignInBtn/>
    </div>
  );
}
