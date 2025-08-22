import HeroLayout from "@/components/heroPage/HeroLayout";
import Image from "next/image";
import heroPageImg1 from "@public/images/heroPageImg1.png"
import HeroIntroText from "@/components/heroPage/HeroIntroText";

export default async function Home() {
  return (
    <HeroLayout>
      <div>
        <Image width={200} height={400} alt="" src={heroPageImg1}/>
      </div>
      <HeroIntroText/>
    </HeroLayout>
  )
}