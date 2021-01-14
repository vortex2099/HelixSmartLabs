import React, { Component } from "react"
import { MDBCol, MDBContainer, MDBRow, MDBBtn, MDBCollapse, MDBBox, MDBIcon } from "mdbreact";
import '../App.css'


class Quote extends Component {



    render() {

        return (
            <MDBBox className="quote-box">
                <MDBContainer className="cont" >
                    <MDBRow >
                        <MDBCol className="work-row1">
                            <p>Skip the Hassle</p>
                            <hr className="line"></hr>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol className="work-row2">
                            <p><strong>Get your Work done Now</strong></p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <MDBBtn className="quote-btn"><p><div className="quote-span">Get an Instant Quote</div><span><MDBIcon size="2x" icon={"angle-right"}></MDBIcon></span></p></MDBBtn>
                        </MDBCol>
                    </MDBRow>

                </MDBContainer>

            </MDBBox>
        );
    }
}

export default Quote;