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
        <div className='container mx-auto'>
            <Table
                columns={columns}
                data={users}
                uniqueKey="id"
                customTdClass="print:text-sm !py-0"
                search
                print
            />
        </div>
    )
}
