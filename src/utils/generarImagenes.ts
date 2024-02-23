
export const generarImagenes = async (id:string) => {

    const imagenes = await prisma?.product.findFirst({
        where: { id: id},
        select: {
            ProductImage: {
                take:2,
            }
        }
    })
  
    return imagenes;
}



