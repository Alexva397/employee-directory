const EmployeeTable = (props) => {
    return (
        <div>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col" className="m-1 align-middle">Photo</th>
                        <th scope="col" className="m-1 align-middle">
                            <span
                                onClick={() => props.sortEmployees("last")}
                            >Last Name </span><i className="fas fa-sort-down align-top"></i>
                        </th>
                        <th scope="col" className="m-1 align-middle">
                            <span
                                onClick={() => props.sortEmployees("first")}
                            >First Name </span><i className="fas fa-sort-down align-top"></i>
                        </th>
                        <th scope="col" className="m-1 align-middle">DOB</th>
                        <th scope="col" className="m-1 align-middle">Gender</th>
                        <th scope="col" className="m-1 align-middle">Cell Phone</th>
                        <th scope="col" className="m-1 align-middle">
                            <span
                                onClick={() => props.sortEmployees("email")}
                            >Email </span><i className="fas fa-sort-down align-top"></i>
                        </th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {props.filteredEmployees.map((employee) => {
                        return (
                        <tr key={employee.login.uuid}>
                            <td className="align-middle"><img src={employee.picture.thumbnail} alt={employee.name.last}></img></td>
                            <td className="align-middle">{employee.name.last}</td>
                            <td className="align-middle">{employee.name.first}</td>
                            <td className="align-middle">{employee.dob.date}</td>
                            <td className="align-middle">{employee.gender}</td>
                            <td className="align-middle">{employee.cell}</td>
                            <td className="align-middle">{employee.email}</td>
                            <td className="align-middle"></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeTable;