import { v4 as uuidv4 } from 'uuid';
let users = [];
export const createUser = (req,response) => {
    const user = req.body;
    users.push({ ...user , id: uuidv4()});
    response.send(`The User With the name ${user.firstName} is Added to the DB`); 
 }; 
 export const getUsers = (req,response) => {
    response.send(users);
};
 export const deleteUser = (req,response) => {
    const { id } = req.params ;
    users = users.filter((user) => user.id != id );
    response.send(`User with id ${id} deleted from db`);
};
 export const getUser = (req,response) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id == id );
    response.send(foundUser);
};
 export const patchUser =  (req,response) => {
    const { id } = req.params;
    const { firstName , lastName , age } = req.body;
    const user = users.find((user) => user.id == id );
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age ;
    response.send(`User with the id ${id} has been updated`);
};
