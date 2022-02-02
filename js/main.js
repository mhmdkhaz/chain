// start in loader
let timedelay =2000;

// start in scrools
window.onscroll = function () {
    changebackcolornac();
    amazingbox(); 
    boxcheckfun();
}

// start in onload

window.onload = function(){
    loaderfun();
    clientfun()
}

let loader = document.getElementById("loader");
function loaderfun() {
    setInterval(() => {
        loader.style.display ="none";
    }, timedelay);
}
// start in nav
let aperentnav = document.getElementById("nav");
let nav = document.querySelectorAll("#nav ul li");
let elementli = document.getElementById("elementLi");
let opennav = document.getElementById("iconnav");
let colsenav = document.getElementById("colsenav");

// change backcolor nav

function changebackcolornac() {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        aperentnav.style.backgroundColor = "#fff";
    }
    else{
        aperentnav.style.backgroundColor = "transparent";
    }
}

function navbar() {
    nav.forEach((el)=>{
        el.addEventListener("click" , function remoceActive() {
            nav.forEach((el)=>{
                el.classList.remove("active");
                this.classList.add("active");
            })
        });
    })
    opennav.onclick = function () {
        elementli.style.height = "100%";
    }
    colsenav.onclick = function () {
        elementli.style.height = "0";
    }
}
navbar();

// start in sign
let hideall = document.querySelectorAll(".hide");
let nonesocial = document.querySelectorAll(".nonesocial");

let btnsign = document.getElementById("showsign");
let Basic = document.getElementById("Basic");

let btnlogin = document.getElementById("btnlogin");
let showlogin = document.getElementById("showlogin");

let btnregister = document.getElementById("btnregister");
let showrigester = document.getElementById("showrigester");

let backtosign = document.querySelectorAll(".backtosign");

function eventshow() {
    btnsign.addEventListener("click" , showbasic);
    btnlogin.addEventListener("click" , shwolog);
    btnregister.addEventListener("click" , shworegister);
    backtosignup();
}
eventshow();

hideall.forEach((el) =>{
    el.onclick = function () {
        nonesocial.forEach((social) =>{
            social.style.display = "none";
        })
    }
})

function showbasic() {
    Basic.style.display = "block";    
}
function shwolog() {
    showlogin.style.display = "block";
    Basic.style.display = "none";
}
function shworegister(){
    showrigester.style.display = "block";
}
function backtosignup() {
    backtosign.forEach((btnback) =>{
        btnback.onclick = function () {
            Basic.style.display = "block";
            showlogin.style.display = "none";
            showrigester.style.display = "none";
        }
    })
}

// start in header
let headerLeft = document.getElementById("header_left");
let headerRight = document.getElementById("header__right");

function header() {
    setTimeout(() => {
        headerLeft.style.left ="0";
        headerRight.style.opacity ="1";
    }, timedelay + 500);
}
header();
// end in header

// start in amazing
let boxamazing = document.querySelectorAll(".amazing .box");

function amazingbox() {
    boxamazing.forEach((box) =>{
        if(window.scrollY >= box.offsetTop + 500){
            box.style.transform = "scale(1)";
        }
    })
}

// end in amazing

// start in all-apperent-box clients
let clientsText = document.querySelectorAll(".all-apperent-box .client-box");

function clientfun(){
    clientsText.forEach((elementClient) =>{
        let containsclas = elementClient.classList.contains("active");
        if(containsclas){
            elementClient.style.display ="block";
        }else{
            elementClient.style.display ="none";
        }
    })
}
// end in all-apperent-box clients

// start in check
let boxescheck = document.querySelectorAll(".price .box .content-box");
 
function boxcheckfun() {
    boxescheck.forEach((boxcheck) =>{
        if(window.scrollY >= boxcheck.offsetTop - 400){
                boxcheck.style.left = "0";

        }
    })
}
// end in check

// start in filter
let filterBtn = document.querySelectorAll(".apperent-element .element-person");
let filterImg = document.querySelectorAll(".all-apperent-box .client-box");
let fillteStar = document.querySelectorAll(".star i");

filterBtn.forEach(function (button) {
 button.addEventListener("click" , manageImgs);

})

function manageImgs() {
    filterImg.forEach(function (img) {
      img.style.display = "none";
    })
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
      el.style.display = "block";
    });
    filterBtn.forEach((star)=>{
        star.classList.remove("active");
        this.classList.add("active");
    })
   };
   
