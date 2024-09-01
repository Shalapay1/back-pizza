import { Container, Title, SortPopup } from "@/components/shared";
import { Categories } from "@/components/shared/categories";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return <>
    <Container>
       <Title text={"All pizzas"} size="lg" className="font-extrabold"></Title>

       <Categories></Categories>
       <SortPopup></SortPopup>
    </Container>

  </>
}
