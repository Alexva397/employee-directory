import React, { Component } from 'react';
import API from './utils/API';
import EmployeeTable from './EmployeeTable';
import SearchForm from './SearchForm';


class EmployeeContainer extends Component {
    state = {
        headers: [],
        employees: [],
        search: '',
    };

    componentDidMount() {
        API.generateRandom()
        .then(res => {
            this.setState({ 
                headers: res.data.results,
                employees: res.data.results,
            });
        })
        .catch(error => console.log(error));
    }

    handleInputChange = event => {
        this.setState({
             search: event.target.value 
        });
    };


    render() {
        return (
            <>
            <SearchForm 
                handleInputChange={this.handleInputChange}
            />
            <EmployeeTable
                headers={this.state.headers}
                employees={this.state.employees}
            />
            </>
        );
    }
}

export default EmployeeContainer;