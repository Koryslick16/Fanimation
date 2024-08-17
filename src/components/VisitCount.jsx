import React, { useEffect, useState } from 'react'
import "./Visitor.css"
import axios from 'axios';
import { BsFillPersonFill } from "react-icons/bs";

const VisitCount = () => {
    
  const [count, setCount] = useState(0);

  useEffect( () => {
    
    // const countVisit = async () => {
    //   try{
    //   const response= await axios.get('https://api.countapi.xyz/hit/localhost:5174/unique_key?value=45');
    //     setCount(response.data.value);
    //     console.log("Visit count:", response.data.value);

    //     localStorage.setItem("Visits", (response.data.value))
        
    //   }catch(error){
    //     console.error('Error: ', error); 
    //   }
    // }

    const countVisit = localStorage.getItem("Visit Count");
    const newVisit = countVisit ? parseInt(countVisit) + 1 : 1;

    setCount(newVisit);

    localStorage.setItem("Visit Count", newVisit);

    // countVisit();
    console.log(newVisit);
    

  },[]);


  return (
    <>

      <div className="countDiv">
        <h4><BsFillPersonFill style={{
          fontSize: "20px",
          paddingTop: "5px"
        }} />: {count}</h4>
      </div>

    </>
  )
}

export default VisitCount
