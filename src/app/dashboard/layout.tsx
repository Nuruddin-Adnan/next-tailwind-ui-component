import React, { ReactNode } from "react";
import Header8 from "@/components/ui/header/Header8";

export default function DashbaordLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header8 />
            {children}
        </>
    )
}
