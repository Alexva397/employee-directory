

const EmployeeTable = (props) => {
    console.log(props)
    return (
        <div>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Last Name</th>
                        <th scope="col">First Name</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Cell Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {props.employees.map((employee) => {
                        return (
                        <tr key={employee.login.uuid}>
                            <td>{employee.name.last}</td>
                            <td>{employee.name.first}</td>
                            <td>{employee.dob.date}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.cell}</td>
                            <td>{employee.email}</td>
                            <td></td>
                        </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeTable;