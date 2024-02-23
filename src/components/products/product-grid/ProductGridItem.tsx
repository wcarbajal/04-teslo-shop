

import { Product } from "@prisma/client";
import prisma from '@/lib/prisma';
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ProductItem } from "./ProductItem";



interface Props {
    product: Product;


}

export const ProductGridItem = async ({ product }: Props) => {

    const { id } = product;

    const imagenes = await prisma?.product.findFirst({
        where: { id: id },
        select: {
            ProductImage: {
                take: 2,
            }
        }
    })
    const foto1 = imagenes!.ProductImage[0].url;
    const foto2 = imagenes!.ProductImage[1].url;

    


    return (
        <ProductItem slug={product.slug} title= {product.title} foto1= {foto1} foto2={foto2} price={product.price} />


    )
}

