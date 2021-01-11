import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn } from "mdbreact";
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'





import logo from '../assests/IMG-1332.png'

const FooterPage = () => {
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
                        <h4><strong>Products</strong></h4>
                        <ul className="list-unstyled">
                            <li><a href="#">Air Touch</a></li>

                        </ul>
                        <h4><strong>Services</strong></h4>
                        <ul class="list-unstyled">
                            <li><a href="#">IT Solutions</a></li>
                            <li><a href="#">AI Solutions</a></li>
                            <li><a href="#">Product Development</a></li>

                        </ul>
                    </MDBCol>
                    <MDBCol md="2" className="links">
                        <h4><strong>Quick Links</strong></h4>
                        <ul class="collapse dont-collapse-sm" class="list-unstyled">
                            <li><a href="#" >About Us</a></li>
                            <li><a href="#">Get Instant Quote</a></li>
                            <li><a href="#">Contact Us</a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="4" className="news shadow-box-example z-depth-1-half">

                        <p >Interested in getting updates on our new<br />
                            <span className="borde"> products</span>, services, discounts etc.
                            </p>
                        <h4 class="font-weight-bold">Subscribe to our Newsletter</h4>
                        <p>
                            <div class="input-group">
                                <input type="text" className="form-control form " maxLength={5} placeholder="Email Address" />
                                <span >
                                    <MDBBtn color="dark"><strong></strong></MDBBtn>
                                </span>
                            </div>
                        </p>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBRow className="copy">
                <MDBCol md="4">
                    <p class="text-left"> HelixSmartLabs Private Limited</p>
                </MDBCol>
                <MDBCol md="4">
                    <div className="text-center center-block">
                        <a href=""><FontAwesomeIcon className="font" icon={faFacebookSquare} size="2x" /></a>
                        <a href=""><FontAwesomeIcon className="font" icon={faLinkedin} size="2x" /></a>
                        <a href=""><FontAwesomeIcon className="font" icon={faInstagram} size="2x" /></a>

                    </div>
                </MDBCol>
                <MDBCol>

                    <p class="text-right">&copy; 2020 , All rights reserved.</p>
                </MDBCol>


            </MDBRow>

        </MDBFooter>
    );
}

export default FooterPage;