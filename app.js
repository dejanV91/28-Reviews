import people from "./data.js";

const container = document.querySelector(".container");
const slider = document.querySelector(".slider");
const nextBtn = document.getElementById("next");
const previousBtn = document.getElementById("previous");

// if has 1 review
if (people.length === 1) {
    nextBtn.parentNode.style.display = "none";
    previousBtn.parentNode.style.display = "none";
}

slider.innerHTML = people
    .map((item) => {
        const {img, name, job, text} = item;
        return `<article class="content-center">
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

nextBtn.addEventListener("click", () => {
    slider.style.transform = "translateX(-100%)";
});

