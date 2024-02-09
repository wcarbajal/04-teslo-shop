import { ProductGrid, Title } from "@/components";
import { Product, Category } from "@/interface";

import { initialData } from "@/seed/seed";

const seedProducts = initialData.products;

interface Props {
    params: {
        id: Category;
    },
}

const labels: Record<Category, string> = {
    'men': 'para Hombres',
    'women': 'para Mujeres',
    'kid': 'para Niños',
    'unisex': 'Para todos'
}



export default function CategoryPage({ params }: Props) {

    const { id } = params;

    const products = seedProducts.filter(product => product.gender === id)


    // if (id !== 'kid') { notFound(); }


    return (
        <>
            <Title
                title={`Articulos de ${(labels as any)[id]}`}
                subtitle='Todos los productos'
                classname='mb-2'
            />
            <ProductGrid products={products} />
        </>
    )
}