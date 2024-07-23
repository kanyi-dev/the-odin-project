import User, { printName, printAge } from "./user.js";

const user = new User("Bobby", 21);

console.log(user);
printAge(user)
printName(user)