function g (n){
    fetch("http://api.openweathermap.org/data/2.5/weather?q="+n+"&appid=f42a709ce51d52db6ba36b77d5eacfa5")
.then(function (resp){
    return resp.json();
})
.then(function (data){
    console.log(data);
    document.getElementById("t").innerHTML="temp:"+Math.round(data.main.temp-273)+'&deg;';
    document.getElementById("n").innerHTML=data.name
    document.getElementById("w").innerHTML=data.weather[0].description
    document.getElementById("sp").innerHTML="speed: "+data.wind.speed
    document.getElementById("deg").innerHTML="deg:"+data.wind.deg
    document.getElementById("li1").innerHTML="visibility: "+data.visibility
    document.getElementById("li2").innerHTML="clouds: "+data.clouds.all
    document.getElementById("li3").innerHTML="feels like temp: "+Math.round(data.main.feels_like-273)+'&deg;'
    document.getElementById("li4").innerHTML="temp min: "+Math.round(data.main.temp_min-273)+'&deg;'
    document.getElementById("li5").innerHTML="temp max: "+Math.round(data.main.temp_max-273)+'&deg;'
    document.getElementById("li6").innerHTML="cod: "+data.cod;
    let r = new Date(data.sys.sunrise*1000)
    let r2 = new Date(data.sys.sunset*1000)
    console.log();
    document.getElementById("li9").innerHTML="sunrise: "+con(r.getHours())+":"+con(r.getMinutes())+":"+con(r.getSeconds())
    document.getElementById("li10").innerHTML="sunset: "+con(r2.getHours())+":"+con(r2.getMinutes())+":"+con(r2.getSeconds())
    console.log(r2.getHours()+":"+r2.getMinutes()+":"+r2.getSeconds());
    document.getElementById("li7").innerHTML="pressure: "+data.main.pressure;
    document.getElementById("li8").innerHTML="humidity: "+data.main.humidity;
    document.getElementById("im").setAttribute("src","https://openweathermap.org/img/wn/"+data.weather[0].icon+"@4x.png")
})
}
function con (num){
if (num<10){
    num="0"+num
}
return num;
}