import{useState, useEffect} from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import NewsCard from "./NewsCard";

function App(){
    const NEWS_KEY=import.meta.env.VITE_NEWS_API_KEY;
    const WEATHER_KEY=import.meta.env.VITE_WEATHER_API_KEY;

    const[city, setCity]=useState("Multan");
    const[weather, setWeather]=useState(null);
    const[weatherLoading, setWeatherLoading]=useState(false);
    const[news, setNews]=useState([]);  
    const[newsQuery, setNewsQuery]=useState('');
    const[category, setCategory]=useState("general");
    const[newsLoading, setNewsLoading]=useState(false);

    useEffect(()=>{
        document.body.style.backgroundColor='#181A1E';
        document.body.style.margin='0';
        document.documentElement.style.backgroundColor='#181A1E';
    },[]);
     
    // Weather fetch
    const fetchWeather=async()=>{
        setWeatherLoading(true);
        try{
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}&units=metric`);
        setWeather(res.data);
        }catch(error){
            alert("City not found")
        }
        setWeatherLoading(false);
        };       
        useEffect(()=>{
        fetchWeather();
        },[]);

    // News fetch
    const fetchNews=async(cat=category)=>{
        setNewsLoading(true);
        try{
            let url="";
            if(cat ==="general"){
                url=`/api/top-headlines?country=us&sortBy=publishedAt&language=en&pageSize=6&apiKey=${NEWS_KEY}`;
                    // url=`/api/everything?q=uk+news&sortBy=publishedAt&language=en&pageSize=6&apiKey=${NEWS_KEY}`;
            }else if(["health","science","technology","business","sports"].includes(cat)){
                url=`/api/top-headlines?category=${cat}&country=us&pageSize=6&apiKey=${NEWS_KEY}`;
                    // url=`/api/everything?q=${cat}+uk&sortBy=publishedAt&language=en&pageSize=6&apiKey=${NEWS_KEY}`;
            }else{
                url=`/api/everything?q=${cat}&sortBy=publishedAt&language=en&pageSize=6&apiKey=${NEWS_KEY}`;
            }
    const res=await axios.get(url);
    console.log("API Data",res.data.articles);
        
        setNews(res.data.articles);
        setCategory(cat);
        }catch(error){
        console.log("NEWS ERROR:",error);
        }
        setNewsLoading(false);
        };
        useEffect(()=>{
        fetchNews("general");
        },[]);
        
    return(
        <div style={{padding:'20px',maxWidth:'1400px',margin:'0 auto'}}>
        <h1 style={{color:'green',fontStyle:'italic',fontWeight:'bold',textAlign:'center',whiteSpace:'nowrap',padding:'0 15px'}}>🌤️ Weather & News Dashboard 📰</h1>
        <WeatherCard weather={weather} city={city} loading={weatherLoading} fetchWeather={fetchWeather} setCity={setCity}/>
        <NewsCard news={news} newsQuery={newsQuery} setNewsQuery={setNewsQuery} fetchNews={fetchNews} loading={newsLoading} category={category}/>
        </div>
    )}
export default App
