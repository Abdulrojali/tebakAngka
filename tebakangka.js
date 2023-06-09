let inputUser=document.querySelector('.inputUser').value
let button=document.querySelector('.handlercontent')
let randomAngka;
let hasil=document.querySelector('.output')

button.addEventListener('click',logicAngka)
function logicAngka(){
    randomAngka=Math.floor(Math.random()*10)
    hasil.innerHTML=randomAngka
    if(randomAngka==parseInt(inputUser)){
        alert('selamat kamu benar')
    }
    else{
      alert('maaf kamu gagal')
    }
}
