import React, { Component } from 'react'
import { Route,useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import HistoryPath from '../history/history'

class Signup extends Component {
    constructor(props){
        // this.navigate = useNavigate();
        super(props);
    }
    state = {
        name:'',
        number:'',
        bloodGrp:'',
        country:'',
        city:'',
        pincode:'',
        password:'',
        reppassword:'',
        sub:false
    }
    submitHandler = (event) =>{
        event.preventDefault();
        let post ={
            name:this.state.name,
            number:this.state.number,
            bloodGrp:this.state.bloodGrp,
            country:this.state.country,
            city:this.state.city,
            pincode:this.state.pincode,
            password:this.state.password,
        }
        if(this.state.password !== this.state.reppassword){
        }
        else{
            fetch('http://localhost:5001/auth/signup',{
                method:'POST',
                headers:{
                    "Content-type" : "application/json"
                },
                body:JSON.stringify(post)

            }).then(result => {
                console.log(result);
                return result.json();
            })
            .then(response => {
                console.log(response);
                if(response.path=='/signup'){
                    alert(response.message);
                    return;
                }
                this.props.nav('/login');
            })
        }
    }
    
    render(){
        
        let err = <p></p>
        if(this.state.password !== this.state.reppassword){
            err = <p>Password missmatch</p>
        }
        if(this.state.password.length>4){
            this.state.sub = true;
        }
        console.log(this.state)
        return(
            
            <div>
                <div className='container'>
                    <div className='card'>
                <form onSubmit={this.submitHandler}>
                    <label>Name:</label><br />
                    <input type="text" placehold="Enter Name" onChange={(event)=>this.setState({name:event.target.value})}></input><br />
                    <label>Mobile Number:</label><br />
                    <input type="text" placehold="Enter Name" onChange={(event)=>this.setState({number:event.target.value})}></input><br />
                    <label>Blood Group:</label><br />
                    <select  onChange={(event)=>this.setState({bloodGrp:event.target.value})}>
                     <option  value='A+'>Select</option>
                     <option  value='A+'>A Positive</option>
                     <option  value='A-'>A Negative</option>
                     <option  value='A un'>A Unknown</option>
                     <option  value='B+'>B Positive</option>
                     <option  value='B-'>B Negative</option>
                     <option  value='B un'>B Unknown</option>
                     <option  value='AB+'>AB Positive</option>
                     <option  value='AB-'>AB Negative</option>
                     <option  value='AB un'>AB Unknown</option>
                     <option  value='o+'>O Positive</option>
                     <option  value='o-'>O Negative</option>
                     <option  value='o un'>O Unknown</option>
                     <option  value="un">Unknown</option>
                    </select><br />
                    <label>Country:</label><br />
                    <input type="text" placehold="Enter country" onChange={(event)=>this.setState({country:event.target.value})}></input><br />
                    <label>City:</label><br />
                    <input type="text" placehold="Enter city" onChange={(event)=>this.setState({city:event.target.value})}></input><br />
                    <label>Pin Code:</label><br />
                    <input type="text" placehold="Enter pincode" onChange={(event)=>this.setState({pincode:event.target.value})}></input><br />
                    <label>Password:</label><br />
                    <input type="password" placehold="Enter pincode" onChange={(event)=>this.setState({password:event.target.value})}></input><br />
                    <label>Confirm Password:</label><br />
                    <input type="password" placehold="Enter pincode" onChange={(event)=>this.setState({reppassword:event.target.value})}></input><br />
                    {err}
                    <button className=''type='submit' disabled={this.state.sub===false}><b>Signup</b></button>
                </form>
                </div>
                <br/> <br/> <br/> <br/> <br/>
                </div>
            </div>
        )
    }
        
}

export default Signup;