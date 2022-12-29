function checker() {
    var date = new Date()
    var year = date.getFullYear()
    var fyear = document.getElementById('txtyear')
    var res = document.querySelector('div#res')
    if (fyear.value.length == 0 || Number(fyear.value) > year) {
        window.alert('[ERROR] Check the data entered and try again!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var age = year - Number(fyear.value)
        res.innerHTML = `Age result: ${age}`
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if (fsex[0].checked) {
            gender = 'Male'
            if (age >= 0 && age < 3) {
                //Baby
                img.setAttribute('src', 'images/man-baby.jpg')
            } else if (age < 10) {
                //Child
                img.setAttribute('src', 'images/man-child.jpg')
            } else if (age < 21) {
                //Teenager
                img.setAttribute('src', 'images/man-tennager.jpg')
            } else if (age < 50) {
                //Adult
                img.setAttribute('src', 'images/man-adult.jpg')
            } else {
                //Grand
                img.setAttribute('src', 'images/man-old.jpg')
            }
        } else if (fsex[1].checked) {
            gender = 'Female'
            if (age >= 0 && age < 3) {
                //Baby
                img.setAttribute('src', 'images/woman-baby.jpg')
            } else if (age < 10) {
                //Child
                img.setAttribute('src', 'images/woman-child.jpg')
            } else if (age < 21) {
                //Teenager
                img.setAttribute('src', 'images/woman-tennager.jpg')
            } else if (age < 50) {
                //Adult
                img.setAttribute('src', 'images/woman-adult.jpg')
            } else {
                //Grand
                img.setAttribute('src', 'images/woman-old.jpg')
            }
        }
        if (fsex[0].checked) {
            gender = 'Male'
        } else if (fsex[1].checked) {
            gender = 'Female'
        } else if (fsex[2].checked) {
            gender = ''
        }

        res.style.textAlign = 'center'
        if (fsex[2].checked) {
            res.innerHTML = `You're ${age} years old.`
        } else {
        res.innerHTML = `It was detected ${gender} ${age} years old.`
        res.appendChild(img)
        }
    }
}