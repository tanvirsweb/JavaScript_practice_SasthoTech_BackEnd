/*
1. (install prisma as dev dependencies)
    prisma_express_crudApp> npm i prisma -D

2. (initialize prisma: npx prisma init databaseToBeUsed) 
[prisma/schema.prisma , .env will be auto created]
  <!-- npx prisma init --datasource-provider sqlite -->
    D:\prisma_express_crudApp> npx prisma init --datasource-provider mysql 

install vscode extension: prisma (for code highlighting)
or, inside current folder create: .env & prisma/schema.prisma

1. open xampp => create database: 'prisma_database', username: alvi, pass:1234, host: localhost 
2. inside .env:  
    DATABASE_URL = "mysql://alvi:1234@localhost:3306/prisma_database" 
    PORT = 3000
if you didn't create an account in XAMPP mysql database then it should be:
DATABASE_URL = "mysql://root:@localhost:3306/prisma_database" 

(open terminal in current directory)

3. Generated Prisma Client (open xampp : on apache & mysql)
    D:\prisma_express_crudApp> npx prisma generate
  
  or,npx prisma generate --schema=./path to prisma file/schema.prisma

4. create _prisma_migrations table (which tables/realtion/model will be created & their properties) 
[create migration without applying it: --create-only]

    D:\prisma_express_crudApp> npx prisma migrate dev --name init --create-only

5. deploy change in model (create tables/ deploy change) [make database in sync with your schema.]
    D:\prisma_express_crudApp> npx prisma migrate deploy

or, create migration & aplly it at the same time: 
    D:\prisma_express_crudApp> npx prisma migrate dev --name init

Note:
each time you change model (add/delete a column in table) and migrate : only new changes will added to new migration folder.& if you delete previous folders your code won't work.
so, If you want all changes to be in 1 folder: before migration delete current migration folder.

Run index.ts:
1. run code: D:\prisma_express_crudApp> nodemon index.js 


*/

const express = require('express');
const app = express();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const PORT = process.env.PORT;
app.use(express.json());

// get all users
app.get("/api/users", async (req, res)=> {
    try{
        const allUsers = await prisma.user.findMany();
        res.json(allUsers);
    } catch(err){
        console.log(err);
        res.send('Error occured!!');
    }
});
// get all user by id
app.get("/api/user/:id", async (req, res)=> {
    try{
        const user = await prisma.user.findUnique({
            where: {
                id : req.params.id,
            }
        });

        if(user) res.json(user);
        else res.status(404).json({error: `User doesn't exist!! with given id: ${req.params.id}`});
    } catch(err){
        console.log(err);
        res.send('Error occured!!');
    }
});
// add user
app.post("/api/user/", async (req, res)=> {
    try{
        const newUser = await prisma.user.create( { data:{ ...req.body } } );
        res.json(newUser);
    } catch(err){
        console.log(err);
        res.send('Error occured!!');
    }
});


// update user
app.put("/api/user/:id", async (req, res)=>{
    try{
        // passed parameters are string
        const updatedUser = await prisma.user.update({ 
            where: { id: req.params.id },
            data: req.body,
        });
        res.json(updatedUser);
    } catch(err){
        console.log(err);
        res.send('Error occured!!');
    }
});

// delete user
app.delete("/api/user/:id", async (req, res)=>{
    try{
        // passed parameters are string
        const deletedUser = await prisma.user.delete({ 
            where: { id: req.params.id }
        });
        res.json(deletedUser);  
    } catch(err){
        console.log(err);
        res.send('Error occured!!');
    }
});



// House
// add house
app.post("/api/house/", async (req, res)=> {
    try {
        const newHouse = await prisma.house.create( { data: req.body} );
        res.json(newHouse);
    } catch(err){
        console.log(err);
        res.send('Error occured!!');
    }
});

// get house
app.get("/api/house/", async (req, res)=> {
    try {
        const address = req.body.address;
        const house = await prisma.house.findUnique({
            where: {
                address,
            },
            include: {
                owner: true,
                builtBy: true,
            },
        });
        res.json(house);
    } catch(err) {
        console.log(err);
        res.send('Error occured!!');
    }
});

// filter house
app.get("/api/house/withFilters", async (req, res)=> {
    try {
        const houses = await prisma.house.findMany({
            where: {
                wifiPassword: {
                    not: null,
                },
                owner: {
                    age: {
                        gte: 22,
                    },
                },
            },
            orderBy:[
                {
                    owner: {
                        firstName: "desc"
                    },
                },
            ],
            include: {
                owner: true,
                builtBy: true,
            },
        });
        res.json(houses);
    } catch(err) {
        console.log(err);
        res.send('Error occured!!');
    }
});

app.listen(PORT, ()=> console.log(`server running on port ${PORT} home: http://localhost:${PORT}/`));