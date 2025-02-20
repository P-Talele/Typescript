let vicle: string[] = ["car", "bus", "train"]
let num: number[] = [23, 44, 56, 77]
let mixValue: any[] = ["prashant", 2333, "talele"]

let multiType: (string | number)[] = ["Schoole", "Train", 4534, "Mumbai"]
const result = multiType.map((item) => {
    if (typeof item === 'string') {
        return item
    }

})
console.log("Result", result)

const copyValue = [...result]
console.log("copy Value", copyValue)

console.log("***************************************************")

const subject: string[] = ["English", "Marathi", "Math", "Physics", "Chemistry", "Biology"];
for (let intex in subject) {
    console.log(subject[intex])
}
const copyArray = [...subject] // this is spraind  operator
const SliceArray: string[] = copyArray.slice(1, 4) // it retrun array
// console.log(SliceArray)

const NumArray: number[] = [1, 2, 3, 4, 5];

let sum: number = NumArray.reduce((a, b) => {
    return a + b
}, 10)
console.log(sum)


