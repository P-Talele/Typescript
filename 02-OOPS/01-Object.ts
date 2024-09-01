const employee: { _Id: number; Name: string; Gmail: string } = {
  _Id: 324342,
  Name: 'Prashant',
  Gmail: 'prashanttalele1997@gmail.com'
}
let  result = employee.Name
console.log(result)   

type User = {
  name: String
  gmail: String
  isActive: Boolean
}
 function createUser (user: User): User {

return { name: 'Ashish', gmail: 'Ashish@gmail.com', isActive: true }
}
 const  valueIs=createUser.name
console.log(valueIs);   
console.log("this is Object File ")
