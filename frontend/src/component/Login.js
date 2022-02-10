import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {

    state ={
        number:"",
        password:"",
    }

    submitHandler = (event) =>{
        event.preventDefault();
        let post = {
            number : this.state.number,
            password: this.state.password
        }
        fetch('http://localhost:5001/auth/login',{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(post),
        }).then(result=>{
            return result.json();
        }).then(resjson=>{
            console.log(resjson);
            if(resjson.path!='/'){
                alert(resjson.message);
                return;
            }
            localStorage.setItem('token',resjson.token);
            localStorage.setItem('userId',resjson.userId);
            localStorage.setItem('userName',resjson.userName);
            this.props.nav('/');
        })
    }

    render(){
        console.log(this.state);
        return(
            <React.Fragment>
                <br /> <br />
                <div className="container">
                <div className="card">
                <form onSubmit={this.submitHandler}>
                    <label>Number:</label><br />
                    <input type="text" placehold="Enter Name" onChange={(event)=>this.setState({number:event.target.value})}></input><br />
                    <label>Password:</label><br />
                    <input type="password" placehold="Enter Name" onChange={(event)=>this.setState({password:event.target.value})}></input><br />
                    <button type="submit"><b>Login</b></button><br />
                    <Link to="/signup"><p>Create Your Own Account? click</p></Link>
                </form>
                </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Login;