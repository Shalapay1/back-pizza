import { Container, Title, SortPopup } from "@/components/shared";
import { Categories } from "@/components/shared/categories";
import { Filters } from "@/components/shared/filters";
import { ItemCard } from "@/components/shared/item-card";
import { ItemsGroupList } from "@/components/shared/itemsGroupList";
import { TopBar } from "@/components/shared/top-bar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return <>
    <Container>
       <Title text={"All pizzas"} size="lg" className="font-extrabold"></Title>
        
    </Container>

    <TopBar></TopBar>
    
    <Container className="mt-10 pb-14">
      <div className="flex gap-[60px]">

        {/* Filters*/}
        <div className="w-[250px]">
          <Filters />
        </div>


        {/* List items */}
        <div className="flex-1">
          <div className="flex flex-col gap-15">
            <ItemsGroupList title="Pizza" items={[{
              id: 0,
              name: "Hawaiian",
              imgURL: "https://pizza.od.ua/upload/resize_cache/webp/iblock/963/600_600_2a1fde8d5e7dcaa11be442336c9d37f5e/ffmm1lrof62yjlq4fsor35t51l3ax5r1.webp",
              price: 10,
              items: [{price: 10}],

            },
            {
              id: 1,
              name: "Mozzarela>",
              imgURL: "https://pizza.od.ua/upload/resize_cache/webp/iblock/963/600_600_2a1fde8d5e7dcaa11be442336c9d37f5e/ffmm1lrof62yjlq4fsor35t51l3ax5r1.webp",
              price: 10,
              items: [{price: 10}],
            },
            {
              id: 2,
              name: "Hawaiian",
              imgURL: "https://pizza.od.ua/upload/resize_cache/webp/iblock/963/600_600_2a1fde8d5e7dcaa11be442336c9d37f5e/ffmm1lrof62yjlq4fsor35t51l3ax5r1.webp",
              price: 10,
              items: [{price: 10}],
            },   
            {
              id: 3,
              name: "Hawaiian",
              imgURL: "https://pizza.od.ua/upload/resize_cache/webp/iblock/963/600_600_2a1fde8d5e7dcaa11be442336c9d37f5e/ffmm1lrof62yjlq4fsor35t51l3ax5r1.webp",
              price: 10,
              items: [{price: 10}],
            },
            {
              id: 4,
              name: "Hawaiian",
              imgURL: "https://pizza.od.ua/upload/resize_cache/webp/iblock/963/600_600_2a1fde8d5e7dcaa11be442336c9d37f5e/ffmm1lrof62yjlq4fsor35t51l3ax5r1.webp",
              price: 10,
              items: [{price: 10}],
            }, 
            {
              id: 5,
              name: "Hawaiian",
              imgURL: "https://pizza.od.ua/upload/resize_cache/webp/iblock/963/600_600_2a1fde8d5e7dcaa11be442336c9d37f5e/ffmm1lrof62yjlq4fsor35t51l3ax5r1.webp",
              price: 10,
              items: [{price: 10}],
            }, 
            ]} categoryId={1} listClassName="grid-cols-3"/>  

            <ItemsGroupList title="Combo" items={[{
              id: 0,
              name: "Hawaiian",
              imgURL: "https://pizza.od.ua/upload/resize_cache/webp/iblock/963/600_600_2a1fde8d5e7dcaa11be442336c9d37f5e/ffmm1lrof62yjlq4fsor35t51l3ax5r1.webp",
              price: 10,
              items: [{price: 10}],

            },
            {
              id: 1,
              name: "Mozzarela>",
              imgURL: "https://pizza.od.ua/upload/resize_cache/webp/iblock/963/600_600_2a1fde8d5e7dcaa11be442336c9d37f5e/ffmm1lrof62yjlq4fsor35t51l3ax5r1.webp",
              price: 10,
              items: [{price: 10}],
            },
            {
              id: 2,
              name: "Hawaiian",
              imgURL: "https://pizza.od.ua/upload/resize_cache/webp/iblock/963/600_600_2a1fde8d5e7dcaa11be442336c9d37f5e/ffmm1lrof62yjlq4fsor35t51l3ax5r1.webp",
              price: 10,
              items: [{price: 10}],
            }   
            ]} categoryId={2} listClassName="grid-cols-3"/>        
            
          </div>
        </div>
      </div>
    </Container>

  </>
}
