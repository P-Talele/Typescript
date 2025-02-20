function addition(a: number, b: number): number {
  return a + b
}
console.log(addition(2, 3))

function addTwo(a: number, b: number): any {
  return a + b;
}
console.log(addTwo(7, 8)); // logs 15

function addName(a: string, b: string): string {
  return `${a} ${b}`
}
console.log(addName("prashant", "talele"))


function passArrayValue(num :Number[]) {
  console.log(num)
}


export = {}