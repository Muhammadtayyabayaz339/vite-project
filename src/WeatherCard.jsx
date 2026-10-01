import React from "react";

/* Weather Box */
    const WeatherCard = ({weather,city,loading,fetchWeather,setCity})=>{
        return(    
        <div style={{padding:'10px'}}>
            <h2 style={{color:'white',fontStyle:'italic',fontWeight:'bold'}}>🌤️ Weather in {city}</h2>
        <input type="text" placeholder="Enter City Name" value={city} onChange={(e)=>setCity(e.target.value)}
            style={{backgroundColor:'#2E2E2E',color:'white',padding:'10px',width:'200px',marginRight:'10px',
            border:'1.5px solid green',borderRadius:'10px'}}/>
        <button onClick={fetchWeather} style={{color:'white',background:'green',padding:'10px 20px',fontSize:'15px',fontStyle:'italic',
            fontWeight:'bold',cursor:'pointer',border:'1.5px solid green',borderRadius:'10px'}} >Get Weather</button>
            {loading?<p>Loading...</p>: weather &&(
            //  ℃ °F   
            <div style={{color:'grey'}}>    
                <p>Temp: {weather.main.temp}℃</p>
                <p>Condition: {weather.weather[0].description}</p>
                <p>Humidity: {weather.main.humidity}%</p>
                <p>Wind: {weather.wind.speed}km/h</p>
                <p>Feels like: {weather.main.feels_like}℃</p>
            </div>
            )}
        </div>
        );
    };
export default WeatherCard;    
