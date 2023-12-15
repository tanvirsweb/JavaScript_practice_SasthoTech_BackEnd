/*
Prisma:
1. A moderen database toolkit / ORM for web developers that simpifies database interactions.
2. Provides type safety & catches data-related errors
3. Support for various databases (Postgres, MySQL etc)
4. Automatically generates code based on your database schema.
//------------------------------
Three Parts of prisma:
1.Prisma Client:
 Auto-generated and type-safe query builder for node.js & typescript , full stack app, rest API, graphql API etc. (supports auto completion and type checking in your IDE)
2.Prisma Migrate:
 Declarative data modeling & migration system.
3.Prisma Studio:
 GUI to view and edit your data.

//  --------------------------------
What Is Data Modeling?

Data modeling is the process of defining the data requirements
and structures of a system.

Usually involves describing the database schema, including
tables, fields, data types and relationships.

// -----------------------------------------
Getting Started

1. (install typescript)
  npm install typescript ts-node @types/node -D

2. (create ts config file: tsconfig.json):initialize TypeScript and Webpack
  npx tsc --init

3. (install prisma)
  npm i prisma -D

4. (initialize prisma: npx prisma init databaseToBeUsed)
  <!-- npx prisma init --datasource-provider sqlite -->
  npx prisma init --datasource-provider mysql


//-----------------------
Set up a new Prisma project and specify the url that will be used
  $ prisma init --url mysql://user:password@localhost:3306/myd

// our code will be same for sqlite, MySQL, Prosgre
.env file --> describe our database credentials now. Since we are using sqlite we will have DATABASE_URL="file:./dev.db"

we don't need to create that. Once we create our migration and we run it it'll create that file for us.

Inside: prisma/schema.prisma
after writing code in shema.prisma: 
  provider = "mysql"
  url = env("DATABASE_URL")

  if other .env var name used error shown

1. open xampp => create database: 'prisma_database', username: root, pass: (nothing), host: localhost 
2. inside .env:  DATABASE_URL="mysql://root:@localhost:3306/prisma_database" 

3. Generated Prisma Client (open xampp : on apache & mysql)
  npx prisma generate

4. create _prisma_migrations table (keep track of a lot of thigs about prisma) 
  npx prisma migrate dev --name init --create-only

5. deploy change in model (create tables/ deploy change) 
  npx prisma migrate deploy

Run index.ts:
1. run code: D:> npx ts-node index.ts  

*/

