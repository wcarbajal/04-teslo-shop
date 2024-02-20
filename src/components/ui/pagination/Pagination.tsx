'use client'

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { IoChevronBackCircleOutline, IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface Prosp {
    totalPages: number;

}

export const Pagination = ({ totalPages }: Prosp) => {

    const pathname = usePathname();
    const searchParams = useSearchParams();   
    const currentPage = searchParams.get('page') ?? 1;

    
    const createPageUrl = (pageNumber: number | string) => {
        const params = new URLSearchParams();
        
        if ( pageNumber === '...' ) {
            return `${pathname}?${ params.toString()}`
        }

        if ( +pageNumber <= 0) {
            return `${ pathname}`;
        }
        if (+pageNumber > totalPages) {
            return `${ pathname }?${ params.toString() }`;
        }
        params.set('page', pageNumber.toString());
        return `${ pathname }?${ params.toString() }`;	
        
    }

    

    return (

        <div className="flex text-center justify-center mt-10 mb-32">
            <nav aria-label="Page navigation example">
                <ul className="flex list-style-none">

                    <li className="page-item">
                        <Link
                            className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href={ createPageUrl( currentPage - 1 )}>
                            <IoChevronBackOutline size={30} />
                        </Link>
                    </li>

                    <li className="page-item">
                        <Link
                            className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300  text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href="#">1
                        </Link>
                    </li>

                    <li className="page-item active">
                        <Link
                            className="page-link relative block py-1.5 px-3  border-0 bg-blue-600 outline-none transition-all duration-300  text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
                            href="#">2 <span className="visually-hidden"></span>
                        </Link>
                    </li>

                    <li className="page-item">
                        <Link
                            className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300  text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href="#">3
                        </Link>
                    </li>

                    <li className="page-item">
                        <Link
                            className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href="#">
                            <IoChevronForwardOutline size={30} />
                        </Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}