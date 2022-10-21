var inp1 = document.querySelector('.inp1')
var inp2 = document.querySelector('.inp2')
console.log(inp1)

var btn = document.querySelector('button')


btn.addEventListener('click',()=>{
    var nov = inp1.value
    var nov2 = inp2.value

    inp1.value = nov2
    inp2.value = nov
    alert(nov)
})
