const mapa = [

    "WWWWWWWWWWWWWWWWWWWWW",
    "W         WWWWW W W W",
    "W WWWWWWW     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWW WW W W   W W W W",
    "WWWW WW W W WWWWW W W",
    "              W      ",
    "WWWWWWWWWWWWWWWWWWWWW"
];

const conteudo = [];
const jogador = document.getElementById("jogador")
const main = document.querySelector("main");



for (let linhaInicio in mapa) {
    const linhaDoMapa = mapa[linhaInicio];

    const elementoLinha = document.createElement("div")
    elementoLinha.classList.add("linha")
    main.appendChild(elementoLinha)
    conteudo[linhaInicio] = [];



    for (let blocodeInicio in linhaDoMapa) {
        const tipoDeBloco = linhaDoMapa[blocodeInicio];

        const elementoDeBloco = document.createElement("div")
        elementoDeBloco.classList.add("bloco")
        elementoLinha.appendChild(elementoDeBloco)


        conteudo[linhaInicio][blocodeInicio] = elementoDeBloco
        elementoDeBloco.dataset.linhaInicio = linhaInicio
        elementoDeBloco.dataset.blocodeInicio = blocodeInicio

        if (tipoDeBloco === "S") {
            elementoDeBloco.appendChild(jogador);
        }
        if (tipoDeBloco === "W") {
            elementoDeBloco.classList.add("parede")
        }
        if (tipoDeBloco === "F") {
            elementoDeBloco.classList.add("final")
        }
        if (tipoDeBloco === "O") {
            elementoDeBloco.classList.add("saida")
        }

    }
}

console.log(conteudo)


document.addEventListener('keydown', (event) => {
    if (event.key.indexOf("Arrow") === -1) return null


    const linhaAtual = Number(jogador.parentElement.dataset.linhaInicio)
    const blocoAtual = Number(jogador.parentElement.dataset.blocodeInicio)

    let alvoMovimento = undefined

    if (event.key === "ArrowRight") {
        console.log("right")

        alvoMovimento = conteudo[linhaAtual][blocoAtual + 1]

    } else if (event.key === "ArrowUp") {
        console.log("up")

        alvoMovimento = conteudo[linhaAtual - 1][blocoAtual]

    } else if (event.key === "ArrowDown") {
        console.log("down")

        alvoMovimento = conteudo[linhaAtual + 1][blocoAtual]

    } else if (event.key === "ArrowLeft") {
        console.log("left")

        alvoMovimento = conteudo[linhaAtual][blocoAtual - 1]

    }

    if (alvoMovimento) {

        if (alvoMovimento.className.indexOf("parede") === -1) {
            alvoMovimento.appendChild(jogador)
        }

        if (alvoMovimento.className.indexOf("final") !== -1) {
            console.log("saida")
            let vitoria = document.getElementById('vitoria').innerHTML = ('<p>Você venceu!</p>');

        }
    }

});