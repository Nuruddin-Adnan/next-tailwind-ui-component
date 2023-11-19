'use client'

import Table from '@/components/ui/table/Table';
import React, { useState } from 'react';

const columns = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'email', label: 'Email' },
    { key: 'address.dist', label: 'Dist' },
    { key: 'address.division', label: 'Division' },
];

const initialData = [
    { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
    { id: 2, name: 'Cohn Sina', age: 30, email: 'jane@example.com' },
    { id: 3, name: 'Adnan Doe', age: 50, email: 'jane@example.com' },
    { id: 5, name: 'Rimi Doe', age: 20, email: 'jane@example.com' },
    { id: 6, name: 'Bimi Doe', age: 55, email: 'jane@example.com' },
    { id: 7, name: 'Gimi Doe', age: 18, email: 'jane@example.com' },
    { id: 8, name: 'Test Name', age: 18, email: 'test@example.com', address: { dist: 'Narayanganj', division: 'Dhaka' } },
    { id: 9, name: 'Test Name2', age: 29, email: 'test2@example.com', address: { dist: 'Comilla', division: 'Chittagram' } },
    { id: 10, name: 'Test Name3', age: 31, email: 'test3@example.com', address: { dist: 'Borguan', division: 'Barishal' } },
    // Add more data as needed
];

export default function TablePage() {
    const [data, setData] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState('');


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

    return (
        <div className='container mx-auto'>

            {/* Table component */}
            <Table
                columns={columns}
                data={data}
                uniqueKey="id"
                // customThClass="!py-0"
                // customTdClass="!py-0"
                onView={handleView}
                onEdit={handleEdit}
                onDelete={handleDelete}
                action={true}
                responsive
            />
        </div>
    );
}
