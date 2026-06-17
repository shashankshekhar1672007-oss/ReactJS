import { useState } from "react"
import "./App.css"

function App() {
  const [a, seta] = useState(20)
  const [obj, setobj] = useState({name:'Shashank Shekhar', age:19, height:178})
  function increase(){
    seta(a + 1)
  }
  function decrease(){
    seta(a-1)
  }
  const updateObj = ()=>{
    const newObj = {...obj};
    newObj.name = "Shashank Shekhar Singh";
    setobj(newObj)
  }
  return (
    <>
      <div className="app-container">
        <h1 className="heading"> {a}</h1>
        <div className="button-group">
          <button className="btn btn-decrease" onClick={decrease}>Decrease</button>
          <button className="btn btn-increase" onClick={increase}>Increase</button>
        </div>
      </div>
      <div class Name="app-container">
        <div className="info-section">
          <h3>Name: {obj.name}</h3>
          <h3>Age: {obj.age}</h3>
          <h3>Height: {obj.height} cm</h3>
        </div>
        <div className="button-group">
          <button className="btn btn-increase" onClick={updateObj}>Update Name</button>
        </div>
      </div>
    </>
  )
}

export default App
