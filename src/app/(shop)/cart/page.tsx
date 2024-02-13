import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from 'next/link';

const productsInCart = [
    initialData.products[0],
     initialData.products[1],
     initialData.products[2],


]
export default function CartPage() {
    return (
        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">


            <div className="flex flex-col w-[1000px] ">
                <Title title="Carrito" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 ">

                    {/* Carrito */}
                    <div className="flex flex-col mt-5">
                        <span>Agregar más items</span>
                        <Link href='/' className="underline mb-5">
                            Continúa comprando
                        </Link>


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
                                        <p>{product.price}</p>
                                        <QuantitySelector quantity={3} />

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
                        
                        <h2 className="text-2xl mb-2">Resumnen de orden</h2>

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
                            <Link
                                className="flex btn-primary "
                                href='/checkout/address'>
                                Checkout
                            </Link>
                        </div>

                    </div>


                </div>
            </div>


        </div>
    );
}
