let count = 0;

var minus = document.getElementById("minus");
var plus = document.getElementById("plus");
let item = document.getElementById('count')
// console.log (plus)
console.log(item.textContent)
function increaseCount () {
    if(item.textContent < 5){
    item.textContent++
    }
    
}

// plus.onclick=increaseCount


function decreaseCount () {
    if(item.textContent >0){
        item.textContext--
        item.textContent= count
    }
    
}
// minus.onclick=decreaseCount
