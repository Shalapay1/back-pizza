import Link from 'next/link';
import React, { Component } from 'react'
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';

interface Props {
    id: number;
    name: string;
    price: number;
    imgURL: string;
    classname?: string;
}


export const ItemCard: React.FC<Props> = ({id, name, price, imgURL, classname}) => {
    return (
        <div className={classname}>
            <Link href={'/pizza/' + id}>
                <div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
                    <img className='w-[215px] h-[215px]' src={imgURL} alt={name} />
                </div>

                <Title text={name} size='sm' className='mb-1 mt-3 font-bold text-center' />

                <p className='text-sm text-gray-500'>
                feta cheese, pepperoni, sausage, bacon, ham, mushrooms, onions, bell peppers, olives
                </p>

                <div className='flex justify-between items-center mt-4'>
                    <span className='text-[20px]'>
                    <b>$ {price}</b>
                    </span>

                    <Button variant='secondary' className='text-base font-bold'>
                        <Plus size={20} className='mr-1'/> Add
                        </Button>
                </div>
            </Link>
        </div>
    )
}
