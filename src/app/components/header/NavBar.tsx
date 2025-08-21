import { auth } from "@/auth";
import Link from "next/link";

export default async function NavBar() {
    const session = await auth()
    if (session?.user) {
        return(
            <div className="navBar">
                <Link href={"/videos"}>
                    <span>فيديو</span>
                </Link>
                <Link href={"/images"}>
                    <span>صور</span>
                </Link>
                <Link href={"/profile"}>
                    <span>ملفي</span>
                </Link>
            </div>
        )
    } else{
        return(
            <div className="navBar">
                <Link href={"/"}>
                    <span>الرئيسية</span>
                </Link>
                <Link href={"/ourGoals"}>
                    <span>هدفنا</span>
                </Link>
                <Link href={"/about"}>
                    <span>من نحن</span>
                </Link>
            </div>
        )
    }
}