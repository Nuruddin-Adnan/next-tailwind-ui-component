'use client'
import { useState } from "react";



export default function FormInput(props: any) {
    const [inputType] = useState(props?.type || 'text');
    const [inputValue, setInputValue] = useState('');

    const inputStyle = {
        padding: '6px 12px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        color: 'rgb(17, 24, 39)',
        backgroundColor: '#fff',
        display: 'block',
        width: '100%',
        fontSize: '1rem'
    };

    if (props?.size) {
        if (props?.size === 'xl') {
            inputStyle.padding = '12px 16px'
            inputStyle.fontSize = '1.25rem'
        }
        if (props?.size === 'lg') {
            inputStyle.padding = '8px 16px'
            inputStyle.fontSize = '1.25rem'
        }
        if (props?.size === 'sm') {
            inputStyle.padding = '4px 8px'
        }
    }

    function handleChange(event: any) {
        const newValue = event.target.value
        setInputValue(newValue);
        if (props.onChange) props.onChange(newValue);
    };

    return (
        <div className={props?.inline && "sm:flex items-center whitespace-nowrap gap-4"}>
            {props?.label && <label className={`"block text-sm font-medium text-gray-900" ${props?.labelClassName}`}>
                {props?.label}
            </label>}
            <input
                type={inputType}
                defaultValue={props?.defaultValue}
                name={props?.name}
                onChange={handleChange}
                placeholder={props?.placeholder}
                autoComplete={props?.autocomplete ? props.autocomplete : "off"}
                style={inputStyle}
                className={props?.className}
            />
        </div>
    );
};