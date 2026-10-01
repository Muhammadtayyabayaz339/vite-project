import {useState, useEffect} from "react";
// import './App.css'

function TwoAPIs(){
    var[loading, setLoading]=useState(true)
    var[quote, setQuote]=useState("");
    var[cat, setCat]= useState("");

    var quotes=[
        {text:"Purr more, worry less"},
        {text:"Time spent with cats is never wasted"},
        {text:"You had me at meow"},

    ]
    
    useEffect(()=>{
        setLoading(true);
        fetchAPI()
    },[])

    function fetchAPI(){
        setLoading(true);
        // Cat API Call
        fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data =>{
        var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(randomQuote.text);
        setCat(data[0].url);
        setLoading(false);
        })
        .catch(err=>{
        console.log(err);
        setLoading(false);
        })
    }

    return(
        <div style={{textAlign:"center",padding:"50px", background:'whitesmoke', minHeight:'100vh'}}>
            <h1 style={{color:"red"}}>Cat Quotes</h1>
            {loading?<p>Loading...</p>:(
            <div>
            <img src={cat} alt="cat" style={{width:"300px",borderRadius:"25px"}}/>
            <h2 style={{margin:"30px",color:"red"}}>"{quote}"</h2>
            </div>
            )}
        <button onClick={fetchAPI}style={{padding:"15px 30px", background:"red",color:"white",border:"none"}}>
            New Cat + Quote
        </button>
        </div>
    )}

export default TwoAPIs