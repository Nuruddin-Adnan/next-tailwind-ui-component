'use client'

import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export default function Table(
    {
        caption,
        columns,
        data: initialData,
        uniqueKey,
        customTableClass,
        customThClass,
        customTdClass,
        onView = undefined,
        onEdit = undefined,
        onDelete = undefined,
        action = false,
        responsive = false,
        search = false,
        print = false
    }:
        {
            caption?: React.ReactNode
            columns: any[],
            data: any[],
            uniqueKey?: any,
            customTableClass?: string,
            customThClass?: string,
            customTdClass?: string,
            onView?: any,
            onEdit?: any,
            onDelete?: any,
            action?: boolean,
            responsive?: boolean
            search?: boolean
            print?: boolean
        }
) {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
    const [data, setData] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState('');
    const componentRef = useRef(null);


    const responsiveClass = 'w-full overflow-auto';
    const tableClass = `min-w-full ${customTableClass}`;
    const thClass = `py-1 px-2 border-b border-gray-300 text-left font-semibold print:pt-4 print:pb-2 cursor-pointer ${customThClass}`;
    const tdClass = `py-1 px-2 border-b border-gray-300 ${customTdClass}`;

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const handleSort = (key: any) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const sortedData = data.sort((a, b) => {
        if (sortConfig.key) {
            const keyA = a[sortConfig.key];
            const keyB = b[sortConfig.key];
            if (keyA < keyB) return sortConfig.direction === 'ascending' ? -1 : 1;
            if (keyA > keyB) return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        // Filter the data based on the search term
        const filteredData = initialData.filter((row) =>
            Object.values(row).some((value) =>
                String(value).toLowerCase().includes(term)
            )
        );

        setData(filteredData);
    };


    return (
        <div>

            {/* Search input */}
            <div className="flex items-center justify-between">
                {
                    search &&
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleSearch}
                            className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                }

                {
                    print && <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-2 mr-2 rounded" onClick={handlePrint}>Print</button>
                }
            </div>
            {/* Table component */}
            <div ref={componentRef}>
                {caption}
                <div className={`${responsive ? responsiveClass : ''} print:px-4 print:pb-4`}  >
                    <table className={tableClass}>
                        <thead>
                            <tr>
                                {columns.map((column) => (
                                    <th key={column.key} className={thClass} onClick={() => handleSort(column.key)}>
                                        {column.label}
                                    </th>
                                ))}
                                {action && (
                                    <th className={`${thClass} print:hidden`}>Action</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {sortedData.map((row, index: number) => (
                                <tr key={uniqueKey ? row[uniqueKey] : index}>
                                    {columns.map((column) => (
                                        <td key={column.key} className={tdClass}>
                                            {column.key.includes('.') ? renderNestedCell(row, column.key) : row[column.key]}
                                        </td>
                                    ))}
                                    {action && (
                                        <td className={`${tdClass} print:hidden`}>
                                            {onView && (
                                                <button
                                                    className="bg-cyan-500 hover:bg-cyan-700 text-white font-medium py-1 px-2 mr-2 rounded"
                                                    onClick={() => onView(row[uniqueKey])}
                                                >
                                                    View
                                                </button>
                                            )}

                                            {onEdit && (
                                                <button
                                                    className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-2 mr-2 rounded"
                                                    onClick={() => onEdit(row[uniqueKey])}
                                                >
                                                    Edit
                                                </button>
                                            )}

                                            {onDelete && (
                                                <button
                                                    className="bg-red-500 hover:bg-red-700 text-white font-medium py-1 px-2 rounded"
                                                    onClick={() => onDelete(row[uniqueKey])}
                                                >
                                                    Delete
                                                </button>
                                            )}
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function renderNestedCell(row: any, key: any) {
    const nestedValue = key.split('.').reduce((acc: any, currentKey: any) => {
        if (acc && acc[currentKey] !== undefined) {
            return acc[currentKey];
        }
        return '';
    }, row);

    return typeof nestedValue === 'object'
        ? JSON.stringify(nestedValue)
        : nestedValue;
}
