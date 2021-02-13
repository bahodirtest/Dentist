let hamburger = document.querySelector(".hamburger");
let headerMenu = document.querySelector('.header__menu');
let headerHeight = document.querySelector('header').offsetHeight;
let toTop = document.querySelector('.totop');
let headerNav = document.querySelector('.header__nav');
let prevScroll = window.pageYOffset;

// On click
hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  headerMenu.classList.toggle("active");
  // Do something else, like open/close menu
  
  if (hamburger.classList.contains('is-active')) {
    headerNav.classList.add('fixed');
  }
  
});


window.onscroll = function () {
  let currentScroll = window.pageYOffset;
  let headerNav = document.querySelector('.header__nav');
  if (headerHeight > prevScroll) {
    if (hamburger.classList.contains('is-active')) {
      headerNav.classList.add('fixed');
    } else{
      headerNav.classList.remove('fixed');
      toTop.style.display = 'none';
    }
    
   
  } else if(headerHeight < currentScroll) {
    headerNav.classList.add('fixed');
    headerNav.style.top = "0";
    toTop.style.display = 'inline-flex';
  } 
  prevScroll = currentScroll
}

toTop.addEventListener('click', function () {
  document.documentElement.scrollTop = 0;
})


const accordionItemHeaders = document.querySelectorAll(".accordion__title");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    const currentlyActiveAccordionItemHeader = document.querySelector(".accordion__title.active");
    if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }

  });
});