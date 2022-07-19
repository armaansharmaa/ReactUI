import React, { Component } from 'react'
import UserService from '../services/UserService'

class UserComponentById extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: {}
        }
    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then( res => {
            this.setState({user: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Person Details</h3>
                    <div className = "card-body">
                    <div className = "row">
                            <label> Id: </label>
                            <div> { this.state.user.id }</div>
                        </div>                        
                        <div className = "row">
                            <label> First Name: </label>
                            <div> { this.state.user.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Last Name: </label>
                            <div> { this.state.user.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Middle Name: </label>
                            <div> { this.state.user.middleName }</div>
                        </div>
                        <div className = "row">
                            <label> Email ID: </label>
                            <div> { this.state.user.email }</div>
                        </div>
                        <div className = "row">
                            <label> Street: </label>
                            <div> { this.state.user.street }</div>
                        </div>
                        <div className = "row">
                            <label> City: </label>
                            <div> { this.state.user.city }</div>
                        </div>
                        <div className = "row">
                            <label> State: </label>
                            <div> { this.state.user.state }</div>
                        </div>
                        <div className = "row">
                            <label> Country: </label>
                            <div> { this.state.user.country }</div>
                        </div>
                        <div className = "row">
                            <label> Pincode: </label>
                            <div> { this.state.user.pincode }</div>
                        </div>
                        <div className = "row">
                            <label> Employer Name: </label>
                            <div> { this.state.user.employerName }</div>
                        </div>
                        <div className = "row">
                            <label> Employer Id: </label>
                            <div> { this.state.user.employerId }</div>
                        </div>
                        <div className = "row">
                            <label> Employer Street: </label>
                            <div> { this.state.user.employerStreet }</div>
                        </div>
                        <div className = "row">
                            <label> Employer City: </label>
                            <div> { this.state.user.employerCity }</div>
                        </div>
                        <div className = "row">
                            <label> Employer State: </label>
                            <div> { this.state.user.employerState }</div>
                        </div>
                        <div className = "row">
                            <label> Employer Country: </label>
                            <div> { this.state.user.employerCountry }</div>
                        </div>
                        <div className = "row">
                            <label> Employer Pincode: </label>
                            <div> { this.state.user.employerPincode }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default UserComponentById