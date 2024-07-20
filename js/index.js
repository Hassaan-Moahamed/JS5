var FindINput = document.getElementById('FindINput')
var FindINput = document.getElementById('FindINput');
var Findbtn = document.getElementById('Findbtn')
var toDayWeek = document.getElementById('toDayWeek');
var toDayNumMonth = document.getElementById('toDayNumMonth');
var nameCountry = document.getElementById('nameCountry');
var tempTD = document.getElementById('tempTD');
var stateOfWPicTD = document.getElementById('stateOfWPicTD');
var stateOfWTD = document.getElementById('stateOfWTD');
var umberellaTd = document.getElementById('umberellaTd');
var windTD = document.getElementById('windTD');
var compassTD = document.getElementById('compassTD');
//nextDay
var tomDayWeek = document.getElementById('tomDayWeek');
var tomPic = document.getElementById('tomPic');
var MaxTempTom = document.getElementById('MaxTempTom');
var MinTempTom = document.getElementById('MinTempTom');
var stateOfWTom = document.getElementById('stateOfWTom');
//next2day
var tomNextDayWeek = document.getElementById('tomNextDayWeek');
var tomNextPic = document.getElementById('tomNextPic');
var MaxTempTomNext = document.getElementById('MaxTempTomNext');
var MinTempTomNext = document.getElementById('MinTempTomNext');
var stateOfWTomNext = document.getElementById('stateOfWTomNext');

FindINput.addEventListener('input', function (e) {
    getApi(e.target.value)
})

Findbtn.addEventListener('click', function (e) {
    e.preventDefault();
})
async function getApi(countryName) {
    var x = await fetch(`https://api.weatherapi.com/v1/forecast.json?q=${countryName}&days=3&key=823b584f86c94789962190331241907`);
    var data = await x.json();
    console.log(data);
    displayWeather(data);
}
getApi('cairo');
function displayWeather(data) {
    var cal = new Date(data.forecast.forecastday[0].date)
    var calTommorrow = new Date(data.forecast.forecastday[1].date)
    var calAftertomorrow = new Date(data.forecast.forecastday[2].date)
    //TODAY
    toDayWeek.innerHTML = cal.toLocaleString('en-us', { weekday: 'long' })
    toDayNumMonth.innerHTML = `${cal.getDate()} ${cal.toLocaleString('en-us', { month: 'long' })}`;
    nameCountry.innerHTML = data.location.name;
    tempTD.innerHTML = data.current.temp_c
    stateOfWPicTD.setAttribute('src', data.current.condition.icon)
    stateOfWTD.innerHTML = data.forecast.forecastday[0].day.condition.text;
    umberellaTd.innerHTML = data.current.humidity;
    compassTD.innerHTML = data.current.wind_dir;
    windTD.innerHTML = data.current.wind_kph;
    //nextDay
    tomDayWeek.innerHTML = calTommorrow.toLocaleString('en-us', { weekday: 'long' });
    tomPic.setAttribute('src', data.forecast.forecastday[1].day.condition.icon);
    MaxTempTom.innerHTML = data.forecast.forecastday[1].day.maxtemp_c;
    MinTempTom.innerHTML = data.forecast.forecastday[1].day.mintemp_c;
    stateOfWTom.innerHTML = data.forecast.forecastday[1].day.condition.text;
    //next2day
    tomNextDayWeek.innerHTML = calAftertomorrow.toLocaleString('en-us', { weekday: 'long' });
    tomNextPic.setAttribute('src', data.forecast.forecastday[2].day.condition.icon)
    MaxTempTomNext.innerHTML = data.forecast.forecastday[2].day.maxtemp_c;
    MinTempTomNext.innerHTML = data.forecast.forecastday[2].day.mintemp_c;
    stateOfWTomNext.innerHTML = data.forecast.forecastday[2].day.condition.text;
}