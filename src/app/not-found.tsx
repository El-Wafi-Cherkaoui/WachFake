import Image from "next/image";
import NotFoundImg from "@public/images/notFoundImg.png"
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
        </div>
    )
}