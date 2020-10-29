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
            ;}
            )
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
            <div>
                {/* {.state.results.map((employee))} */}
                 {/* <ResultList results={this.state.results} /> */}
                 {/* <EmployeeDetail
                Image={this.state.picture.thumbnail}
                Name={this.state.name.first + this.state.name.last}
                Phone={this.state.phone}
                Email={this.state.email}
                Dob={this.state.dob}
              /> */}
            </div>
        );
    }
}

export default SearchResultContainer;