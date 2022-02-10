import React, { Component } from "react";

class Home extends Component{

    render(){
        return(
            <React.Fragment>

                <section className="d-flex justify-content-center align-items-center">
                    <div className="container position-relative" data-aos="zoom-in" data-aos-delay="100">
                      <h1>It's an hour for donation,<br /> but life for years</h1>
                      <h2>Donate Blood Save A Life</h2>
                    </div>
                  </section>

               
            <div class="container-fluid section-title">
            <h2>Details</h2>
            <p> Detail </p>
            </div>
            <div className="container">
            <div className="row">
                <div className="col-lg-4 col-sm-9 col-md-4">
                    <div className="card">
                        <div className="card-head">
                            <img src='img/dont.jpg' className="img"></img>
                        </div>
                        <div className="card-body">
                        <h4>DO & DON'T <br />Before Donate Blood</h4>
                        <ul>
                        <li> Do eat a low fat healthy meal before you donate.</li>
                        <li> Do eat a low fat healthy meal before you donate.</li>
                        <li> Do drink plenty of fluids one day before, the day of and one day after your donation</li>
                        <li> Do not smoke immediately before or within one hour after your donation to avoid light-headedness.</li>
                        <li> Do not rush through juice and cookies.</li>
                        </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-9 col-md-4">
                    <div className="card">
                        <div className="card-head">
                            <img src="img/fact.jpg" className="img"></img>
                        </div>
                        <div className="card-body">
                        <h4>Fact Sheet</h4>
                        <ul>
                         <li>About 118.4 million blood donations are collected worldwide.</li>
                         <li>40% of these are collected in high-income countries, home to 16 % of the world's population.</li>
                         <li>About 13 300 blood centres in 169 countries report collecting a total of 106 million donations.</li>
                         <li>Collections at blood centres vary according to income group.</li>
                        </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-9 col-md-4">
                    <div className="card">
                        <div className="card-head">
                            <img src="img/dont.jpg" className="img"></img>
                        </div>
                        <div className="card-body">
                        <h4>DO & DON'T <br />After Donate Blood</h4>
                        <ul>
                          <li>Keep the strip bandage on for the next several hours</li>
                          <li>To avoid a skin rash, clean the area around the bandage with soap and water</li>
                          <li> Don't do any heavy lifting or vigorous exercise for the rest of the day.</li>
                        </ul>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
            <br /><br />  <br /><br />                
            </React.Fragment>
        )
    }

}

export default Home;