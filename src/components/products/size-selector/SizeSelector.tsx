import type { Size } from "@/interface"
import clsx from "clsx";

interface Props {
    selectedSize: Size;
    aviableSize: Size[];
}

export const SizeSelector = ({ selectedSize, aviableSize }: Props) => {


    return (
        <div className="my-5 ">
            <h3 className="font-bold mb-4"> Tallas disponibles</h3>

            <div className="flex">
                {
                    aviableSize.map((size) => (
                        <button
                            key={size}
                            className={
                                clsx(
                                    "mx-2 text-lg hover:underline",
                                   {
                                    'underline': size === selectedSize,
                                   }
                                )
                            }
                        >
                            {size}

                        </button>
                    ))
                }

            </div>

        </div>
    )
}
