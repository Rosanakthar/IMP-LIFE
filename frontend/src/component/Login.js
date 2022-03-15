import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
                // alert(resjson.message);
                toast.warn(resjson.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
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
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
                <br /> <br />
                <div className="container cont">
                <div className="card">
                    <h4 className="text-center">Login</h4>
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