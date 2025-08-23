import Image from "next/image";
import NotFoundImg from "@public/images/notFoundImg.png"
import patternImg from "@public/images/pattern.png"
export default function NotFound(){
    return(
        <div className="notFound" dir="rtl">
            <Image src={NotFoundImg} width={300} height={300} alt=""/>
            <h1>
                 الوجهة المقصودة 
                <span>
                    غير موجودة !
                </span>
            </h1> 
            <Image 
                className="pattern patternImg"
                src={patternImg} width={400} height={300} alt=""
            /> 
            <Image 
                className="pattern patternImg2"
                src={patternImg} width={400} height={300} alt=""
            /> 
        </div>
    )
}