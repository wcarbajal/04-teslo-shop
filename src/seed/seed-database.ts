import prisma from "../lib/prisma";
import { initialData } from "./seed";


async function main() {
    //Borrar registros previos
   // await Promise.all([
       await prisma.productImage.deleteMany();
       await prisma.product.deleteMany();
       await prisma.category.deleteMany();
    //])

    // Categoriasç

    const { categories, products } = initialData;

    const categoriesData = categories.map( name => ({name}) );

    await prisma.category.createMany({
        data: categoriesData
        
    });
    
    const categorisDB = await prisma.category.findMany();
    
    const categoryMap = categorisDB.reduce((map, category) => {

        map[category.name.toLowerCase()] = category.id;

        return map;

    }, {} as Record<string, string>);

    // Productos
    products.forEach( async (product) => {

        const{ type, images, ...rest } = product;

        const dbProduct = await prisma.product.create({
            data: {
                ...rest,
                categoryId: categoryMap[type]
            }
        })

        // Images
        const imagesData = images.map( image => ({
            url: image,
            productId: dbProduct.id
        }));

        await prisma.productImage.createMany({
            data: imagesData
        });
    

    })



    
    console.log('Seed Executed');
};



( () => {

     if (   process.env.NODE_ENV === 'production') return;

    main();

} )();