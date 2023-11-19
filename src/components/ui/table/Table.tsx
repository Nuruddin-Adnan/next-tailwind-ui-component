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
        customTfClass,
        tableStriped = false,
        tableHover = false,
        onView = undefined,
        onEdit = undefined,
        onDelete = undefined,
        action = false,
        responsive = false,
        search = false,
        print = false,
        sumFields = [],
    }:
        {
            caption?: React.ReactNode
            columns: any[],
            data: any[],
            uniqueKey: any,
            customTableClass?: string,
            customThClass?: string,
            customTdClass?: string,
            customTfClass?: string,
            tableStriped?: boolean,
            tableHover?: boolean,
            onView?: any,
            onEdit?: any,
            onDelete?: any,
            action?: boolean,
            responsive?: boolean
            sumField?: string
            search?: boolean
            itemsPerPage?: number
            print?: boolean
            sumFields?: any[]
        }
) {
    const [data, setData] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortKey, setSortKey] = useState('');
    const [sortDirection, setSortDirection] = useState('ascending');

    const componentRef = useRef(null);


    const responsiveClass = 'w-full overflow-auto';
    const tableClass = `min-w-full ${customTableClass}`;
    const thClass = `py-1 px-2 border-b border-gray-300 text-left font-semibold print:pt-4 print:pb-2 cursor-pointer ${customThClass}`;
    const tdClass = `py-1 px-2 border-b border-gray-300 ${customTdClass}`;
    const tfootClass = `py-1 px-2 font-semibold ${customTfClass}`;
    const stripedRowClass = 'bg-gray-100';
    const hoverClass = 'hover:bg-gray-200'


    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

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

    const compareValues = (a: any, b: any) => {
        return typeof a === 'number' && typeof b === 'number'
            ? a - b
            : String(a).localeCompare(String(b), undefined, { numeric: true, sensitivity: 'base' });
    };

    const handleSort = (key: any) => {
        setSortKey(key);
        setSortDirection((prevDirection) => (prevDirection === 'ascending' ? 'descending' : 'ascending'));

        setData((prevData) =>
            [...prevData].sort((a, b) => {
                const valueA = getNestedValue(a, key);
                const valueB = getNestedValue(b, key);

                return sortDirection === 'ascending' ? compareValues(valueA, valueB) : compareValues(valueB, valueA);
            })
        );
    };

    const getNestedValue = (obj: any, key: any) => {
        return key.split('.').reduce((acc: any, currentKey: any) => {
            return acc && acc[currentKey] !== undefined ? acc[currentKey] : null;
        }, obj);
    };

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

    const calculateColumnSum = (key: any) => {
        if (!key) {
            return 0;
        }

        return data.reduce((sum, row) => {
            const keys = key.split('.');
            const nestedValue = keys.reduce((acc: any, currentKey: any) => {
                return acc && acc[currentKey] !== undefined ? acc[currentKey] : null;
            }, row);

            return sum + (nestedValue || 0);
        }, 0);
    };

    const getSumResults = () => {
        const sumResults: any = {};
        sumFields.forEach((field) => {
            sumResults[field] = calculateColumnSum(field);
        });
        return sumResults;
    };



    return (
        <div>

            {/* Search input */}
            <div className="flex items-center justify-between">
                {
                    search ?
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={handleSearch}
                                className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div> : <div></div>
                }

                {
                    print && <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium  py-1 px-4 mr-2 rounded" onClick={handlePrint}>Print</button>
                }
            </div>
            {/* Table  */}
            <div ref={componentRef}>
                <div className={`${responsive ? responsiveClass : ''} print:px-4 print:pb-4`}  >
                    <table className={tableClass}>
                        <caption>{caption}</caption>
                        <thead>
                            <tr>
                                {columns.map((column) => (
                                    <th key={column.key} className={`${thClass} ${column.customClass || ''}`} onClick={() => handleSort(column.key)}>
                                        {column.label}
                                        {sortKey === column.key && (
                                            <span className="ml-2">
                                                {sortDirection === 'ascending' ? '▲' : '▼'}
                                            </span>
                                        )}
                                    </th>
                                ))}
                                {action && (
                                    <th className={`${thClass} print:hidden`}>Action</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index: number) => (
                                <tr key={uniqueKey ? row[uniqueKey] : index}
                                    className={`${index % 2 === 0 && tableStriped ? stripedRowClass : ''} ${tableHover && hoverClass}`}
                                >
                                    {columns.map((column) => (
                                        <td
                                            key={column.key}
                                            className={`${tdClass} ${column.customDataClass ? column.customDataClass(row) : ''}`}
                                        >
                                            {column.key.includes('.')
                                                ? renderNestedCell(row, column.key)
                                                : row[column.key]}
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
                        {
                            sumFields &&
                            <tfoot>
                                <tr>
                                    {columns.map((column) => (
                                        <td key={column.key} className={tfootClass}>
                                            {sumFields.includes(column.key) ? (
                                                `Total ${column.key}: ${getSumResults()[column.key]}`
                                            ) : (
                                                ''
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            </tfoot>
                        }
                    </table>
                </div>
            </div>
        </div>
    );
}