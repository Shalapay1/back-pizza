import { Container, Title, SortPopup } from "@/components/shared";
import { Categories } from "@/components/shared/categories";
import { Filters } from "@/components/shared/filters";
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
          <div className="flex flex-col gap-16">
            List items
          </div>
        </div>
      </div>
    </Container>

  </>
}
