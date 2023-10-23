
import './App.css';
import Filter from './Filter';
import Info from './Info';
import List from './List';
import Add from './Add';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
    const [data,setData]=useState([])

    async function postData(e,url){
        e.preventDefault()
        console.log(e.target.name.value)
        const res= await fetch(url,{
            method:"POST",
            headers:{'Content-type': 'application/json'},
            body:JSON.stringify({
                name: e.target.name.value,
                salary:e.target.salary.value
            })
            
        })
        if(!res.ok){
            throw new Error(` Gould not fetch ${url} status:${res.status}`)
        }
        const result = await res.json()
        setData(result) 
    }
    useEffect(()=>{
        fetch('https://fullstack-first-server.vercel.app/')
        .then(data=>data.json())
        .then(data=>{
            console.log(data)
            setData(data)
        })
    
    },[])

    return (
        <div className="App">
            <Info></Info>
            <Filter></Filter>
            <List data={data}></List>
            <Add postData={postData}></Add>
        </div>
    );
}

export default App;
