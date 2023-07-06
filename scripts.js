
const key = "7be2d43dcea420d9e821cc7fc88673b6"


async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    colocarDadosNaTela(dados)
}

function colocarDadosNaTela(dados) {
    console.log(dados)

    const cidade = document.querySelector(".cidade")
    cidade.innerHTML = "Tempo em " + dados.name

    const temp = document.querySelector(".temp")
    temp.innerHTML = Math.floor(dados.main.temp) + "°C"

    const nuvem = document.querySelector(".texto-previsao")
    nuvem.innerHTML = dados.weather[0].description

    const umidade = document.querySelector(".umidade")
    umidade.innerHTML = "Umidade " + dados.main.humidity + "%"

    const iconeNuvem = document.querySelector(".img-previsao")
    iconeNuvem.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}


function cliqueiNoBotao() {
    const input = document.querySelector('.input-cidade')
    const btn = document.querySelector('.botao-buscar')
    console.log(input)
    input.addEventListener("keypress", (e) => {
        if (e.charCode === 13) {
            buscarCidade(input.value)
        }
    })
    btn.addEventListener("click", () => buscarCidade(input.value))
}


cliqueiNoBotao()

// function click() {
//     const input = document.querySelector('.input-cidade')
//     const btn = document.querySelector('.botao-buscar')
//     btn.addEventListener('click', () => {
//         findCity(input.value)
//     })

//     input.addEventListener('keypress', (key) => {
//         if(key.charCode === 13) {
//             findCity(input.value)
//         }
//     })
// }

// click();