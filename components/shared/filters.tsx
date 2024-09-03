import {cn } from '@/lib/utils';
import React from 'react';
import { Title } from './title';
import { FilterForCheckbox } from './filrerForCheckBox';
import { Input } from '../ui';
import { RangeSlider } from '../ui/rangeSlider';
import { CheckBoxFiltersGrup } from './checkBoxFiltersGrup';
interface Props {
    className?: string;
};

export const Filters: React.FC<Props> = ({ className }) => {
    return ( <div className={cn('bg-gray-50 p-5 rounded-2xl', className)}>
            <Title text='Filters' size="sm" className='mb-5 font-bold'/>

            {/* Checkbox UP */}
            <div className="flex flex-col gap-5">
                <FilterForCheckbox text='Make a build' value='1' />
                <FilterForCheckbox text='NEW!' value='2' />
            </div>

            {/* Filter Price */}
            <div className='mt-5 border-y border-y-neutral-10 py-6 pb-7'>
                <p className='font-bold mb-3'>Price from and to:</p>
                <div className='flex gap-3 mb-5'>
                    <Input type='number' placeholder='0' min={0} max={30000} defaultValue={0}/>
                    <Input type='number' placeholder='30000' min={0} max={30000} /> 
                </div>
                <RangeSlider min={0} max={500} step={10} value={[0, 500]} />
            </div>

            <CheckBoxFiltersGrup
            title='Ingridients'
            className='mt-5'
            limit={6}
            defaultItems={[{value: '1', text: 'Tomato'}, 
                {value: '2', text: 'Cucumber'}, 
                {value: '3', text: 'Cheese'}, 
                {value: '4', text: 'Meat'}, 
                {value: '5', text: 'Lettuce'}, 
                {value: '6', text: 'Onion'}]}

            items={[{value: '1', text: 'Tomato'},
                {value: '2', text: 'Cucumber'},
                {value: '3', text: 'Cheese'},
                {value: '4', text: 'Meat'},
                {value: '5', text: 'Lettuce'},
                {value: '6', text: 'Onion'},
                {value: '7', text: 'Water'},
                {value: '8', text: 'Milk'},
                {value: '9', text: 'Egg'},
                {value: '10', text: 'Sour cream'},
                {value: '11', text: 'Salt'},
                {value: '12', text: 'Pepper'},
            ]}
            />
    </div>
    );

};
            