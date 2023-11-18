export default function Table({ columns, data, uniqueKey, onEdit, onDelete }: { columns: any[], data: any[], uniqueKey: any, onEdit: any, onDelete: any }) {
    return (
        <table className="min-w-full bg-white border border-gray-300">
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th
                            key={column.key}
                            className="py-2 px-4 border-b border-gray-300 text-left font-semibold"
                        >
                            {column.label}
                        </th>
                    ))}
                    <th className="py-2 px-4 border-b border-gray-300 text-left font-semibold">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr key={row[uniqueKey]}>
                        {columns.map((column) => (
                            <td
                                key={column.key}
                                className="py-2 px-4 border-b border-gray-300"
                            >
                                {row[column.key]}
                            </td>
                        ))}
                        <td className="py-2 px-4 border-b border-gray-300">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mr-2 rounded"
                                onClick={() => onEdit(row[uniqueKey])}
                            >
                                Edit
                            </button>
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                onClick={() => onDelete(row[uniqueKey])}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
