import { useState , useEffect,Select } from 'react'
import './App.css'

function Weather() {
  var [loading,setLoading]= useState(false);
  var [temp,setTemp] = useState("")
  var [cities,setCities] = useState(
    [
      {
        name:"Lahore",
        latitude:31.5204,
        longitude:74.3587
      },
       {
        name:"Multan",
        latitude:30.1968,
        longitude:71.4782
      },
      {
        name:"Karachi",
        latitude:24.8608,
        longitude:67.0104
      },
      {
        name:"Fasilabad",
        latitude:31.4187,
        longitude:73.0791
      },
      {
        name:"Islmabad",
        latitude:33.6844,
        longitude:73.0479
      }
    ]
  )

  var [lat,setLat] = useState(cities[0].latitude)
  var [lang,setLang] = useState(cities[0].longitude)

  useEffect(()=>{
    setLoading(true);
    fetchAPI()
  },[])

  function fetchAPI(){

  fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lang}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`)
  .then(response => response.json())
  .then(data => {
    setLoading(false);
    if(data != null){
    setTemp(data.current.temperature_2m + " " + data.current_units.temperature_2m)
    console.log(data.current.temperature_2m + " " + data.current_units.temperature_2m) ;
    }
  });
  }
  
  return (
    <div>
    {loading ?
       <div>
       <h1>Loading...</h1>
      </div> 
      : 
    <div style={{display:'flex',flexDirectionL:'row'}}>
      <h1>{temp}</h1>

    <select onChange={(e)=>{
     
       const id = e.target.value
      console.log(id)
      const city = cities.find(
        city => city.name == id
      );
      console.log(city);

      setLat(city.latitude)
      setLang(city.longitude)

     }}>
     {cities.map((city)=>(
      <option value={city.name}>
        {city.name}
      </option>
     ))}
    
      </select>

      <button onClick={()=>{
       fetchAPI()
      }}>Fetch Weather</button>
    </div>
   
    }
    </div>
  )
}

export default Weather