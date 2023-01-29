const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6e29dbd264msh08c688ccf01c97fp15e021jsn5aa520da1593',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
    const getWeather=(city)=>{
     cityName.innerHTML=city
        
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            
            
            console.log(response)
            
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()  
    getWeather(city.value)
})
getWeather("Bhopal");
   

// for city = Delhi

const getcityWeather=(city1)=>{
        
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city1, options)
        .then(response => response.json())
        .then((response) => {
            
            
            console.log(response)
            
        cloud_pct1.innerHTML = response.cloud_pct
        temp1.innerHTML = response.temp
        feels_like1.innerHTML = response.feels_like
        humidity1.innerHTML = response.humidity
        Min_temp1.innerHTML = response.min_temp
        Max_temp1.innerHTML = response.max_temp
        wind_speed1.innerHTML = response.wind_speed
        Sunrise1.innerHTML = response.sunrise
        Sunset1.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}

getcityWeather("Delhi");

//  for city=mumbai

const getWeatherofmumbai=(city2)=>{
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city2, options)
    .then(response => response.json())
        .then((response) => {
            
            
            console.log(response)
            
        cloud_pct2.innerHTML = response.cloud_pct
        temp21.innerHTML = response.temp
        feels_like2.innerHTML = response.feels_like
        humidity21.innerHTML = response.humidity
        Min_temp2.innerHTML = response.min_temp
        Max_temp2.innerHTML = response.max_temp
        wind_speed21.innerHTML = response.wind_speed
        Sunrise2.innerHTML = response.sunrise
        Sunset2.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}

getWeatherofmumbai("mumbai");

//  for city=pune

const getWeatherofpune=(city3)=>{
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city3, options)
    .then(response => response.json())
    .then((response) => {
            
            
            console.log(response)
            
        cloud_pct3.innerHTML = response.cloud_pct
        temp3.innerHTML = response.temp
        feels_like3.innerHTML = response.feels_like
        humidity3.innerHTML = response.humidity
        Min_temp3.innerHTML = response.min_temp
        Max_temp3.innerHTML = response.max_temp
        wind_speed3.innerHTML = response.wind_speed
        Sunrise3.innerHTML = response.sunrise
        Sunset3.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}

getWeatherofpune("Pune");

//  for city=chennai

const getWeatherofchennai=(city4)=>{
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city4, options)
    .then(response => response.json())
    .then((response) => {
            
            
            console.log(response)
            
        cloud_pct4.innerHTML = response.cloud_pct
        temp4.innerHTML = response.temp
        feels_like4.innerHTML = response.feels_like
        humidity4.innerHTML = response.humidity
        Min_temp4.innerHTML = response.min_temp
        Max_temp4.innerHTML = response.max_temp
        wind_speed4.innerHTML = response.wind_speed
        Sunrise4.innerHTML = response.sunrise
        Sunset4.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}
getWeatherofchennai("chennai");

//  for city=Kolkata

const getWeatherofkolkata=(city5)=>{
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city5, options)
    .then(response => response.json())
    .then((response) => {
            
            
            console.log(response)
            
        cloud_pct5.innerHTML = response.cloud_pct
        temp5.innerHTML = response.temp
        feels_like5.innerHTML = response.feels_like
        humidity5.innerHTML = response.humidity
        Min_temp5.innerHTML = response.min_temp
        Max_temp5.innerHTML = response.max_temp
        wind_speed5.innerHTML = response.wind_speed
        Sunrise5.innerHTML = response.sunrise
        Sunset5.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}
getWeatherofkolkata("Kolkata");