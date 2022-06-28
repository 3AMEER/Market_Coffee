let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


// Start Botton
var mybotton = document.getElementById('goup');

window.onscroll = function () {

    // console.log(scrollY)
    'user strict';

    if (window.pageYOffset >= 1700){
        mybotton.style.display = "block";        
    }
    else{
        mybotton.style.display = "none";        
    }

};

mybotton.onclick = function () {
    'user strict';

    window.scrollTo({
        top: 0,       
        behavior: "smooth",
    });
}



// Start Section Products JS
var heart = document.querySelector('.heart');

document.querySelector('#heart').onclick = () =>{
    heart.style = "color: red";
}

var heart = document.querySelector('.heart');

document.querySelector('#heart').onclick = () =>{
    heart.style = "color: red";
}

var heart = document.querySelector('.heart');

document.querySelector('#heart').onclick = () =>{
    heart.style = "color: red";
}


let cart = document.querySelector('.cart');

document.querySelector('#eye').onclick = () =>{
    cart.classList.toggle('active');
}
// End

