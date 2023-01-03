function count(){
    //First place the inputs into variables
    var txtstart = window.document.querySelector('input#txtstart')
    var txtend = window.document.querySelector('input#txtend')
    var txtgap = window.document.querySelector('input#txtgap')
    var res = window.document.querySelector('div#res')

    //Second add conditions
    if(txtstart.value.length == 0 || txtend.value.length == 0){
        res.innerHTML = 'It is not possible to count!'
        //window.alert(`[ERROR] It is missing data!`)
    } else {
        //Third transform the text variables in numbers variables
        var start = Number(txtstart.value)
        var end = Number(txtend.value)
        var gap = Number(txtgap.value)   
        res.innerHTML = `Counting: <br>`    
        if (gap <= 0) {
            window.alert('Step invalid, assuming step value of 1')
            gap=1
        } 
        if(start < end) {
            //Crescent Count
            for(var c = start; c <= end; c += gap){
                res.innerHTML += `${c} \u{1F41B}` 
            }
        } else {
            //Descrescent Count
            for(var c = start; c >= end; c -= gap){
                res.innerHTML += `${c} \u{1F41B}` 
            } 
        }
        res.innerHTML += `\u{1F98B}`
    }
}