//1 add a variable for the input
let num = document.getElementById('txtn') //Or let num = document.querySelector('input#txtn')
let list = document.getElementById('txtlist')
let res = document.getElementById('res')
let arrayvalues = [] //Used to keep the input data

/*
//then transform the string into a number
let n = [Number(num.value)]
*/

//4 verify if input is a number. 1 parameter
function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

//3 function inList receive a number and a ${values} list (l)
function inList (n, l) {
    if (l.indexOf(Number(n)) != -1) { //If the array is not empty
        return true
    } else {
        return false
    }
}

//2 Add conditions to verify if the input is a number and is not in the list already
function add() {    
    if(isNumber(num.value) && !inList(num.value, arrayvalues)) {
        arrayvalues.push(Number(num.value))//Input number placed into the array
        let item = document.createElement('option')//Create an variable inside select table
        item.text = `The value ${num.value} has been added.`//Text inside select table
        list.appendChild(item) //Fixed text allowing to add variable 'item'
        res.innerHTML = ''//Clean results in case to add more numbers
    } else {
        window.alert('Value invalid or already found in the list')
    }
    num.value = ''
    num.focus()//Cursor will be in the input box
}

//5 Create a function to show results
function end() {
    if(arrayvalues.length == 0) {
        window.alert('Add values before finalize!')
    } else {
        let tot = arrayvalues.length //place the length number into a variable
        let greater = arrayvalues[0] //start the greater value with the first number of the array
        let smaller = arrayvalues[0] //start the smaller value with the first number of the array
        let sum = 0
        let average = 0
        for(let pos in arrayvalues) {
            sum += arrayvalues[pos] //sum all values inside the array
            if (arrayvalues[pos] > greater) //placed the greater value inside the array in the greater variable
                greater = arrayvalues[pos]
            if (arrayvalues[pos] < smaller) //placed the smaller value inside the array in the greater variable
                smaller = arrayvalues[pos]
        }
        average = sum/tot
        res.innerHTML = ''//reset list
        res.innerHTML += `<p>In total we have ${tot} numbers registered.</p>`
        res.innerHTML += `<p>The greater value informed is ${greater}.</p>`
        res.innerHTML += `<p>The smaller value informed is ${smaller}.</p>`
        res.innerHTML += `<p>Sum all values we have ${sum}.</p>`
        res.innerHTML += `<p>The average is ${average}.<p>`
    }
}

