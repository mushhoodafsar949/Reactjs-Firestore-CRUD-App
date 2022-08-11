import React, { useState, useEffect } from "react"
import {onSnapshot } from "firebase/firestore"
import { managerCollectionRef } from "../lib/firestore.collections"
import EditmanagerBikes from "./EditmanagerBikes";
import AddmanagerBikes from "./AddmanagerBikes";
import DeletemanagerBikes from "./DeletemanagerBikes";

const Managers = () => {
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
      <section>
      <AddmanagerBikes/>
      </section>
      <section>
        <EditmanagerBikes/>
      </section>
      <section>
        <DeletemanagerBikes/>
      </section>
       <h1 style={{height:"100px",
                fontSize:"50px"}}>Display Bikes</h1>
      {managers.map((managr) => ( 
        <div  >
        <div class="card" 
        style={{boxShadow: "10px 10px 5px lightblue",
        padding:"30px"}}   >
        <div class="card-body" key={managr.id} 
        style={{color:"blue", backgroundColor:"wheat",
        textTransform:"capitalize",
        fontSize:"25px",
        margin:"7px"}}>
            <h5 class="card-title">Model {managr.data.model}</h5>
            <p class="card-text">Color: {managr.data.color}</p>
            <p class="card-text">Location: {managr.data.location}</p>
            <p class="card-text">Rating: {managr.data.rating}</p>
            <p class="card-text">{managr.data.available}</p>
        
        </div>
        </div> 
        </div>
            ))}
    </div>
   
  );

};

export default Managers;
