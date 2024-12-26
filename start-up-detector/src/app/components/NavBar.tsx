import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function NavBar() {
    return (
        <header className = "px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={144} height={30} />
                </Link>
            </nav>
        </header>
    )
}