

export const generatePaginationNumbers = (currentPage: number, totalPages: number) => {

    // Si el numero total de paginas es menor a 7, sin numeros suspensivos


    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    // Si la pagina actual esta entre las primeras 3 paginas, nostrar las primeras 3 y luego las 2 ultimas

    if ( currentPage <= 3) {
        return [1,2,3,'...', totalPages - 1, totalPages ]
    }

    // Si la paggina actual esta entre las ultimas 3 paginas, mostrar las primeras 2, puntos suspensivos, las ultimas 3
    if ( currentPage >= totalPages -2 ) {
        return [1,2,'...', totalPages - 2 ,totalPages - 1, totalPages]
    }

    return[
        1,
        '...',
        currentPage -1,
        currentPage,
        currentPage +1,
        '...',
        totalPages
    ]
}