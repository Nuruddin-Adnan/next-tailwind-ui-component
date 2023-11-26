'use client'

import CustomSelect from '@/components/ui/form/CustomSelect'
import Form from '@/components/ui/form/Form'
import FormInput from '@/components/ui/form/FormInput'
import React, { useState } from 'react'

const optionsData = [
    { title: 'title 1', value: 'title 1' },
    { title: 'title 2', value: 'title 2' },
    { title: 'title 3', value: 'title 3' },
]

export default function FormPage() {
    return (
        <div>
            <div className='container mx-auto p-5 '>
                <div className="grid gap-y-1 gap-x-4 ">
                    <FormInput type='date' name='firstName' inline size='sm' labelClassName='w-24' label='User Name :' onChange={(e: any) => console.log(e)} />
                    <FormInput label='Input sm : ' inline size='sm' labelClassName='w-24' onChange={(e: any) => console.log(e)} placeholder='Please enter your name' />
                    <FormInput label='Input regular' inline labelClassName='w-24' onChange={(e: any) => console.log(e)} placeholder='Please enter your name' />
                    <FormInput label='Input lg' inline size='lg' labelClassName='w-24' onChange={(e: any) => console.log(e)} placeholder='Please enter your name' />
                    <FormInput label='Input xl' inline size='xl' labelClassName='w-24' onChange={(e: any) => console.log(e)} placeholder='Please enter your name' />
                </div>
                <div className="grid gap-4 lg:grid-cols-5 mt-6">
                    <FormInput type='date' size='sm' labelClassName='w-24' label='User Name :' onChange={(e: any) => console.log(e)} />
                    <FormInput label='Input sm : ' size='sm' labelClassName='w-24' onChange={(e: any) => console.log(e)} placeholder='Please enter your name' />
                    <FormInput label='Input regular' labelClassName='w-24' onChange={(e: any) => console.log(e)} placeholder='Please enter your name' />
                    <FormInput label='Input lg' size='lg' labelClassName='w-24' onChange={(e: any) => console.log(e)} placeholder='Please enter your name' />
                    <FormInput label='Input xl' size='xl' labelClassName='w-24' onChange={(e: any) => console.log(e)} placeholder='Please enter your name' />
                </div>
                <div className="grid lg:grid-cols-4 gap-4 mt-6">

                    <CustomSelect name='customSelect' defaultValue='title 2' size='sm' label='Select sm' title='Please select one' options={optionsData} onSelectChange={(e: any) => console.log(e.target.value)} />
                    <CustomSelect defaultValue='title 2' label='Select regular' title='Please select one' options={optionsData} onSelectChange={(e: any) => console.log(e.target.value)} />
                    <CustomSelect defaultValue='title 2' size='lg' label='Select lg' title='Please select one' options={optionsData} onSelectChange={(e: any) => console.log(e.target.value)} />
                    <CustomSelect defaultValue='title 2' size='xl' label='Select xl' title='Please select one' options={optionsData} onSelectChange={(e: any) => console.log(e.target.value)} />
                </div>

                <form className='grid grid-cols-2 lg:gap-8 g-4 mt-6'>
                    <FormInput inline label='First Name : ' name='firstName' placeholder='Enter your name' />
                    <CustomSelect inline label='Name fragment : ' options={optionsData} title='Pease select one' onSelectChange={(e: any) => e} name='age' />
                </form>
                <Form />
            </div>
        </div>
    )
}
