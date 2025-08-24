import Image from "next/image";
import aboutImg from "@public/images/about.png"
import AboutContent from "@/components/aboutPage/AboutContent";
import AboutLayout from "@/components/aboutPage/AboutLayout";

export  default function About() {
    return(
        <AboutLayout>
            <Image src={aboutImg} height={100} width={300} alt="about img"/>
            <AboutContent/>
        </AboutLayout>
    )
}