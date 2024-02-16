# Description

## Correr den dev

1. Clonar el repositorio.
2. Crear una copia del archivo ``` .env.template``` y renombrarlo a ``` .env``` y cambiar las variables de entorno.
3. Instalar dependencias ```npm install ```
4. Levantar la base de datos ```docker-compose up -d ```
5. Correr la migraciones Prisma ```npx prisma migrate dev ```
6. Ejecutar el seed ```npm run seed```
7. Correr el proycto ```npm run dev```


## Correr en prod
