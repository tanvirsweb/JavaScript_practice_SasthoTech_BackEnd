//Prisma WebDev simplified: 
// https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql

// npm init -y
// npm i --save-dev prisma typescript ts-node @type/node nodemon
// npx tsc --init

// Initialize prisma
// npx prisma init --database-provider posgresql
// vscode extension: Prisma --> syntax highlighting & formatting
// file> Preferences> settings> format on save(search & check) 
// npx prisma format --> format prisma code

// npm install @prisma/client
// Migrate & add new model to database (its for development only & we will initialize database with this model of User): 
// npx prisma migrate dev --name init

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    // await prisma.user.create({
    //   data: {
    //     name: 'Alice',
    //     email: 'alice@prisma.io',
    //     posts: {
    //       create: { title: 'Hello World' },
    //     },
    //     profile: {
    //       create: { bio: 'I like turtles' },
    //     },
    //   },
    // })
  
    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
        profile: true,
      },
    })
    console.dir(allUsers, { depth: null })
  }

  async function funcUpdate() {
    const post = await prisma.post.update({
      where: { id: 1 },
      data: { published: true },
    })
    console.log(post)
  }
  

main()
  .then(async () => {
    await funcUpdate()
  })
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })


