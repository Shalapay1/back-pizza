'use client';

import React, { Component } from 'react'
import { FilterForChecboxProps, FilterForCheckbox } from './filrerForCheckBox';
import { Input } from '../ui';
import { Select } from '@radix-ui/react-select';

type Item = FilterForChecboxProps;
interface Props {
    title: string;
    items: Item[];
    defaultItems?: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (value: string[]) => void;
    defaultValue?: string[];
    className?: string;
}

export const CheckBoxFiltersGrup: React.FC<Props> = ({
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = 'Search...',
    className,
    onChange,
    defaultValue,    
    }) => {
    return (
        <div className={className}>
            <p className='font-bold mb-3'>{title}</p>

            <div className='mb-5'>
                <Input placeholder={searchInputPlaceholder} className='bg-gray-50 border-none' />
            </div>

                <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
                    {items.map((item, index) => (
                        <FilterForCheckbox
                        onCheckedChange={(ids) => console.log(ids)}
                        checked={false}
                        key={String(item.value)}
                        value={item.value}
                        text={item.text}
                        endAdornment={item.endAdornment}
                        />
                        
                    ))}

                </div>
        </div>
    )
}