import Header from '@/components/ui/Header/Header'
import Header2 from '@/components/ui/Header/Header2'
import Header3 from '@/components/ui/Header/Header3'
import React from 'react'

export default function NavbarPage() {
    return (
        <div className='m-4 grid gap-5'>
            <Header />
            <Header2 />
            <Header3 />
        </div>
    )
}
