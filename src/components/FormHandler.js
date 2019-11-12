import React, { Component } from 'react';

class FormHandler extends Component {

    constructor(props){
        super(props);
        this.state = {
            email : '',
            password: '',
            checkMeOut: false,
            selectedValue: 'John Denver'
        }
    }

    handleEmailChange = event =>{
        this.setState({
            email: event.target.value
        })
    }

    handlePasswordChange = event =>{
        this.setState({
            password: event.target.value
        })
    }

    handleCheckboxChange = event =>{
        this.setState({
            checkMeOut: event.target.value
        })
    }

    handleSelectChange = event =>{
        this.setState({
            selectedValue: event.target.value
        })
    }

    handleFormData = event =>{
        event.preventDefault();
        alert(`Email: ${this.state.email}. Password: ${this.state.password}, Checked: ${this.state.checkMeOut}  And Selected: ${this.state.selectedValue}`)
    }

    render(){
        return(
            <div>
                <h1>Fully State Based Dynamic Form Handling System Using React Class Component</h1>
                <form style={{padding: 50 + 'px', marginTop: 20 + 'px'}} onSubmit={this.handleFormData}>
                    <div className="form-group">
                        <label>Email address</label>
                        <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email" 
                        value={this.state.email}
                        onChange = {this.handleEmailChange}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Password" 
                        value={this.state.password}
                        onChange={this.handlePasswordChange}/>
                    </div>
                    <div className="form-group form-check">
                        <input 
                        type="checkbox" 
                        className="form-check-input" 
                        checked={this.state.checkMeOut}
                        onChange={this.handleCheckboxChange}/>
                        <label className="form-check-label">Check me out</label>
                    </div>
                    <div class="form-group">
                        <label>Example select</label>
                        <select 
                        className="form-control" 
                        value={this.state.selected}
                        onChange={this.handleSelectChange}>
                        <option value='John Denver'>John Denver</option>
                        <option value='Eric Clpaton'>Eric Clapton</option>
                        <option value='John Lenon'>John Lenon</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default FormHandler;