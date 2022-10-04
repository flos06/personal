function loadHome() {
    const main = document.querySelector(".main")
    main.textContent = ''
    main.appendChild(createHome())
}

function createHome() {
    const home = document.createElement("div")
    home.classList.add("home")

    const info = document.createElement("p")
    info.classList.add("text-center")



    info.innerHTML = `<img src=\"./florishoofdd.png\" class=\"img-fluid\" alt=\"Floris de Regt\">
    Welkom op mijn persoonlijke site. 
    Mijn naam is Floris de Regt en ik ben geboren op 12 Mei 1993 in Hoorn.
    Ik ben nu al een tijdje serieus bezig met het online programma The Odin Project en ook met een online vak van de Universiteit van Helsinki over Computer Science en dan met name via de taal Python.
    Tijdens de corona pandemie ben ik serieus begonnen met programmeren en web development omdat ik niet stil wilde zitten. Ik was op dat moment nog in opleiding tot Piloot bij Transavia Airlines.
    Ik heb gemerkt dat ik het programmeren super leuk vindt en wil die zeker naast mijn huidige baan blijven doen. En het liefste zou ik er zelfs carriére in maken.
    Deze site is op dit moment een ruwe opzet, maar ik verwacht hem in de toekomst uit te gaan breiden.`

    home.appendChild(info)

    const contact = document.createElement("div")
    contact.classList.add("fixed-bottom")
    contact.textContent = "Mijn github is: https://github.com/flos06. Je kunt contact met mij opnemen via floriset@gmail.com"
    return home;
}


export default loadHome