import React, { Component } from 'react';

class SearchResultContainer extends Component {
    
    state = {
        search: "",
        results: []
    };
    
    componentDidMount() {
        this.searchRandom("employees");
    }

    searchRandom = query => {
        API.search(query)
        .then(res => this.setState({results: res.data.data}))
        .catch(err => console.log(err));
    }
    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default SearchResultContainer;