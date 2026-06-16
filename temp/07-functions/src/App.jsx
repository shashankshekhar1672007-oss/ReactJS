function App() {
  function btnClicked() {
    console.log("Button is clicked");
  }

  function divMouseEnter() {
    console.log("Mouse entered in Div");
  }

  return (
    <div>
      <div className="app-container">
        <h1>Hello React Events</h1>
        
        <button className="btn" onClick={btnClicked}>Click Me</button>
        
        <button
          className="btn btn-double"
          onDoubleClick={() => {
            console.log("Button is Double Clicked");
          }}
        >
          Double Click Me
        </button>
        
        <div
          style={{
            backgroundColor: "#f59e0b",
            height: "100px",
            width: "100px",
            borderRadius: "16px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
          }}
          onMouseEnter={divMouseEnter}
        ></div>
        
        <input
          className="input-field"
          type="text"
          placeholder="Enter Name"
          onChange={(event) => {
            console.log("Event Targeted:", event.target, "\nChange:", event.nativeEvent.data);
          }}
        />
      </div>

      <div onWheel={()=>{
        console.log("Scrolling...")
      }}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>
      
    </div>
  );
}

export default App;
