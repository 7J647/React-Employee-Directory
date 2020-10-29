import './App.css';


function App() {
  return (
    <>
    <div style={{backgroundColor:"rgb(0,24,65)", height:130, borderBottom: "5px solid red"}}
              className="header">
    {/* <Row>
          <Col size="sm-12"> */}
            <h1 style={{color:"white", textAlign:"center"}}>Employee Directory</h1>
            <p style={{color:"white", textAlign:"center"}}>Click on carrots to filter by heading or use the search box to narrow your results.</p>
          {/* </Col>   
    </Row> */}
    </div>
    </>
    
);
  }

export default App;
