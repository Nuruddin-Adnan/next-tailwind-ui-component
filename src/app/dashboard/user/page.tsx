import Table from '@/components/ui/table/Table';
import React from 'react'

async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        next: { revalidate: 30 }
    })

    const data = res.json()
    return data;
}

export default async function UserPage() {
    const users = await getUsers()

    const columns = [
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'address.city', label: 'City' },
        { key: 'phone', label: 'Phone' },
    ];
    return (
        <div>
            <Table
                columns={columns}
                data={users}
                uniqueKey="id"
                customTableClass="border-0"
                customTdClass="print:text-xs text-sm"
                caption={<div className="text-center pt-6"><h2 className='text-2xl'>This is table heading</h2></div>}
                search
                print

            />
        </div>
    )
}
