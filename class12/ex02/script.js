function load() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var date = new Date()
var hour = date.getHours()
msg.innerHTML = `Now it is ${hour} hours.`
if(hour >= 0 && hour <12){
    //Good morning!
    img.src = 'images/morning.jpg'
    document.body.style.background = '#67749B'
} else if (hour >= 12 && hour <+ 18) {
    //Good afternoon!
    img.src = 'images/afternoon.jpg'
    document.body.style.background = '#5C6C43'
} else {
    //Good Night!
    img.src = 'images/night.jpg'
    document.body.style.background = '#004854'
}
}