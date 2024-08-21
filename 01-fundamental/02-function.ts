function isLogged (status: Boolean) {
  if (status== true) {
    return 'User Logged'
  } else {
    return 'User Not Logged'
  }
}
let user: any = isLogged(false)
console.log(user)

function addition (first: number, second: number) {
  return first + second
}
let sum: number = addition(12, 23)
console.log('Addition Of two Variable=' + sum)

function goodMorning (name: string): string {
  const suffix = name ? `, ${name}.` : '.'
  return 'Good Morning' + suffix
}
console.log(goodMorning('Sam'))
const arrowFunction = (name: String, location: String) => {
  console.log('Name=' + name + ',Location=' + location)
}
let result = arrowFunction('Prashant', 'Pune')
console.log(result)

const stars = ['Virat', 'Rohit', 'Salman']
let resultStars = stars.map(item => {
  return `${item} is heros`
})
console.log(resultStars)

function noReturnType (name: String): void {
  console.log(name)
}
let result2 = noReturnType('Prashant')
console.log(result2)

export = {}
