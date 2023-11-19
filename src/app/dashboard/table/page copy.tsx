'use client'

import Table from '@/components/ui/table/Table';
import React, { useState } from 'react'

const columns = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'email', label: 'Email' },
];

const initialData = [
    { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
    { id: 2, name: 'John Sina', age: 30, email: 'jane@example.com' },
    { id: 3, name: 'Adnan Doe', age: 50, email: 'jane@example.com' },
    { id: 4, name: 'Rimi Doe', age: 15, email: 'jane@example.com' },
    // Add more data as needed
];

export default function TablePage() {
    const [data, setData] = useState(initialData);

    const handleView = (rowKey: any) => {
        // Implement view logic here
        console.log('View Key:', rowKey);
    };

    const handleEdit = (rowKey: any) => {
        // Implement edit logic here
        console.log('Edit Key:', rowKey);
    };

    const handleDelete = (rowKey: any) => {
        // Implement delete logic here
        console.log('Delete Key:', rowKey);
    };

    const handleSort = (key: string) => {
        setData((prevData) => {
            const newData = [...prevData];
            newData.sort((a: any, b: any) => {
                if (a[key] < b[key]) return -1;
                if (a[key] > b[key]) return 1;
                return 0;
            });
            return newData;
        });
    };

    return (
        <div>
            <Table columns={columns} data={data} uniqueKey="id" customTableClass='border-0' customThClass='!py-0' customTdClass='!py-0' onView={handleView} onEdit={handleEdit} onDelete={handleDelete} onSort={handleSort} action={true} responsive />
        </div>
    );
}
