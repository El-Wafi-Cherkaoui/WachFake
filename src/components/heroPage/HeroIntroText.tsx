"use client"
import Footer from "./HeroFooter";
import HeroStats from "./HeroStats";
import HeroBtns from "./subComponents/HeroBtns";

export default function HeroIntroText() {
    return(
        <div className="flex flex-col h-full">
            <div className="py-4">
                <h1>
                واش تقدر تفرق بين الحقيقي والمزور
                </h1>
                <p className="mt-4">
                    درب عينيك وتعلم كيفاش تعرف الفيديوهات والصور اللي مصنوعة بالذكاء الاصطناعي.
                    شارك فالتحديات وتعلم بحالاش تحمي راسك من الأخبار والسردية الكاذبة.
                </p>
            </div>
            <HeroBtns/>
            <HeroStats/>
            <Footer/>
        </div>
    )
}