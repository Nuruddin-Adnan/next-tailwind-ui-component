import React, { ReactNode } from "react";
import Link from 'next/link'

export default function DashbaordLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <div>DashbaordLayout</div>
            <Link href='/'>Home</Link>
            <Link href='/dashboard/navbar'>Navbar</Link>
            <Link href='/dashboard/modal'>Modal</Link>
            {children}
        </>
    )
}
