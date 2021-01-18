import React, { Component } from "react"
import { MDBCol, MDBContainer, MDBRow, MDBBtn, MDBBox, MDBIconMDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBIcon, MDBCard } from "mdbreact";
import '../App.css'

class Work extends Component {
    state = {
        collapseID: ""
    }

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));



    render() {
        const { collapseID } = this.state;
        return (
            <MDBBox className="feature-box">
                <MDBContainer className="cont" >
                    <MDBRow >
                        <MDBCol className="work-row1">
                            <p>Have a Look </p>
                            <hr className="line"></hr>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol className="work-row2">
                            <p><strong>Featured Work</strong></p>
                        </MDBCol>
                    </MDBRow>

                </MDBContainer>
                <MDBContainer>
                    <MDBRow className="feature-img-row">

                        <MDBCol md="4">
                            <MDBCard wide className="feature-img-col">
                                <MDBCardImage cascade className="img-fluid z-depth-2" src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg" />

                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="4">

                        </MDBCol>

                        <MDBCol md="4">
                            <MDBCard wide className="feature-img-col">
                                <MDBCardImage cascade className="img-fluid z-depth-2" src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg" />

                            </MDBCard>
                        </MDBCol>

                    </MDBRow>
                    <MDBRow>
                        <MDBCol className="feature-btn-col">
                            <MDBBtn className="feature-btn" ><p><div><div className="feature-btn-text">View More</div><MDBIcon size="2x" icon={"angle-right"}></MDBIcon></div></p></MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

            </MDBBox>
        );
    }
}

export default Work;