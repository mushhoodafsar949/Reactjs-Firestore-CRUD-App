import React, {useState} from 'react';
import { addDoc } from 'firebase/firestore';
import { managerCollectionRef } from '../lib/firestore.collections';

const AddmanagerBikes = () => {
const [model, setModel] = useState('');
const [color, setColor] = useState('');
const [location, setLocation] = useState('');
const [rating, setRating] = useState('');
let [available, setAvailable] = useState('');


function handleSubmit(e){
    e.preventDefault()
if(model==='')
{
    alert('model is empty');
    return
}
if(color==='')
{
    alert('color is empty');
    return
}
if(location==='')
{
    alert('location is empty');
    return
}
if(rating==='')
{
    alert('rating is empty');
    return
}
if(available===''){
    alert('Box is unchecked');
    return
}

if(available===true)
{
    available= "available";
}
if(available===false){
    available= "Not available";
}
    addDoc(managerCollectionRef,
        {model,color,location,rating,available} ).then(Response=>{
            console.log("Response for", Response.id," submitted successfulu");
        }).catch(console.error());
}
    return (
        <div>
            <h1 style={{height:"100px",fontSize:"50px"}}>Add Bikes</h1>
            <div class="card" 
        style={{boxShadow: "10px 10px 5px lightblue",
        padding:"5px"}}   >
        <div class="card-body" 
        style={{color:"blue", backgroundColor:"white",
        textTransform:"capitalize",
        fontSize:"20px",
        textAlign:'center'
        }}>
             <form onSubmit={handleSubmit}
             style={{textAlign:'center'}}>
            <input class="form-control form-control-lg"
            placeholder="Enter Model" 
            aria-label=".form-control-lg example"
            id='model' type="text" value={model}
             onChange={e=> setModel(e.target.value)}
             style={{height:"50px",
             fontSize:"20px",
            width:"400px",
        borderRadius:"100px",
    textAlign:'center',
margin:"5px"}}
            />
            <input class="form-control form-control-lg"
            placeholder="Enter Color" 
            aria-label=".form-control-lg example"
            id='color' type="text" value={color}
            onChange={e=> setColor(e.target.value)}
            style={{height:"50px",
            fontSize:"20px",
           width:"400px",
       borderRadius:"100px",
   textAlign:'center',
   margin:"5px"}}
            />
            <input class="form-control form-control-lg"
            placeholder="Enter location" 
            aria-label=".form-control-lg example"
            id='location' type="text" value={location}
            onChange={e=> setLocation(e.target.value)}
            style={{height:"50px",
            fontSize:"20px",
           width:"400px",
       borderRadius:"100px",
   textAlign:'center',
   margin:"5px"}}
            />
            <input class="form-control form-control-lg"
            placeholder="Enter Rating" 
            aria-label=".form-control-lg example"
            id='rating' type="text" value={rating}
            onChange={e=> setRating(e.target.value)}
            style={{height:"50px",
            fontSize:"20px",
           width:"400px",
       borderRadius:"100px",
   textAlign:'center',
   margin:"5px"}}
            />
            
            <div style={{
        display:'flex',
        alignItems:'center',
        margin:"5px" }}>
            <label>Availablity</label>
            <input class="form-control form-control-lg"
            id='available' type="checkbox"
            onChange={e=> setAvailable(e.target.checked)}
            style={{height:"30px",
            fontSize:"20px",
           width:"400px",
       borderRadius:"100px",
   textAlign:'center'}}
            />
                </div> 
           
             <button type='submit'
             style={{width:"200px",
             height:"70px",
             fontSize:"20px",
             borderRadius:"50px",}}> Add Bike</button>
             </form>
        </div>
        </div> 
        
        </div>
    );
}

export default AddmanagerBikes;
