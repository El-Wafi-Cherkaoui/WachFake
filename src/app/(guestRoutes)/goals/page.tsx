import Image from "next/image";
import aboutImg from "@public/images/goals.png"
import GoalsContent from "@/components/goalsPage/GoalsContent";
import GoalsLayout from "@/components/goalsPage/GoalsLayout";

export  default function Goals() {
    return(
        <GoalsLayout>
            <Image src={aboutImg} height={100} width={300} alt="about img"/>
            <GoalsContent/>
        </GoalsLayout>
    )
}