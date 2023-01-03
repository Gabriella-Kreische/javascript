var age = 17
console.log(`You're ${age} years old.`)
if (age < 16) {
    console.log(`You can't vote`)
} else if (age < 18 || age > 65){
    console.log('Optional vote')
} else {
    console.log('Mandatory vote')
}