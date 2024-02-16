import { initialData } from "./seed";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    
    
    
    
    console.log('Seed Executed');
};



( () => {

     if (   process.env.NODE_ENV === 'production') return;

    main();

} )();