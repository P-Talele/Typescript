var employee = {
    _Id: 324342,
    Name: 'Prashant',
    Gmail: 'prashanttalele1997@gmail.com'
};
var result = employee.Name;
console.log(result);
function createUser(user) {
    return { name: 'Ashish', gmail: 'Ashish@gmail.com', isActive: true };
}
var valueIs = createUser.name;
console.log(valueIs);
console.log("this is Object File ");
