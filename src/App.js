import React, { useEffect, useState } from "react";
const App = () => {
  const [Temperature, setTemperature] = useState(10);
  const [TemperatureColor ,setTemperatureColor]=useState('cold')
  const increaseTemperature =()=>{
    if (Temperature<30){
    
    const newTemperature= Temperature+1
    if (newTemperature>15){
      setTemperatureColor('hot')
    }
   
    setTemperature(newTemperature)
    
  }
  else{
    alert("Temperature canot be more than 30")
  }
}
 
  const decreaseTemperature=()=>{
    if (Temperature>-3){
   const newTemperature= Temperature-1
    if (newTemperature<=15){
      setTemperatureColor('cold')
    }
   
    setTemperature(newTemperature)
  }
else{
  alert("Temperature canot be less than -3")
}}
  

  return (
    <>
      <div className="app-container" >
        <div className="temperature-display-container">
          <div className={`temperature-display ${TemperatureColor}`}>
            {Temperature}°C

          </div>

        </div>

        <div className="button-container">
          <button onClick ={increaseTemperature}>
            +
          </button>
          <button onClick={ decreaseTemperature}>
            -
          </button>

        </div>



      </div>
    </>
  )
}
export default App;