import './App.css';


function App() {
  return (
    <>
    <header style={{backgroundColor:"rgb(0,24,65)", height:130, borderBottom: "5px solid red"}}
              className="header">
            <h1 style={{color:"white", textAlign:"center"}}>Employee Directory</h1>
            <p style={{color:"white", textAlign:"center"}}>Click on carrots to filter by heading or use the search box to narrow your results.</p>
    </header>
    <div style={{margin:20, display: "flex", justifyContent: "center"}}>
      <input style={{height:45, width: 200, borderRadius:5, 
        borderColor:"#E8E7EB"}}type="search" id="search" placeholder="Search">
        </input>
    </div>



    
    </>
    
);
  }

export default App;
