const key = "40c225f829e0d8eaf7bcefc5e3ff9afd"

function putTheDataOnTheScreen(given){
    console.log(given)
    document.querySelector(".city").innerHTML = " Tempo em " + given.name
    document.querySelector(".temp").innerHTML = Math.floor(given.main.temp) + "°C"
    document.querySelector(".text-forecast").innerHTML = given.weather[0].description
    document.querySelector(".humidity").innerHTML = "Umidade: " + given.main.humidity + "%"
    document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${given.weather[0].icon}.png`

}

async function SearchCity(city){

    const given = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    putTheDataOnTheScreen(given)
}

function clickOnTheButton() {
    const city = document.querySelector(".input-city").value

    SearchCity(city)
}