//so when we scroll we want navbar styles should change
window.addEventListener("scroll",()=>{ //we use window object and we add an event scroll means when someone will scroll 
   document.querySelector("nav").classList.toggle("window-scroll",window.scrollY>0)//classList property allows you to add , remove , toggle classes in the list , like here we have used toggles so it allows adding or removing the CSS classes that exit in your array or not. So if the class list already contains the class name then toggle() method removes it from the class list but if the class list does not contain the class name then it adds to the class list. So here we didn't have window-scroll class so toggle adds it to the class list.So whenever we scroll then event triggers. windowscrollY gives us the valaue or number of how much we have scrolled so suppose when we give window.scrollY>100 it means when we have scrolled 100 px in y direction then after scrolling for 100 px all the properties of the window-scroll class will be applied. So here when we scroll event triggers and inside nav element we add class window-scroll and we call class window-scroll.
})





//so when we click on hamburger then we should see the content of the nav menu, when we click on close button then the content of the menu is not seen, we make portfolio elements also
const menu=document.querySelector(".nav__menu")
const portfolio=document.querySelector(".header__container")
const portfolio1=document.querySelector(".categories")
const portfolio2=document.querySelector(".research")
const portfolio3=document.querySelector(".projects")
const portfolio4=document.querySelector(".achievement")
const portfolio5=document.querySelector(".course")
const portfolio6=document.querySelector("#contact")
const menuBtn=document.querySelector("#open-menu-btn")
const closeBtn=document.querySelector("#close-menu-btn")
const menuElement=document.querySelector(".nav__menu")


//so we add event listener
menuBtn.addEventListener("click",()=>{ //so we add an event click
    menu.style.display="flex";
    closeBtn.style.display="inline-block"; //so we want when we click on menu button then content should appear and a cross button should also appear
    menuBtn.style.display="none"; //so we do its display as none so that menu buttom dissapears and close button should appear


    //when we click in hamburger then all the elements will become some transparent
    portfolio.style.opacity="0.3";
    portfolio1.style.opacity="0.3";
    portfolio2.style.opacity="0.3";
    portfolio3.style.opacity="0.3";
    portfolio4.style.opacity="0.3";
    portfolio5.style.opacity="0.3";
    portfolio6.style.opacity="0.3";
})




//so when we click on the nav__menu element then again the opacity becomes 1 and the whole portfolio is visible
menuElement.addEventListener("click",()=>{
    portfolio.style.opacity="1";
    portfolio1.style.opacity="1";
    portfolio2.style.opacity="1";
    portfolio3.style.opacity="1";
    portfolio4.style.opacity="1";
    portfolio5.style.opacity="1";
    portfolio6.style.opacity="1";
})





//when we click on menu button the the links appears and a close button appears so when we click on close button then the links should be not seen
const closeNav=()=>{
    menu.style.display="none";
    closeBtn.style.display="none";
    menuBtn.style.display="inline-block";


    //we again make the opacity 1 so that when we click on close button the whole portfolio is visible
    portfolio.style.opacity="1";
    portfolio1.style.opacity="1";
    portfolio2.style.opacity="1";
    portfolio3.style.opacity="1";
    portfolio4.style.opacity="1";
    portfolio5.style.opacity="1";
    portfolio6.style.opacity="1";
}
closeBtn.addEventListener("click",closeNav)//so we add a click event listener and we we click on close button the event should trigger and should call closeNav






//when we click outside the nav__menu then also nav__menu should get close and should not be seen only for screen size 1024px and below
const mediaQuery = window.matchMedia('(max-width: 1024px)')
if(mediaQuery.matches){
    window.addEventListener('mouseup', function(event){ // 
        if (event.target !=menu && event.target.parentNode != menu) {
          menu.style.display = 'none';
          closeBtn.style.display="none";
          menuBtn.style.display="inline-block";
    
          //we again make opacity as 1
          portfolio.style.opacity="1";
          portfolio1.style.opacity="1";
          portfolio2.style.opacity="1";
          portfolio3.style.opacity="1";
          portfolio4.style.opacity="1";
          portfolio5.style.opacity="1";
          portfolio6.style.opacity="1";
        }
    });
}
  














    
