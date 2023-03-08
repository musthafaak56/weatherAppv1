// fetch(`http://api.openweathermap.org/data/2.5/weather?q=kerala&appid=186d56a8a3f3d38131a7d11deb654f99`)
// https://api.openweathermap.org/data/2.5/weather?q=kerala&units=metric&appid=186d56a8a3f3d38131a7d11deb654f99



function fetchApi(){

    cityname=cityInput.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=186d56a8a3f3d38131a7d11deb654f99`)
    .then(wDet=>wDet.json())
    .then(passVar=>displayData(passVar))
    .catch(error=>{alert(error)})


function displayData(weatherDetails)
{
    wDescrition=weatherDetails.weather[0].description;
    wTemp=weatherDetails.main.temp;
    wFeelslike=weatherDetails.main.feels_like;
    wTempmin=weatherDetails.main.temp_min;
    wTempmax=weatherDetails.main.temp_max;
    wHumidity=weatherDetails.main.humidity;
    wWindspeed=weatherDetails.wind.speed;
    wName=weatherDetails.name;
    
    console.log(`Name=`,wName);


    innerElements=`<h2 class="hd1 mt-4">Weather in ${wName}</h2>
                   <h5>Temperature: ${wTemp}°C</h5>
                   <h5>Feels Like: ${wFeelslike}°C</h5>
                   <h5>Humidity: ${wHumidity}</h5>
                   <h5>Wind Speed: ${wWindspeed}</h5>`

    emptyDiv.innerHTML=innerElements;

    if(wTemp>30)
    {
        document.body.style.backgroundImage = "url('./images/fire.jpg')";
        const footer = document.querySelector(".footer1");
        const text = footer.querySelectorAll(".text-muted");

        text.forEach((element) => {
        element.style.color = "red";
});

    }
    else if(wTemp<30&&wTemp>20)
    {
        document.body.style.backgroundImage = "url('./images/warm.jpg')";
    }
    else if(wTemp<20&&wTemp>10)
    {
        document.body.style.backgroundImage = "url('./images/foggy.jpg')";
    }
    else if(wTemp<10&&wTemp>1)
    {
        document.body.style.backgroundImage = "url('./images/snowflake.jpg')";
    }
    else if(wTemp<1&&wTemp>-10)
    {
        document.body.style.backgroundImage = "url('./images/icy.jpg')";
    }
    else if(wTemp<-10)
    {
        document.body.style.backgroundImage = "url('./images/colder.jpg')";
    }


}

}