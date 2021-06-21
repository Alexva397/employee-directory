import React, { Component } from 'react';
import API from './utils/API';
import EmployeeTable from './EmployeeTable';
import SearchForm from './SearchForm';


class EmployeeContainer extends Component {
    state = {
        headers: [],
        employees: [],
        order: 'descend',
        search: '',
        filteredEmployees: [],

    };

    componentDidMount() {
        API.generateRandom()
        .then(res => {
            this.setState({
                headers: res.data.results,
                employees: res.data.results,
                filteredEmployees: res.data.results,
            });
        })
        .catch(error => console.log(error));
    }

    handleInputChange = event => {
        this.setState({
             search: event.target.value 
        });
        // this.filterEmployees(this.state.search.toLowerCase().trim());
        // console.log(this.state.search);
    };

    handleFormSubmit = event => {
        event.preventDefault();

        console.log(this.state.search);
        this.filterEmployees(this.state.search.toLowerCase().trim());
        console.log(this.state.search);
    }



    filterEmployees = (search) => {
        if (search) {
          this.setState({
            filteredEmployees: this.state.employees.filter((employee) => {
                return (
                    employee.name.last
                        .toLowerCase()
                        .includes(search)
                )
            })
          });
        } else {
          this.setState({ filteredEmployees: this.state.employees });
        }
      };








    render() {
        return (
            <>
                <SearchForm 
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <EmployeeTable
                    headers={this.state.headers}
                    employees={this.state.employees}
                    filteredEmployees={this.state.filteredEmployees}
                />
            </>
        );
    }
}

export default EmployeeContainer;