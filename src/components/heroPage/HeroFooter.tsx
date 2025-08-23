import Link from "next/link";

export default function Footer(){
    return(
        <p className="text-center p-2 pb-0 font-medium opacity-70 mt-auto">
            <Link href={"https://github.com/El-Wafi-Cherkaoui/WachFake"}><u className="hover:underline">github</u></Link> مشروع مفتوح المصدر على
        </p>
    )
}