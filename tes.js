import { useState, useEffect } from "react";
import {db} from "../../app/firebase/firebaseConfig";
import {collection, getDocs } from "firebase/firestore";
const AddVendor = () => {
        //-----------------------creating useState hook-------------------
        const [clients, setClients] = useState([]); //hold the list of clients 
        
        //------------------------fetching your expected Collection details---------
        const clientsCollectionRef = collection(db,"fomadaClients");
        
        //-------------------------adding useEffect  ---------------------
        useEffect(() => {
         const getClients = async () => { 
           const data = await getDocs(clientsCollectionRef);
           console.log(data);
           //setClients(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
         }
         getClients();
        },[])
  return <div className="AddVendor">
      </div>;
};
export default AddVendor;


   
  /*
   <div class="content">
  <form id="add-clients-form">
    <input type="" name="" placeholder=""/>
    <input type="text" name="email" placeholder="e-mail"/>
    <input type="text" name="password" placeholder="provide password"/>
    <input type="text" name="role" placeholder="your role"/>
    <input type="number" name="phone" placeholder="cell# for MFA"/>
    <button>Add client Details</button>
  </form>
</div>
  */
