import React, { Component } from 'react';
import API from "../utils/API";
import "../App.css";
// import ResultList from "./ResultList";
import EmployeeDetail from "./EmployeeDetail";
// import axios from "axios";

class SearchResultContainer extends Component {
    
    state = {
        // search: "",
        results: []
    };
    
    //what we are trying to do here is search the API for 50 random people 
    //when this component mounts
    componentDidMount() {
        API.getEmployees()
            .then(res=>{this.setState({results:res.data.results});
            console.log(res)
            ;})
            .catch(err=>console.log(err));
        // (this.state.search).then(response=> {
        //     console.log(response.data);
        //     this.setState({
        //         result: response.data,
        //     });
        // });
    }
//TO DO
    // handleInputChange = event => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     this.setState({
    //       [name]: value
    //     });
    //   };

//TO DO
    //   handleFormSubmit = event => {
    //       event.preventDefault();
    //       this.searchMovies(this.state.search);
    //   };

//need to map this
    
    render() {
        return (
            <>
            
            {/* <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>
    </tr>
  </thead>
  

  </table> */}
            <div>
                {this.state.results.map(employee => (
                <EmployeeDetail
                
                image={employee.picture.thumbnail}
                name={employee.name.first + employee.name.last}
                phone={employee.phone}
                email={employee.email}
                dob={employee.dob.date}
              />))}
              </div>  
              </>
        );    
    }
}

export default SearchResultContainer;

<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>