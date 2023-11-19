// navbar section 
let collapseButton=document.querySelector(".collapse-button");
let collapseMenu=document.querySelectorAll(".navbar .collapse")
// console.log(collapseMenu);
collapseButton.addEventListener("click",()=>{
    collapseMenu.forEach((menu)=>{
      menu.classList.toggle("showmenu");
    })
})

// nav-link 
let navLinks=document.querySelectorAll(".nav-link");
let sectionEls=document.querySelectorAll(".section");

// adding active class
navLinks.forEach((link)=>{
   link.addEventListener("click",(e)=>{
   
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
})
})
// adding active class on scroll
let currentSection="home";
window.addEventListener("scroll",()=>{
    sectionEls.forEach((section)=>{
       if(window.scrollY>=(section.offsetTop)-section.clientHeight/2){
        currentSection=section.id;
       }
    })
    navLinks.forEach((link)=>{
      if(link.href.includes(currentSection)){
        document.querySelector(".active").classList.remove("active");
        link.classList.add("active");
      }
    })
})

// type writer effect on name



// fade
let fadeEl = document.querySelector(".fade");
let scrolled = false;
window.addEventListener("scroll", () => {
    if (!scrolled) {

        fadeEl.style.opacity = "0.3";
        scrolled = true;
    }


})











// filter
let gridEl = document.querySelector(".grid");
// console.log(gridEl);
let filterItems = document.querySelector(".filter-items");

let projects = document.querySelectorAll(".project");

// let technologies = document.querySelectorAll(".technology");
// console.log(technologies.forEach(element => {
//     console.log(element.innerText);
// }));





filterItems.addEventListener("click", (e) => {
    // remove fade
    console.log("clicked");
    fadeEl.style.opacity = "0";
    // added active class
    document.querySelector(".active-work").classList.remove("active-work");
    e.target.classList.add("active-work");
    // reorganize grid
    console.log(e.target.innerText);
    if (e.target.innerText === "All") {
        projects.forEach((project) => {
            project.style.display = "block";
        })
    } else if (e.target.innerText === "Java script") {
        projects[0].style.display = "block";
        projects[2].style.display = "block";
        projects[4].style.display = "block";
        projects[1].style.display = "none";
        projects[3].style.display = "none";
        projects[5].style.display = "none";
    } else if (e.target.innerText === "Html & Css") {
        projects[1].style.display = "block";
        projects[3].style.display = "block";
        projects[5].style.display = "block";
        projects[0].style.display = "none";
        projects[2].style.display = "none";
        projects[4].style.display = "none";
    }

})
let title=document.querySelector(".title");
console.log(title);
let myName= "nahid hossain";
let index=1;

let typeWriter=()=>{
    let newTitle=myName.slice(0,index);
    title.innerText = newTitle;
    index > myName.length ? index = 1 : index++ ;

    setTimeout(()=>typeWriter(),600);
   
}
typeWriter();