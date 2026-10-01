import React from "react";
/* News Box */
    const NewsCard = ({news,newsQuery,setNewsQuery,fetchNews,loading,category})=>{
        return(
        <div>
            <h1 style={{color:'Green',paddingTop:'10px',fontStyle:'italic',fontWeight:'bold', marginTop:'15px'}}>Top News 📰</h1>
            <input type="text" value={newsQuery} placeholder="Search News..." onChange={(e)=>setNewsQuery(e.target.value)} 
            style={{backgroundColor:'#2E2E2E',color:'white',padding:'10px',width:'200px',marginRight:'10px',
            border:'1.5px solid green',borderRadius:'10px'}}/>

            <button onClick={()=>fetchNews(newsQuery)} style={{color:'white',background:'green',padding:'10px 20px',fontStyle:'italic',
            fontSize:'15px',fontWeight:'bold',cursor:'pointer',border:'1.5px solid green',borderRadius:'10px'}}>Search</button>
            
            <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',gap:'10px',margin:'20px 0'}}>
                <button onClick={()=>fetchNews("health")} style={{color:'white',background: category ==='health'?'#2E2E2E':'green',padding:'10px 20px',
                fontStyle:'italic',fontSize:'15px',fontWeight:'bold',cursor:'pointer',border:'1.5px solid green',borderRadius:'10px'}}>Health</button>
                <button onClick={()=>fetchNews("science")} style={{color:'white',background:category ==='science'?'#2E2E2E':'green',padding:'10px 20px',
                fontStyle:'italic',fontSize:'15px',fontWeight:'bold',cursor:'pointer',border:'1.5px solid green',borderRadius:'10px'}}>Science</button>
                <button onClick={()=>fetchNews("technology")} style={{color:'white',background:category ==='technology'?'#2E2E2E':'green',padding:'10px 20px',
                fontStyle:'italic',fontSize:'15px',fontWeight:'bold',cursor:'pointer',border:'1.5px solid green',borderRadius:'10px'}}>Technology</button>
                <button onClick={()=>fetchNews("business")} style={{color:'white',background:category ==='business'?'#2E2E2E':'green',padding:'10px 20px',
                fontStyle:'italic',fontSize:'15px',fontWeight:'bold',cursor:'pointer',border:'1.5px solid green',borderRadius:'10px'}}>Business</button>
                <button onClick={()=>fetchNews("sports")} style={{color:'white',background:category ==='sports'?'#2E2E2E':'green',padding:'10px 20px',
                fontStyle:'italic',fontSize:'15px',fontWeight:'bold',cursor:'pointer',border:'1.5px solid green',borderRadius:'10px'}}>Sports</button>
            </div>       

            {loading ? <p style={{color:'white'}}>Loading News...</p>:

            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(300px,1fr))',gap:'20px',width:'100%'}}>
            {news && news.slice(0,12).map((article,i)=>(   
                <a key={i} href={article.url} target="_blank"
                style={{border:'1.5px solid green', margin: '0', padding: '15px',width:'100%',boxSizing:'border-box', 
                color:'green', borderRadius:'10px', background:'#1a1a1a'}}>
            {article.urlToImage &&<img src={article.urlToImage}alt="news" style={{width:'100%',height:'200px', 
            objectFit:'cover',borderRadius:'10px'}}/>}
                <h3 style={{margin:'10px 0'}}>{article.title}</h3>
                <p style={{fontSize:'15px', color:'white'}}>{article.description}</p>
                <small style={{color:'#888'}}>Date:{article.publishedAt.slice(0,12)}</small>
                </a>        
        ))}
            </div>
            }
        </div>
        );
    };
export default NewsCard;
