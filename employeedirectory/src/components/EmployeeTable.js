const EmployeeTable = (props) => {
    return (
        <div>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Photo</th>
                        <th scope="col">
                            <span
                                onClick={() => props.sortEmployees("last")}
                            >Last Name</span>
                        </th>
                        <th scope="col">First Name</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Cell Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {props.filteredEmployees.map((employee) => {
                        return (
                        <tr key={employee.login.uuid}>
                            <td><img src={employee.picture.thumbnail} alt={employee.name.last}></img></td>
                            <td>{employee.name.last}</td>
                            <td>{employee.name.first}</td>
                            <td>{employee.dob.date}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.cell}</td>
                            <td>{employee.email}</td>
                            <td></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeTable;