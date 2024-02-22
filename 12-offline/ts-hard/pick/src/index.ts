interface User {
    id: number; 
    name: string;
    email: string;
}

type UserProifle = Pick<User, 'name' | 'email'>

const displayUserProfile = (user: UserProifle) => {
    console.log(`Name: ${user.name}, Email: ${user.email}`)
}