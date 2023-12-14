import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // Prisma Queries: Create user
    const user = await prisma.user.create({
        data: {
            name: 'Alvi',
            email: 'alvi@gmail.com'
        },
    });

    // Create article and associate it with user
    const article = await prisma.article.create({
        data: {
            title: 'Alvis first article',
            body: 'This is body of Alvis first article',
            author: {
                connect:{
                    id: 1,
                },
            },
        },
    });
    console.log(article);

    // Create another article
    const article1 = await prisma.article.create({
        data:{
            title: 'Simple Article',
            body: 'This is a simple article',
            author:{
                connect:{
                    id: 1,
                },
            },
        },
    });
    console.log(await prisma.article.findMany());

    // Update data
    const user_updated = await prisma.user.update({
        where:{
            id: 1
        },
        data:{
            name: 'John Doe Jr.'
        },
    });
    console.log(user_updated);
    // npx prisma studio


}

async function createArticleUser(){
    // Create user & article & associate them
    const user1= await prisma.user.create({
        data:{
            name: 'Tanvir',
            email: 'tanvir@gmail.com',
            artricles: {
                create:{
                    title: 'Tanvirs 1st article',
                    body: 'This is Tanvirs 1st article',
                },
            },
        },
    });

    // const users = await prisma.user.findMany() //won't show articles as they are of different table

    // Get all users & their articles
    const users = await prisma.user.findMany({
        include:{
            artricles: true,
        },
    });
    console.log(users)
    // Loop over Tanvir's articles
    users.forEach((user)=>{
        console.log(`User: ${user.name}, Email: ${user.email}`);
        console.log('Articles');
        user.artricles.forEach((article)=>{
            console.log(`- Title: ${article.title} , Body: ${article.body}`);
        });
        console.log('\n');
    });

    // Remove Article
    const article_removed = await prisma.article.delete({
        where:{
            id: 1,
        },
    });
    console.log(article_removed);

}
// main().then().catch();
createArticleUser()
    .then(async ()=>{
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.log(e)
        await prisma.$disconnect();
        process.exit(1);
    });

    // run code: D:> npx ts-node index.ts  