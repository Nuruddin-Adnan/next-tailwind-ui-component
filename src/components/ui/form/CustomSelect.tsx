import { useState } from "react";



export default function CustomSelect(props: any) {
    const [data] = useState(props?.options);

    const selectStyle = {
        padding: '6px 8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '1rem',
        color: 'rgb(17, 24, 39)',
        backgroundColor: '#fff',
        display: 'block',
        width: '100%'
    };

    if (props?.size) {
        if (props?.size === 'xl') {
            selectStyle.padding = '12px 16px'
            selectStyle.fontSize = '1.25rem'
        }
        if (props?.size === 'lg') {
            selectStyle.padding = '8px 16px'
            selectStyle.fontSize = '1.25rem'
        }
        if (props?.size === 'sm') {
            selectStyle.padding = '4px 8px'
        }
    }

    let options = data.map((item: any, index: number) => (
        <option key={index} value={item.value}>{item.title}</option>
    ));

    return (
        <div className={props?.inline && "sm:flex items-center whitespace-nowrap gap-4"}>
            {props?.label && <label className={`"block text-sm font-medium text-gray-900" ${props?.labelClassName}`}>
                {props?.label}
            </label>}
            <select
                name={props?.name}
                onChange={(event) => props?.onSelectChange(event)}
                style={selectStyle}
                defaultValue={props?.defaultValue}
            >
                <option value="" disabled>{props.title}</option>
                {options}
            </select>
        </div>
    );
}