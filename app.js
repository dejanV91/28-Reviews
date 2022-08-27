import people from "./data.js";

const slider = document.querySelector(".slider");
const nextBtn = document.getElementById("next");
const previousBtn = document.getElementById("previous");

// if has 1 review
if (people.length === 1) {
    nextBtn.parentNode.style.display = "none";
    previousBtn.parentNode.style.display = "none";
}
// if has 2 reviews
let peoples = [...people];
if (people.length === 2) {
    peoples = [...people, ...people];
    console.log(peoples);
}


slider.innerHTML = peoples
    .map((item, index) => {
        const {img, name, job, text} = item;
        let position = "next";
        if (index === 0) {
            position = "active";
        }
        if (index === peoples.length-1) {
            position = "last";
        }
        if(people.length <= 1){
            position = "active";
        }
      
        return `<article class="content-center ${position}">
                    <div class="image-div">
                        <img src="${img}" alt="${name}">
                    </div>
                    <h4 class="name-person">${name}</h4>
                    <h4 class="jobs-div">${job}</h4>
                    <p class="text">${text}</p>
                    <div class="icon-section">
                        <span class="material-symbols-outlined">format_quote</span>
                    </div>
                </article>`
    }).join("");

const sliderStart = (type) => {
    const active = document.querySelector(".active");
    const last = document.querySelector(".last");
    let next = active.nextElementSibling;
    if (!next) {
       next = slider.firstElementChild;
    }
    active.classList.remove("active");
    last.classList.remove("last");
    next.classList.remove("next");

    if (type === "prev") {
        active.classList.add("next");
        last.classList.add("active");
        next = last.previousElementSibling;
        if(!next){
            next = slider.lastElementChild;
        }
        next.classList.remove("next");
        next.classList.add("last");
        return 
    }
    active.classList.add("last");
    last.classList.add("next");
    next.classList.add("active");
}

nextBtn.addEventListener("click", () => {
    sliderStart();
});
previousBtn.addEventListener("click", () => {
    sliderStart("prev");
});

// nextBtn.addEventListener("click", () => {
//     slider.style.transform = "translateX(-100%)";
// });

