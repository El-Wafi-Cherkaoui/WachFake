import { auth } from "@/auth";
import SignInBtn from "./components/SignInBtn";
import Image from "next/image";
import SignOutBtn from "./components/SignOutBtn";
import SubProfile from "@/components/SubProfile";

export default async function Home() {
  // const session = await auth()
  // if(session?.user){
  //   return <div>
  //     Welcome {session.user.name}
  //     {
  //       session.user.image &&
  //       <Image src={session.user.image ?? ""} width={80} height={80} alt="" className="rounded-full"/>
  //     }
  //     <SignOutBtn/>
  //   </div>
  // }
  // return (
  //   <div className="p-2 flex flex-col gap-2">
  //     You aren't signed in <br/>
  //     <SignInBtn type="google"/>
  //     <SignInBtn type="github"/>
  //   </div>
  // );
  return (
      <></>
  )
}
