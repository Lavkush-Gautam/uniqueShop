let  bar=document.querySelector('#bar');
let nav=document.querySelector('#navbar')

if(bar){
    bar.addEventListener('click',()=>{
    
        nav.classList.add('active')
    })
}


let close=document.querySelector('#close');

close.addEventListener('click',()=>{
    nav.classList.remove('active');
})