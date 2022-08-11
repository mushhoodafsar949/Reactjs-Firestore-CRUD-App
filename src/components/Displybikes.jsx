import React, { useState, useEffect } from "react"
import {onSnapshot} from "firebase/firestore"
import { managerCollectionRef } from "../lib/firestore.collections"

const Displybikes = () => {
    


    var rand = 1 + (Math.random() * (5-1));
         var num = Number(rand);
    const [managers, setManagers] = useState([])
    useEffect(() => {
  const unsubscribe = onSnapshot(managerCollectionRef, snapshot=>{
  setManagers(snapshot.docs.map(doc=>({
      id:doc.id,
      data: doc.data()
  }
  ))
  
  )
 
  })
  return ()=>{
  unsubscribe()
  }
    }, [])



    
    return (
        <div>
                   <h1 style={{height:"100px",
                fontSize:"50px"}}>Display Bikes</h1>
      {managers.map((managr) => ( 
        <div  >
        <div class="card" 
        style={{boxShadow: "10px 10px 5px lightblue",
        padding:"30px"}}   >
        <div class="card-body" key={managr.id} 
        style={{color:"blue", backgroundColor:"aqua",
        textTransform:"capitalize",
        fontSize:"25px",
        textAlign:"left",
        padding:"4px",
        paddingLeft:"30px",
        margin:"7px"}}>
            <h5 class="card-title">Model {managr.data.model}</h5>
            <p class="card-text">Color: {managr.data.color}</p>
            <p class="card-text">Location: {managr.data.location}</p>
            <p class="card-text">Rating: {managr.data.rating}</p>
            <p class="card-text">{managr.data.available} Until {parseInt(num)} Days</p>
        
        </div>
        </div> 
        </div>
            ))}
        </div>
    );
}

export default Displybikes;
