import React, { useEffect, useState } from 'react'
import "./Visitor.css"
import { BsFillPersonFill } from "react-icons/bs";

const VisitCount = () => {
    
  const [count, setCount] = useState(0);

  useEffect( () => {

    const countVisit = localStorage.getItem("Visit Count");
    const newVisit = countVisit ? parseInt(countVisit) + 1 : 1;

    setCount(newVisit);

    localStorage.setItem("Visit Count", newVisit);

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
