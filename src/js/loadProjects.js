function loadProjects() {
    const main = document.querySelector(".main")
    main.textContent = ''
    main.appendChild(createProjects())
}

function createProjects() {
    const project = document.createElement("div")
    project.classList.add("projects")
    const text = document.createElement("p")
    text.classList.add("text-center")
    text.textContent = "Hier vind je een aantal van mijn projecten"
    project.appendChild(text)

    project.appendChild(createCar());

    return project
}

function createCar(){
    const carousel = document.createElement("div")
    carousel.classList.add("carousel", "slide")
    carousel.setAttribute("id", "carousel")
    carousel.setAttribute("data-bs-ride", "carousel")
    

    // lines showing how many there are and to select
    const indicators = document.createElement("div")
    indicators.classList.add("carousel-indicators")
    carousel.appendChild(indicators)

    const button1 = document.createElement("button")
    button1.classList.add("active", "carBtn")
    button1.setAttribute("type", "button")
    button1.setAttribute("data-bs-target", "#carousel")
    button1.setAttribute("data-bs-slide-to", "0")

    const button2 = document.createElement("button")
    button2.classList.add("carBtn")
    button2.setAttribute("type", "button")
    button2.setAttribute("data-bs-target", "#carousel")
    button2.setAttribute("data-bs-slide-to", "1")

    indicators.appendChild(button1)
    indicators.appendChild(button2)



    // the actual slideshow

    const innerCar = document.createElement("div")
    innerCar.classList.add("carousel-inner")
    carousel.appendChild(innerCar)

    const tictac = document.createElement("div")
    tictac.classList.add("carousel-item", "active")
    innerCar.appendChild(tictac)


    const ticLink = document.createElement("a")
    ticLink.setAttribute("href", "https://flos06.github.io/Odin-project/tictactoe/index.html")
    tictac.appendChild(ticLink)
    const ticImage = document.createElement("img")
    ticImage.classList.add("d-block")
    ticImage.setAttribute("src", "./tictactoe.png")
    ticImage.setAttribute("alt", "Tic Tac Toe")
    ticImage.setAttribute("style", "height:300px")
    ticLink.appendChild(ticImage)

    // add library project
    const library = document.createElement("div")
    library.classList.add("carousel-item")
    innerCar.appendChild(library)


    const libLink = document.createElement("a")
    libLink.setAttribute("href", "https://flos06.github.io/Odin-project/library/index.html")
    library.appendChild(libLink)

    const libImage = document.createElement("img")
    libImage.classList.add("d-block")
    libImage.setAttribute("src", "./library.jpg")
    libImage.setAttribute("alt", "Library")
    libImage.setAttribute("height", "300px")
    libLink.appendChild(libImage)


    // left right arrows is el of carousel

    const left = document.createElement("button")
    left.classList.add("carousel-control-prev")
    left.setAttribute("type", "button")
    left.setAttribute("data-bs-target", "#carousel")
    left.setAttribute("data-bs-slide", "prev")

    carousel.appendChild(left)

    const spanL = document.createElement("span")
    spanL.classList.add("carousel-control-prev-icon")
    left.appendChild(spanL)

    const right = document.createElement("button")
    right.classList.add("carousel-control-next")
    right.setAttribute("type", "button")
    right.setAttribute("data-bs-target", "#carousel")
    right.setAttribute("data-bs-slide", "next")

    carousel.appendChild(right)

    const spanR = document.createElement("span")
    spanR.classList.add("carousel-control-next-icon")
    right.appendChild(spanR)


    return carousel
}

export default loadProjects