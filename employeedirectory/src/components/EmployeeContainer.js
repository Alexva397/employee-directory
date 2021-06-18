import React, { Component } from 'react';
import API from './utils/API';
import EmployeeTable from './EmployeeTable';


class EmployeeContainer extends Component {
    state = {
        headers: [],
        employees: [],
    };

    componentDidMount() {
        API.generateRandom()
        .then(res => {
            // console.log(res);
            this.setState({ 
                headers: res.data.results,
                employees: res.data.results,
            });
        })
        .catch(error => console.log(error));
    }




    render() {
        return (
            <EmployeeTable
                headers={this.state.headers}
                employees={this.state.employees}
            />
        );
    }
}

export default EmployeeContainer;