function multiply() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltable')
    if (num.value.length == 0) {
        window.alert('Please, type a number!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}
