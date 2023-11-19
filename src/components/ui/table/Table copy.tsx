export default function Table(
    {
        columns,
        data,
        uniqueKey,
        customTableClass,
        customThClass,
        customTdClass,
        onView = undefined,
        onEdit = undefined,
        onDelete = undefined,
        action = false,
        responsive = false
    }:
        {
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
        }
) {

    const responsiveClass = 'w-full overflow-auto'
    const tableClass = `min-w-full border border-gray-300 ${customTableClass}`;
    const thClass = `py-2 px-4 border-b border-gray-300 text-left font-semibold ${customThClass}`
    const tdClass = `py-2 px-4 border-b border-gray-300 ${customTdClass}`

    return (
        <div className={responsive ? responsiveClass : ''}>
            <table className={tableClass}>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th
                                key={column.key}
                                className={thClass}
                            >
                                {column.label}
                            </th>
                        ))}
                        {
                            action &&
                            <th className={`${thClass} print:hidden`}>
                                Action
                            </th>
                        }
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index: number) => (
                        <tr key={uniqueKey ? row[uniqueKey] : index}>
                            {columns.map((column) => (
                                <td
                                    key={column.key}
                                    className={tdClass}
                                >
                                    {row[column.key]}
                                </td>
                            ))}
                            {
                                action &&
                                <td className={`${tdClass} print:hidden`}>
                                    {onView && <button
                                        className="bg-cyan-500 hover:bg-cyan-700 text-white font-medium py-1 px-2 mr-2 rounded"
                                        onClick={() => onView(row[uniqueKey])}
                                    >
                                        View
                                    </button>}

                                    {onEdit && <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-2 mr-2 rounded"
                                        onClick={() => onEdit(row[uniqueKey])}
                                    >
                                        Edit
                                    </button>}

                                    {onDelete && <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-medium py-1 px-2 rounded"
                                        onClick={() => onDelete(row[uniqueKey])}
                                    >
                                        Delete
                                    </button>}
                                </td>
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
