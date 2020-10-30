import React, { Component } from "react";
import API from "../utils/API";
import "../App.css";
// import ResultList from "./ResultList";
import EmployeeDetail from "./EmployeeDetail";
// import axios from "axios";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
    filteredResults: [],
    //sortedResults:
  };

  //what we are trying to do here is search the API for 50 random people
  //when this component mounts
  componentDidMount() {
    API.getEmployees()
      .then((res) => {
        this.setState({ results: res.data.results, filteredResults: res.data.results});
        //setState same as filtered results
        console.log(res);
      })
      .catch((err) => console.log(err));
    // (this.state.search).then(response=> {
    //     console.log(response.data);
    //     this.setState({
    //         result: response.data,
    //     });
    // });
  }
  //TO DO
  handleInputChange = (event) => {
    // const name = ["search"];
    const value = event.target.value;
    const filteredResults = this.state.results.filter((employee) =>
      employee.name.first.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({
      search: value,
      filteredResults: filteredResults,
    });
  };

  //DONT NEED
  //   handleFormSubmit = event => {
  //       event.preventDefault();
  //       this.searchMovies(this.state.search);
  //   };

  // searchMovies = query => {
  //   API.search(query)
  //     .then(res => this.setState({ result: res.data }))
  //     .catch(err => console.log(err));
  // };

  //need to map this

  //ADD SORT BUTTON, onClick=, don't need sorted array, 
  //const sortedArray, results: sortedResults 

  render() {
    return (
      <>
        <div style={{ margin: 20, display: "flex", justifyContent: "center" }}>
          <input
            style={{
              height: 45,
              width: 200,
              borderRadius: 5,
              borderColor: "#E8E7EB",
            }}
            type="search"
            id="search"
            placeholder="Search"
            fontFamily="Reem Kufi"
            onChange={this.handleInputChange}
            value={this.state.search}
          ></input>
        </div>
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
  

  </table>  */}
        <div>
          {this.state.filteredResults.map((employee) => (
            <EmployeeDetail
              image={employee.picture.thumbnail}
              name={employee.name.first + employee.name.last}
              phone={employee.phone}
              email={employee.email}
              dob={employee.dob.date}
            />
          ))}
        </div>
      </>
    );
  }
}

export default SearchResultContainer;
