let values = [8, 1, 8, 4 , 9 ,6 ,7]
console.log(values[0])

console.log(values)

/*for (let pos=0; pos < values.length; pos++) {
    console.log(`The position ${pos} has the value ${values[pos]}`)
}*/

values.sort()
for (let pos in values) {
    console.log(`The position ${pos} has the value ${values[pos]}`)
}

values.indexOf(4)