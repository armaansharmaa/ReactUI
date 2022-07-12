import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data })
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center"> Users List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>

                            <td>Id</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Middle Name</td>
                            <td>Email</td>
                            <td>Street</td>
                            <td>City</td>
                            <td>State</td>
                            <td>Country</td>
                            <td>Pin Code</td>
                            <td>Employer Name</td>
                            <td>Employer Id</td>
                            <td>Employer Street</td>
                            <td>Employer City</td>
                            <td>Employer State</td>
                            <td>Employer Country</td>
                            <td>Employer Pin Code</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                    <tr key={user.id}>
                                        <td> {user.id}</td>
                                        <td> {user.firstName}</td>
                                        <td> {user.lastName}</td>
                                        <td> {user.middleName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.street}</td>
                                        <td>{user.city}</td>
                                        <td>{user.state}</td>
                                        <td>{user.country}</td>
                                        <td>{user.pincode}</td>
                                        <td>{user.employerName}</td>
                                        <td>{user.employerId}</td>
                                        <td>{user.employerStreet}</td>
                                        <td>{user.employerCity}</td>
                                        <td>{user.employerState}</td>
                                        <td>{user.employerCountry}</td>
                                        <td>{user.employerPincode}</td>
                                    </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default UserComponent