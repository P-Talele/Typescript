interface myList {
  // for Array
  [index: number]: String
}
let arr: myList = ['Prashant', 'Kaushal', 'Neha']
let arr2: myList = ['Prashant', 'Talele']
console.log(arr)
console.log(arr2)   

//Making a property optional using the ? symbol allows flexibility in object structures.
interface server {
  (key: String, value?: String): void
}

function Pri (key: string): void {
  console.log(key + ' for ' + value)
}   
let newFunc: server = Pri
newFunc('Interface', 'Function')
