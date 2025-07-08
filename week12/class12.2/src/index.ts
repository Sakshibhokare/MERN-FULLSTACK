interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

//1 st pick
//update the user, but not allowed to update the email and id 
//passing too many args to func, it makes function look ugly 
// will define which properties of interface we want to use by using pick function 
// why pick function why not to create another interface: by using pick method we would not to be worried about changing the types of argument, in future if the type got changed we will not be required to change the type 
type UpdateProps = Pick<User, 'name' | 'age' | 'email'>
function updateUser(updatedProps: UpdateProps) { //
    //hit the db to update the user
}


//2nd partial 
//if we want that all args should be optional the we have two options to do this
// first: will create an interface with ? sign, which is not feasible
//second use partial, 
type UpdatePropsOptional = Partial<UpdateProps>

function updateUser2(updatePorps: UpdatePropsOptional) {

}

updateUser2({ name: 'demo' });

//3rd readonly
// if we want values to be constant for array and obj 
// we will use readonly 
// by using const a = [1, 23, 4,5] we can change the internal values of array like a[1], a[2]
// same with obj 
type User2 = {
    readonly name: String;
    readonly age: number
}

const user2: User2 = {
    name: 'johnny',
    age: 32
}

//try changing
// user2.name="sunny"; // it will trw an error 

// we can make whole obj readonly 
const newUser: Readonly<User2> = {
    name: "something",
    age: 23
}


//4th Record and maps
//Record is a typescript concept  
// Record is use to give type of key and it's value together
type User1 = Record<string, number>

const users: User1 = {
    "key": -9,
    "key1": 990
}

//Map is a js concept
const users1 = new Map()
users1.set("key1", { name: "ram", age: 90 });
users1.set("key2", { name: 'sham', age: 30 });

users1.delete("key1");
// we can specify the type of key value pair 
const users3 = new Map<String, User>();


//5th Exclude 
// exclude something from the og obj 
type EventType = 'click' | 'scroll' | 'mouse';
type ExcludeEvent = Exclude<EventType, 'scroll'>

//6th Type inference in Zod
// validating the inputs using zod 