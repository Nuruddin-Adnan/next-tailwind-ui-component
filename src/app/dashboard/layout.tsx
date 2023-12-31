import Header8 from "@/components/ui/header/Header8";
import React, { ReactNode } from "react";

export default function DashbaordLayout({ children }: { children: ReactNode }) {
    return (
        <div className="bg-gray-200 min-h-screen">
            <Header8 />
            {children}
        </div>
    )
}
