'use client';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import Link from 'next/link';
import React from 'react';

interface Props {
  className?: string;
}

const categories = [
  { id: 1, name: 'Pizzas' },
  { id: 2, name: 'Combo' },
  { id: 3, name: 'snacks' },
  { id: 4, name: 'Cocktails' },
  { id: 5, name: 'Coffe' },
  { id: 6, name: 'Drinks' },
  { id: 7, name: 'Desserts' },
  { id: 8, name: 'IceCream' },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const activeCategoryId = useCategoryStore((state) => state.activeId);
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {categories.map(({name, id}, index) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            activeCategoryId === index + 1 && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}
          href={'/#' + name}
          key={index}>
            <button>{name}</button>
          
        </a>
      ))}
    </div>
  );
};
