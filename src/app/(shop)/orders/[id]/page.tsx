import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import Link from 'next/link';
import { IoCardOutline } from "react-icons/io5";

const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],


]

interface Props {
    params: {
        id: string
    }
}
export default function OrderPage({ params }: Props) {

    const { id } = params;

    // todo: veridicar si orden existe, otras verificaciones
    // redirect si no  le pertenece


    return (
        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">


            <div className="flex flex-col w-[1000px] ">
                <Title title={` Orden # ${id} `} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 ">

                    {/* Carrito */}
                    <div className="flex flex-col mt-5">
                        <div className={
                            clsx(
                                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                                {
                                    'bg-red-500': false,
                                    'bg-green-700': true
                                }
                            )
                        }>
                            <IoCardOutline size={30} />
                            <span className="mx-2 ">Pagada</span>

                        </div>


                        {/* Items de carrito */}

                        {
                            productsInCart.map(product => (
                                <div key={product.slug} className="flex mb-5">
                                    <Image
                                        style={{
                                            width: '100px',
                                            height: '100px'
                                        }}
                                        src={`/products/${product.images[0]}`}
                                        width={100}
                                        height={100}
                                        alt={product.title}
                                        className="mr-5"

                                    />
                                    <div>
                                        <p>{product.title}</p>
                                        <p>{product.price} x 3</p>
                                        <p>Subtotal: ${product.price * 3}</p>

                                        <button className="underline mt-3">
                                            Remove
                                        </button>



                                    </div>

                                </div>
                            ))
                        }

                    </div>
                    {/* Resumen de orden de compra          */}
                    <div className="bg-white rounded-xl shadow-xl p-7">

                        <h2 className="text-2xl font-bold mb-2">Dirección de entrega</h2>
                        <div className="mb-10">
                            <p className="text-xl">Wuilmer Carbajal</p>
                            <p>Av. La Paz 123</p>
                            <p>VES</p>
                            <p>993690595</p>

                        </div>
                        {/* Linea divisoria */}
                        <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

                        <h2 className="text-2xl mb-2">Resumen de orden</h2>

                        <div className="grid grid-cols-2">
                            <span className="font-bold">N°. productos</span>
                            <span className="text-right font-bold">N°. arcticulos</span>

                            <span>Subtotal</span>
                            <span className="text-right">S/. 100 </span>

                            <span>Impuestos (15%)</span>
                            <span className="text-right">S/. 15 </span>

                            <span className="mt-5 text-2xl">Total: </span>
                            <span className="mt-5 text-right" > S/. 115 </span>

                        </div>

                        <div className="mt-5 mb-2 w-full">

                        <div className={
                            clsx(
                                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                                {
                                    'bg-red-500': false,
                                    'bg-green-700': true
                                }
                            )
                        }>
                            <IoCardOutline size={30} />
                            <span className="mx-2 ">Pagada</span>

                        </div>


                        </div>

                    </div>


                </div>
            </div>


        </div>
    );
}

