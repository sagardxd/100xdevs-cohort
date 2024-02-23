interface User {
    id: string;
    name: string;
}

//using record for cleaner syntax
type Users = Record<string, User>

const users: Users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

users['abc123']