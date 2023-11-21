import React, { ReactNode } from "react";
import Header8 from "@/components/ui/Header/Header8";

export default function DashbaordLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header8 />
            {children}
        </>
    )
}
