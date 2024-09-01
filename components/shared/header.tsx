import React from "react";
import {cn } from '@/lib/utils';
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui";
import {ArrowRight, Pizza, ShoppingCart, UserRound} from "lucide-react"

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return(
        <header className={cn('', className)}>
            <div>
                <Container className="flex items-center justify-between py-8">
                    {/*left side */}
                    <div className="flex items-center gap-4">
                        <Pizza width={32} height={32}/>
                        <div>
                            <h1 className="text-2xl uppercase font-black">Back Pizza</h1>
                            <p className="text-sm text-gray-400 leading-3">very smachno!</p>
                        </div>
                    </div>

                    {/*right side */}
                    <div className="flex items-center gap-3">
                    <Button variant="outline" className="flex items-center gap-2">
                        <UserRound size={16}/>
                        Log in
                        </Button>

                        <div>
                            <Button className="group relative">
                             <b>120$</b>
                             <span className="h-full w-[1px] bg-white/29 mx-3"/>
                                <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                                <ShoppingCart size={16} className="relative" strokeWidth={2} />
                                <b>3</b>
                                </div>
                                <ArrowRight size={20} className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    );
};