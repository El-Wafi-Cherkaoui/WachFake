import HeroLayout from "@/components/heroPage/HeroLayout";
import Image from "next/image";
import heroPageImg from "@public/images/heroPageImg.png"
import HeroIntroContent from "@/components/heroPage/HeroIntroContent";
import Footer from "@/components/heroPage/HeroFooter";

export default async function Home() {
  return (
    <HeroLayout>
      <div>
        <Image priority alt="" src={heroPageImg}/>
      </div>
      <HeroIntroContent/>
    </HeroLayout>
  )
}