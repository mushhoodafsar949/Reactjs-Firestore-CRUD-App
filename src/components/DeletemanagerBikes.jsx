import { deleteDoc, doc } from 'firebase/firestore';
import React, {useState} from 'react';
import { db } from '../lib/init-firebase';

const DeletemanagerBikes = () => {
    const [id, setId] = useState('');
    function handleSubmit(e){
        e.preventDefault()
        if(id===''){
            alert("doc id is mandatory");
            return
        }
        const docRef = doc(db, 'Managers', id)
        deleteDoc(docRef).then(Response=>{
                alert("Doc Deleted")
                console.log(Response);
            }).catch(error=> console.log(error.message))
    }
    return (
        <div style={{width:"100vw"}}>
        <h1 style={{height:"100px",
        fontSize:"50px"}}>Delete Bikes</h1>
        <div class="card" 
    style={{boxShadow: "10px 10px 5px lightblue",
    padding:"5px", width:"100vw"}}   >
    <div class="card-body" 
    style={{color:"blue", backgroundColor:"white",
    textTransform:"capitalize",
    fontSize:"20px",
    textAlign:'center'
    }}>
         <form onSubmit={handleSubmit}
         style={{textAlign:'center', width:"100vw"}}>
<input class="form-control form-control-lg"
        placeholder="Enter Doc ID" 
        aria-label=".form-control-lg example"
        id='id' type="text" value={id}
         onChange={e=> setId(e.target.value)}
         style={{height:"50px",
         fontSize:"20px",
        width:"400px",
    borderRadius:"100px",
textAlign:'center',
margin:"20px"}}
        />
       
         <button type='submit'
         style={{width:"200px",
         height:"70px",
         fontSize:"20px",
         borderRadius:"50px",}}> Delete Bike</button>
         </form>
    </div>
    </div> 
    
    </div>
    );
}

export default DeletemanagerBikes;
