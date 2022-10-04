function loadAbout() {
    const main = document.querySelector(".main")
    main.textContent = ''
    main.appendChild(createAbout())
}

function createAbout() {
    const about = document.createElement("div")
    about.classList.add("about")

    const name = document.createElement("p")
    name.classList.add("text-center")
    name.innerHTML = "<img src=\"./fotocv.png\" class=\"img-fluid\" alt=\"Curriculum Vitae\">"
    about.appendChild(name)
    return about
}

export default loadAbout