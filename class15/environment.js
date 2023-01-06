let num = [2, 8, 9, 5]
console.log(num)

//Add a element in the array for position 3
num[3] = 1
console.log(num)

//Add element in the array
num.push(8)
console.log(num)

//Show array length
console.log(`The array has ${num.length} length`)

//Show first array value
console.log(`The first value is ${num[0]}`)

//Sort array
num.sort()
console.log(`The array has been sorted ${num}`)

//To find the position of a value
//let pos = num.indexOf(8)
//console.log(`The value of 8 is in the position ${pos}`)

let pos = num.indexOf(7)
if (pos == -1) {
    console.log(`The value has not been found!`)
} else {
    console.log(`The value is in the position ${pos}`)
}
