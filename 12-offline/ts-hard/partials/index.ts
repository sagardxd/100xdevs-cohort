interface User {
    id: number; 
    name: string;
    email: string;
}

type UserProifle = Pick<User, 'name' | 'email'>

//if the user only want to update a single value
type UserProifleOptional = Partial<UserProifle>

const displayUserProfile = (user: UserProifleOptional) => {
    console.log(`Name: ${user.name}, Email: ${user.email}`)
}