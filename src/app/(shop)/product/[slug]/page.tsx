import { ProductMobileSliceshow, ProductSliceshow, QuantitySelector, SizeSelector } from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from 'next/navigation';


interface Props {
    params: {
        slug: string

    }
}
export default function ProductPage({ params }: Props) {

    const { slug } = params;
    const product = initialData.products.find(product => product.slug === slug);
    if (!product) {
        notFound();
    }

    return (
        <div className="mt-5 mb-20 grid grid-col-1 md:grid-cols-3 gap-3">
            {/* Sliceshow */}
            <div className="col-span-1 md:col-span-2 ">
                {/*          mobile Slice        */}
                <ProductMobileSliceshow 
                title={ product.title}
                images={ product.images }
                />
                {/* Desktop Slice
                <ProductSliceshow 
                    title={ product.title}
                    images={ product.images }
                /> */}
            </div>

            {/* Details */}

            <div className="col-span-1 px-5 md:col-span-1 ">

                <h1 className={` ${titleFont.className} antialiased font-bold text-xl`}>
                    {product.title}
                </h1>
                <p className="text-lg mb-5"> S/. { product.price }</p>

                {/* Selector de tallas */}
                <SizeSelector 
                    selectedSize={ product.sizes[1] }
                    aviableSize={ product.sizes }
                />

                {/* Selector de cantidad */}
                <QuantitySelector quantity={ 2 }/>

                {/* Boton */}
                <button className="btn-primary my-5">
                    Agregar el carrito
                </button>

                {/* Descripcion */}
                <h3 className="font-bold text-sm">Descripcion</h3>
                <p className="font-light">
                    { product.description}
                </p>


            </div>

        </div>
    );
}