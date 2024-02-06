import { inter, titleFont } from '@/config/fonts';
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <h1 className={inter.className}>Hola Mundo</h1>
            <h1 className={`${titleFont.className} font-bold`}>Hola Mundo</h1>
            <h1 className={`${titleFont.className} `}>Hola Mundo en Shop</h1>
        </div>
    );
}

