

export const generatePagination = ( currentPage: number, totalPages: number) => {

    // Si el numero total de paginas es menor a 7, sin numeros suspensivos


    if ( totalPages <= 7 ) {
        return Array.from( {  length: totalPages}, (_, i) => i+1 )
    }

    // Si la pagina actual esta entre las primeras 3 paginas, nostrar las primeras 3 y luego las 2 ultimas
    
}