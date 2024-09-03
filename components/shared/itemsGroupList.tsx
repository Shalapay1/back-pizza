'use client';

import React from "react";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { ItemCard } from "./item-card";
import { useIntersection } from 'react-use';
import { useCategoryStore } from "@/store/category";

interface Props {
    title: string;
    items: any[];
    className?: string;
    listClassName?: string;
    categoryId: number;
}

export const ItemsGroupList: React.FC<Props> = (
    {title, 
        items, 
        className, 
        listClassName,
         categoryId}) => {
            const setActiveIdCategory = useCategoryStore((state) => state.setActiveId);

            const intersectionRef = React.useRef(null);
            const intersection = useIntersection(intersectionRef, {
                threshold: 0.4,
            });

            React.useEffect(() => {
                if (intersection?.isIntersecting) {
                    setActiveIdCategory(categoryId);
                }
            }, );
    return (
        <div className={className} id={title} ref={intersectionRef}> 
        <Title text={title} size='lg' className='mb-5 font-extrabold' />
        <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
            {items.map((item, i) => (
                <ItemCard 
                key={item.i}
                id={item.i}
                name={item.name}
                price={item.items[0].price}
                imgURL={item.imgURL}
                classname={item.classname}
                />
                
            ))}
        </div>
        </div>
            
                
        )
    }