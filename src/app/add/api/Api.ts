import { useState, useEffect } from "react";

const [data , setDate] = useState <Data[]>([]);
const [error , setError] = useState('');
const [ loading , setLoading] = useState(false);

interface Data {
    id: number,
    name: string,
    dec: string,

}


useEffect(()=>{
    
    try{
        const fetchData = async() =>{
            const res = await fetch('https://newsapi.org/v2/top-headlines/sources?country=us&category=general&apiKey=6d64494dcf3e4adeb406374fb13ab6ef');
            setLoading(true);  
            const result = await res.json();
             
            setDate(result.sources);
            setLoading(false);  
            console.log(result.sources);      
        }
    }catch(error:any)
    {
        setError(error);
    }
     
    

})