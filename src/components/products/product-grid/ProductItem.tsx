'use client'

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

interface Props {
    slug: string;
    title: string
    foto1: string;
    foto2: string;
    price: number;

}

export const ProductItem = ({ title, slug, price, foto1, foto2 }: Props) => {

    const [displayImage, setDisplayImage] = useState(foto1);

    return (
        <div className="rounded overflow-hidden fade-in">
            <Link href={`/product/${slug}`}>
                <Image
                    src={`/products/${displayImage}`}
                    alt={title}
                    className="w-full object-cover rounded-xl"
                    width={500}
                    height={500}
                    onMouseEnter={() => setDisplayImage(foto2)}
                    onMouseLeave={() => setDisplayImage(foto1)}
                />
            </Link>

            <div className="p-4 flex flex-col">
                <Link href={`/product/${slug}`} className="hover:text-blue-600">
                    {title}
                </Link>
                <span className="font-bold">S/. {price}</span>

            </div>


        </div>
    )
}
