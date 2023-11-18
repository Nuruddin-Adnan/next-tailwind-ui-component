'use client'

import Table from '@/components/ui/table/Table';
import React from 'react'

const columns = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'email', label: 'Email' },
];

const data = [
    { key: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
    { key: 2, name: 'Jane sing', age: 30, email: 'jane@example.com' },
    { key: 3, name: 'Adnan Doe', age: 50, email: 'jane@example.com' },
    { key: 4, name: 'Rimi Doe', age: 15, email: 'jane@example.com' },
    // Add more data as needed
];

export default function TablePage() {
    const handleEdit = (rowKey: any) => {
        // Implement edit logic here
        console.log('Edit Key:', rowKey);
    };

    const handleDelete = (rowKey: any) => {
        // Implement delete logic here
        console.log('Delete Key:', rowKey);
    };

    return (
        <div className="App">
            <Table columns={columns} data={data} uniqueKey="key" onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
}
