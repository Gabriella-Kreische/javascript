let friend = {name: 'Jose',
gender: 'M',
weigth: 85.4,
fattenup(p=0){
    console.log('Fatten up')
    this.weigth += p
}}

console.log(friend)
console.log(typeof friend)

friend.fattenup(2)
console.log(`${friend.name} weight ${friend.weigth}Kg`)