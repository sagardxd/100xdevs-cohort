import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// interface UpdateParams {
//     firstName: string;
//     lastName: string;
// }
// async function updateUser(username: string, { firstName, lastName }: UpdateParams) {
//     const res = await prisma.user.update({
//         where: {email: username},
//         data: {
//             firstName,
//             lastName
//         }
//     })
//     console.log(res)
// }
// updateUser('sagar@gmail.com', {firstName: 'Samu', lastName: 'Yadav'})


//getting user

async function getUser(email:string){
    const res = await prisma.user.findUnique({
        where: {email},
        select:{
            id:true,
            firstName:true
        }
    })
    console.log(res)
}

getUser('sagar@gmail.com')