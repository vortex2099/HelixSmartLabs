import React, { Component } from "react";
import { MDBCollapseHeader } from 'mdbreact'
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn, MDBCollapse } from "mdbreact";
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedin, faInstagram, } from '@fortawesome/free-brands-svg-icons'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'

import logo from '../assests/IMG-1332.png'


class FooterPage extends Component {
    state = {
        collapseID: "collapse3"
    }

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));



    render() {
        const { collapseID } = this.state;
        return (
            <MDBFooter className=" Footer font-small pt-4 mt-4">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="3">
                            <img className="photo" src={logo}></img>
                            <p className="address">
                                Manav Rachna Campus<br />
                                Sector - 46, Faridabad<br />
                                    Haryana, India -121006
            </p>
                            <p className="address">Mobile: +91 9873932539<br />contact@helixsmartlabs.in</p>
                        </MDBCol>
                        <MDBCol md="2" className="links">
                            <h4><MDBBtn className="btn-collapse" onClick={this.toggleCollapse("collapse3")}><strong>Products</strong></MDBBtn></h4>
                            <MDBCollapse id="collapse3" isOpen={collapseID}>
                                <ul className="list-unstyled">
                                    <li><a href="#">Air Touch</a></li>
                                </ul>
                            </MDBCollapse>
                            <h4><MDBBtn className="btn-collapse" onClick={this.toggleCollapse("collapse2")}><strong>Services</strong></MDBBtn></h4>
                            <MDBCollapse id="collapse2" isOpen={collapseID}>
                                <ul class="list-unstyled">
                                    <li><a href="#">IT Solutions</a></li>
                                    <li><a href="#">AI Solutions</a></li>
                                    <li><a href="#">Product Development</a></li>

                                </ul>
                            </MDBCollapse>
                        </MDBCol>
                        <MDBCol md="2" className="links">


                            <h4><MDBBtn className="btn-collapse" onClick={this.toggleCollapse("collapse1")}><strong>Quick Links</strong></MDBBtn></h4>
                            <MDBCollapse id="collapse1" isOpen={collapseID}>
                                <ul class="collapse dont-collapse-sm" class="list-unstyled">
                                    <li><a href="#" >About Us</a></li>
                                    <li><a href="#">Get Instant Quote</a></li>
                                    <li><a href="#">Contact Us</a>
                                    </li>
                                </ul>
                            </MDBCollapse>
                        </MDBCol>
                        <MDBCol md="4" className="news shadow-box-example z-depth-1-half">

                            <p >Interested in getting updates on our new<br />
                                <span className="borde"> products</span>, services, discounts etc.
                            </p>
                            <h4 class="font-weight-bold">Subscribe to our Newsletter</h4>
                            <p>
                                <div style={{ display: "flex", maxWidth: "300px" }} class="input-group">
                                    <input type="text" className="form-control form" placeholder="Email Address" />
                                    <span >
                                        <MDBBtn className="btn" color="dark"><FontAwesomeIcon className="font btn-icon" icon={faGreaterThan} size="2x" /></MDBBtn>
                                    </span>
                                </div>
                            </p>

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <MDBRow className="copy">
                    <MDBCol xs="12" sm="3" md="4">
                        <p className="text-left foo"> HelixSmartLabs Private Limited</p>
                    </MDBCol>
                    <MDBCol xs="12" sm="3" md="4">
                        <div className="text-center center-block">
                            <a href=""><FontAwesomeIcon className="font" icon={faFacebookSquare} size="2x" /></a>
                            <a href=""><FontAwesomeIcon className="font" icon={faLinkedin} size="2x" /></a>
                            <a href=""><FontAwesomeIcon className="font" icon={faInstagram} size="2x" /></a>

                        </div>
                    </MDBCol>
                    <MDBCol xs="12" sm="4" md="4" >

                        <p className="text-right foo">&copy; 2020 , All rights reserved.</p>
                    </MDBCol>


                </MDBRow>

            </MDBFooter>
        );
    }
}

export default FooterPage;