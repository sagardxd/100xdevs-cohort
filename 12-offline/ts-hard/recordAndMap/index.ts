// interface User {
//     id: string;
//     name: string;
// }

// //using record for cleaner syntax
// type Users = Record<string, User>

// const users: Users = {
//     'abc123': { id: 'abc123', name: 'John Doe' },
//     'xyz789': { id: 'xyz789', name: 'Jane Doe' },
// };

// users['abc123']

interface User {
    id: string;
    name: string;
}

//initializing a empty map
const users = new Map<string, User>();
users.set("1", {id: "1", name: "sagar"})

console.log(users.get("1"));


