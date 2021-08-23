
// Define Global Variables
const sections =  document.querySelectorAll("section");
const naveUl=document.getElementById("navbar__list");
const navBar= document.querySelector(".navbar__menu") ;
// creat the function of the list iteam work
function makeSectionLi(){
    for ( const section of sections) {
    const sectionId   = section.getAttribute("id");
    const secstionName = section.dataset.nav;
    const li =document.createElement("li");
    li.innerHTML = `<a class="menu__link" href="#${sectionId}">${secstionName}</a>` ;
    naveUl.appendChild(li) ;
    }
}
// make  all page move smooth
const html = document.querySelector("html");
html.style.scrollBehavior="smooth";
// call  the function of the  add  list iteam
makeSectionLi();
// add style to 
navBar.style.padding= "18px";  
// add button function TO MAKE button display none on the top of the bage 
// and go up on page
const upButton = document.getElementById("up");
window.onscroll=function(){
    "use strict";
    if(window.pageYOffset>=401){
        upButton.style.display="block"; 
    }if (window.pageYOffset<=400) {
        upButton.style.display="none" ;
    };
};
upButton.onclick  =function(){
    window.scrollTo(0,0);
};

//option  apperance of class in the viewport
const opthion ={
threshold: 0.67
};
/*make function  by IntersectionObserver to active the class of hiligth 
in nav bar when the section appears in the viewport
and active the section background  by add class your-active-class to
the section when section in view port
*/ 
const activeSectionAndNanBar =  function () {
    const observe = new IntersectionObserver(function ( items ){
    // creat loop 
        items.forEach(item => {
            // make elmet name navLi to target the  li 
            const navLi = document.querySelector(`a[href="#${item.target.id}"]`);
            //add class your-active-class to the section when a section 
            //in viewport  and navLi
                if (item.isIntersecting) {
                item.target.classList.add("your-active-class");
            navLi.classList.add("hiligth");
            // remove  active class from other element
            }else  { (!item.isIntersecting)
                item.target.classList.remove("your-active-class");
                navLi.classList.remove("hiligth");
            }
        });
    },opthion);
            // make return  to  observe ( make  loop for all sections to see all  section )
    return document.querySelectorAll("section").forEach(section =>
        bserve.observe(section)
    );   
};
// call function  of add class 
activeSectionAndNanBar();