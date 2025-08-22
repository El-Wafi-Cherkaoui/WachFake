"use client"
import Statistic from "./subComponents/Statistic";
import StatsDots from "./subComponents/StatsDots";

export default function HeroStats() {
    return(
        <div className="stats">
            <div className="statsHeader">
                <h4 className="text-textColor">
                    : الإحصائيات تكشف أن
                </h4>
                <StatsDots/>
            </div>
            <div className="flex flex-col items-center">
                <Statistic 
                percentage="71%" 
                text=".من صور مواقع التواصل الإجتماعي مولدة عبر الذكاء الإصطناعي"
                />
                <Statistic 
                percentage="48%" 
                text=".من المقاطع المنشورة سنة 2023 أُستخدم فيها الذكاء الإصطناعي"
                />
                <Statistic 
                percentage="65%" 
                text="...من صُناع المحتوى يعتمدون على الذكاء الإصطناعي في مواقع التواصل الإجتماعي, التدوين"
                />
            </div>
        </div>
    )
}