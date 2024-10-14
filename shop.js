document.addEventListener("DOMContentLoaded", function() {
    const mainImg = document.getElementById('mainimg');
    const small = document.querySelectorAll('.small');

    small.forEach(function(img) {
        img.onclick = function() {
            mainImg.src = img.src;
        };
    });
});



document.addEventListener('DOMContentLoaded',function(){

let shop=document.querySelectorAll('.Pcontainer .product');

shop.forEach(function(item){

 item.onclick=function(){
 window.location.href = 'single.html';
 }
})
});


// let btn=document.querySelector('.btn');

// btn.addEventListener('click',()=>{
     
// })
 