

// const kelvin = 293;
// const celsius = kelvin - 273;
// let fahrenheit = celsius * (9 / 5) + 32;
// fahrenheit = Math.floor(fahrenheit);
// console.log(`The temprature is ${fahrenheit} degrees Fahrenheit.`);

// // Current temperature in kelvin degrees
// const kelvin = 293;
// // Converting kelvin to celsius
// const celsius = kelvin - 273;
// //Convert celsius to fahrenheit
// let fahreheit = celsius * (9 / 5) + 32;
// // Round down fahrenheit
// fahrenheit = Math.floor(fahrenheit);

// console.log(`The temperature is ${fahrenheit} degrees
// Fahrenheit.`);



const form1 = document.getElementById('form1');

form1.addEventListener('submit', (e)=>{
    e.preventDefault();
    const zipCodes = e.path[0][0].value
    loadData(zipCodes)
});

const weatherApi = async (zipCodes)=>{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCodes}&appid=07f7524b019234e617ef258745b15630&units=imperial`)
    const data = await res.json()
    console.log(data)
    return data
};

const loadData = async (zipCodes)=>{
    const data = await weatherApi(zipCodes)
    const weather = [data]
    weather.map(getDataWeather)
};

const getDataWeather = async (weather) => {
    const card = document.createElement('div')
    card.innerHTML = 
    `
    <main class="card">
        <div style="">
            <div class="card-body">
                <h5 class="card-title"><strong>City: ${weather.name}</strong></h5>
                <em>Forecast Description for: ${weather.weather[0].description}</em>
                <br>
                Current Temp: ${weather.main.temp.toPrecision(3)}°F
                <br>
                Low Temp: ${weather.main.temp_min.toPrecision(3)}°F
                <br>
                High Temp: ${weather.main.temp_max.toPrecision(3)}°F
                <br>
                Feels like: ${weather.main.feels_like.toPrecision(3)}°F
                <br>
                Humidity: ${weather.main.humidity}%  
            </div>
        </div>
    </main>
    `
    document.body.append(card)

};