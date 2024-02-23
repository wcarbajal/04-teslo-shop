'use client'

import { generatePaginationNumbers } from "@/utils/generatePaginationNumbers";
import clsx from "clsx";
import Link from "next/link";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { IoChevronBackCircleOutline, IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface Prosp {
    totalPages: number;

}

export const Pagination = ({ totalPages }: Prosp) => {

    const pathname = usePathname();
    const searchParams = useSearchParams();

    const pageSring = searchParams.get('page') ?? 1;

    const currentPage = isNaN( +pageSring )? 1: +pageSring;
    
    // Number(
    //     searchParams.get('page') ? searchParams.get('page') :1
    // ) ?? 1


    if (currentPage < 1 || isNaN(+pageSring)) {
        redirect(pathname)
    }

    const allPages = generatePaginationNumbers(currentPage, totalPages);


    const createPageUrl = (pageNumber: number | string) => {

        const params = new URLSearchParams(searchParams);


        if (pageNumber === '...') {

            return `${pathname}?${params.toString()}`

        }

        if (+pageNumber <= 0) {

            return `${pathname}`;
        }

        if (+pageNumber > totalPages) {


            return `${pathname}?${params.toString()}`;
        }
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;

    }



    return (

        <div className="flex text-center justify-center mt-10 mb-32">
            <nav aria-label="Page navigation example">
                <ul className="flex list-style-none">

                    <li className="page-item">
                        <Link
                            className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href={createPageUrl(currentPage - 1)}>
                            <IoChevronBackOutline size={30} />
                        </Link>
                    </li>



                    {
                        allPages.map((page, index) => (
                            <li key={index} className="page-item">
                                <Link
                                    className={
                                        clsx(
                                            "page-link relative block py-1.5 px-3  border-0 outline-none transition-all duration-300   hover:bg-blue-300 focus:shadow-none",
                                            {
                                                'bg-blue-600 text-white shadow-sm hover:bg-blue-800': page === currentPage
                                            }
                                        )
                                    }
                                    href={createPageUrl(page)}> {page}
                                </Link>
                            </li>
                        ))
                    }

                    <li className="page-item">
                        <Link
                            className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href={createPageUrl(currentPage + 1)}>
                            <IoChevronForwardOutline size={30} />
                        </Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}
