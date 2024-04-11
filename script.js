const inputField = document.querySelector('.inputField');
const searchButton = document.querySelector('.searchButton');


const apiKey = '5698061c0b1946aa86f92628242101';

searchButton.addEventListener('click', apiResponce);

async function apiResponce(){
    if(inputField.value === ''){
        alert("Please Enter Location.");
    }else{
        let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputField.value}`;
        let responce = await fetch(url);
        let data = await responce.json();
        console.log(data);
        document.querySelector('.icon').setAttribute('src', data.current.condition.icon);
        document.querySelector('.placeText').innerHTML = data.location.name;
        document.querySelector('.tempratureText').innerHTML = data.current.temp_c;
        document.querySelector('.humidityNumber').innerHTML = `${data.current.humidity} %`;
        document.querySelector('.windSpeedNumber').innerHTML = `${data.current.wind_kph} kp/h`;
    }
}

apiResponce();