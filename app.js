const { response } = require("express");
const express = require("express");
const https = require("https");


const app = express();


app.get("/", function(req, res) {

    const = query
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=220e5fd2168d2952ef9ba558963fb1a6&units=metric"
    https.get(url, function (reponse) {

        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.feels__like
            
            const weatherDescriptioon = weatherData.weather[0].description
            res.write("<p>The weather iss currently " + weatherDescriptioon + "</p>");
            res.write("The temperature in Lagos is " + temp + "Degree Celsius.");
            res.send()

            // console.log(temp);
            // console.log(weatherData);
        })
    })
    
    
})



app.listen(4000, function(){
    console.log("Server is running on port 500");
})
