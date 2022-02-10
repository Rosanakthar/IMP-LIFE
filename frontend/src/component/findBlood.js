import React, { Component } from 'react';

class FindBlood extends Component {
     state={
        blood:[],
        bloodGrp:"",
        pincode:"",
        bool:false,
        length:-1,
     }
    constructor(){
        super();
        const userHear = localStorage.getItem('userId');
        if(!userHear){
           return this.props.nav('/')
        }
       const userToken = localStorage.getItem('token');
        fetch('http://localhost:5001/auth/findbld',{
            method:"GET",
            headers:{
                'Authorization':'Bearer '+userToken,
                "Content-Type" : "application/json"
            }
        }).then(result=>{
            console.log(result);
            return result.json();
        }).then(final=>{
            console.log(final);
            this.setState({
                blood:final.post
            })
        })
    }

    submitHandler = () =>{
        console.log(this.state);
        let post={
            bloodGroup:this.state.bloodGrp,
            pincode:this.state.pincode
        }
        const token =localStorage.getItem('token');
        fetch('http://localhost:5001/auth/searchbld',{
            method:"POST",
            headers:{
                "Authorization":'Bearer '+token,
                "Content-Type":"application/json",
            },
            body:JSON.stringify(post)
        }).then(result => {
            return result.json();
        }).then(final => {
            this.setState({
                blood:final.searched,
                length:final.searched.length,
            })
            console.log(final.searched.length);
        })
    }
    

    render(){
        console.log("userDetail:",this.state);
        return (
            <div className="container-fluid">
                <div className='text-center'>
                    <h1>Blood Details</h1>
                </div>
                <div className='container'>
                    <div className='card'>
                        <div className='row'>
                            <div className='col-lg-4 col-md-6 col-sm-5'>
                                <h3>Search a Blood Around You</h3>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-5'>
                                
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-5'>
                                {/* <form onSubmit={this.submitHandler}> */}
                                    <label>BloodGroup:</label>
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
                                    <label>Pincode:</label>
                                    <input type='text' onChange={(event)=>this.setState({pincode:event.target.value})} /><br/>
                                    <button type='' className='btnh' onClick={this.submitHandler}><b>Search</b></button>
                                {/* </form> */}
                            </div>
                        </div>
                    </div>
                </div>
                <br /> <br />
                <div>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Mobile Number</th>
                            <th>Blood Group</th>
                            <th>Country</th>
                            <th>City</th>
                            <th>Pincode</th>
                        </tr>
                        {this.state.blood.map(det =>(
                            <tr key={det._id}>
                                <td>{det.name}</td>
                                <td>{det.number}</td>
                                <td>{det.bloodGrp}</td>
                                <td>{det.country}</td>
                                <td>{det.city}</td>
                                <td>{det.pincode}</td>
                            </tr>
                        ))}
                    </table>
                    {this.state.length >= 0 ? <div className='text-center'><h3>{this.state.length} Result Found</h3></div>
                    : null }
                </div>
            </div>
        )
    }
}

export default FindBlood;