let slideCross = document.getElementById('slideCross')
let togglebtn = document.getElementById('togglebtn')
let header = document.getElementById('header')
let state = "close"
slideCross.addEventListener('click',function(){
    header.style.display = 'none'
    togglebtn.style.display = 'inherit'
})
togglebtn.addEventListener('click', function(){
    // togglebtn.style.display = 'none'
    header.style.display = 'inherit'
})
