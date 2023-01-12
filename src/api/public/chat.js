const socket = io.connect('http://localhost:5173/')
//Veri gönderen
const buton = document.querySelector('.btn');

buton.addEventListener('click',()=>{
    socket.emit('chat',{
        mesage:'test',
        sender:'sender'
    })
})