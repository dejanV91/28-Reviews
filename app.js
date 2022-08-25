import people from "./data.js";

const container = document.querySelector(".container");
const nextBtn = document.getElementById("next");
const previousBtn = document.getElementById("previous");
container.innerHTML = people
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
        container.style.transform = "translateX(-50%)";
    });

