/*
var hour = 23
console.log(`Now it is ${hour} hours.`)
if(hour < 12) {
    console.log('Good Morning!')
} else if (hour <= 16) {
    console.log('Good Afternoon!')
} else {
    console.log('Good night!')
}
*/
var now = new Date()
var hour = now.getHours()
console.log(`Now it is ${hour} hours.`)
if(hour < 12) {
    console.log('Good Morning!')
} else if (hour <= 16) {
    console.log('Good Afternoon!')
} else {
    console.log('Good night!')
}