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
function updateUser(updatedProps: UpdateProps) {
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
