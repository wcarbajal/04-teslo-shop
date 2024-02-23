import prisma from '@/lib/prisma'
import { ProductGrid, Title } from "@/components";
import { Product, Category } from "@/interface";

import { initialData } from "@/seed/seed";

//const seedProducts = initialData.products;

interface Props {
    params: {
        gender: Category;
    },
}

const labels: Record<Category, string> = {
    'men': 'para Hombres',
    'women': 'para Mujeres',
    'kid': 'para Niños',
    'unisex': 'Para todos'
}



export default async  function CategoryPage({ params }: Props) {

    const { gender } = params;

    //const products: any = []
     const products = await prisma.product.findMany({
        where: { gender: gender}
     });
     

    //const products = seedProducts.filter(product => product.gender === id)


    // if (id !== 'kid') { notFound(); }


    return (
        <>
            <Title
                title={`Articulos de ${(labels as any)[gender]}`}
                subtitle='Todos los productos'
                classname='mb-2'
            />
            <ProductGrid products={products} />
        </>
    )
}