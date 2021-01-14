import React, { Component } from "react"
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn, MDBCollapse, MDBBox, MDBIcon } from "mdbreact";
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
            <MDBBox className="box">
                <MDBContainer className="cont" >
                    <MDBRow >
                        <MDBCol className="work-row1">
                            <p>Creating the Everlasting Experience</p>
                            <hr className="line"></hr>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol className="work-row2">
                            <p><strong>Why Work with us</strong></p>
                        </MDBCol>
                    </MDBRow>

                </MDBContainer>
                <MDBContainer className="cont">
                    <MDBRow>
                        <MDBCol >
                            <MDBBtn className="work-button" onClick={this.toggleCollapse("collapse1")}> <p><strong><MDBIcon className="work-icon" size="1.1x"
                                icon={collapseID === 'collapse1' ? 'angle-down' : 'angle-right'}
                            />Toggle Element</strong></p></MDBBtn>
                            <MDBCollapse className="mbd-collapse" id="collapse1" isOpen={collapseID}>
                                <h6>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing
                                </h6>
                            </MDBCollapse>
                        </MDBCol>

                    </MDBRow>
                    <MDBRow>
                        <MDBCol >
                            <MDBBtn className="work-button" onClick={this.toggleCollapse("collapse2")}> <p><strong><MDBIcon className="work-icon" size="1.1x"
                                icon={collapseID === 'collapse2' ? 'angle-down' : 'angle-right'}
                            />Toggle Element</strong></p></MDBBtn>
                            <MDBCollapse className="mbd-collapse" id="collapse2" isOpen={collapseID}>
                                <h6>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing
                                </h6>
                            </MDBCollapse>
                        </MDBCol>

                    </MDBRow>
                    <MDBRow>
                        <MDBCol >
                            <MDBBtn className="work-button" onClick={this.toggleCollapse("collapse3")}> <p><strong><MDBIcon className="work-icon" size="1.1x"
                                icon={collapseID === 'collapse3' ? 'angle-down' : 'angle-right'}
                            />Toggle Element</strong></p></MDBBtn>
                            <MDBCollapse className="mbd-collapse" id="collapse3" isOpen={collapseID}>
                                <h6>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing
                                </h6>
                            </MDBCollapse>
                        </MDBCol>

                    </MDBRow>
                    <MDBRow>
                        <MDBCol >
                            <MDBBtn className="work-button" onClick={this.toggleCollapse("collapse4")}> <p><strong><MDBIcon className="work-icon" size="1.1x"
                                icon={collapseID === 'collapse4' ? 'angle-down' : 'angle-right'}
                            />Toggle Element</strong></p></MDBBtn>
                            <MDBCollapse className="mbd-collapse" id="collapse4" isOpen={collapseID}>
                                <h6>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing
                                </h6>
                            </MDBCollapse>
                        </MDBCol>

                    </MDBRow>
                    <MDBRow>
                        <MDBCol >
                            <MDBBtn className="work-button" onClick={this.toggleCollapse("collapse5")}> <p><strong><MDBIcon className="work-icon" size="1.1x"
                                icon={collapseID === 'collapse5' ? 'angle-down' : 'angle-right'}
                            />Toggle Element</strong></p></MDBBtn>
                            <MDBCollapse className="mbd-collapse" id="collapse5" isOpen={collapseID}>
                                <h6>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing
                                </h6>
                            </MDBCollapse>
                        </MDBCol>

                    </MDBRow>
                    <MDBRow>
                        <MDBCol >
                            <MDBBtn className="work-button" onClick={this.toggleCollapse("collapse6")}> <p><strong><MDBIcon className="work-icon" size="1.1x"
                                icon={collapseID === 'collapse6' ? 'angle-down' : 'angle-right'}
                            />Toggle Element</strong></p></MDBBtn>
                            <MDBCollapse className="mbd-collapse" id="collapse6" isOpen={collapseID}>
                                <h6>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing
                                </h6>
                            </MDBCollapse>
                        </MDBCol>

                    </MDBRow>
                    <MDBRow>
                        <MDBCol >
                            <MDBBtn className="work-button" onClick={this.toggleCollapse("collapse7")}> <p><strong><MDBIcon className="work-icon" size="1.1x"
                                icon={collapseID === 'collapse7' ? 'angle-down' : 'angle-right'}
                            />Toggle Element</strong></p></MDBBtn>
                            <MDBCollapse className="mbd-collapse" id="collapse7" isOpen={collapseID}>
                                <h6>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing
                                </h6>
                            </MDBCollapse>
                        </MDBCol>

                    </MDBRow>
                    <MDBRow>
                        <MDBCol >
                            <MDBBtn className="work-button" onClick={this.toggleCollapse("collapse8")}> <p><strong><MDBIcon className="work-icon" size="1.1x"
                                icon={collapseID === 'collapse8' ? 'angle-down' : 'angle-right'}
                            />Toggle Element</strong></p></MDBBtn>
                            <MDBCollapse className="mbd-collapse" id="collapse8" isOpen={collapseID}>
                                <h6>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing
                                </h6>
                            </MDBCollapse>
                        </MDBCol>

                    </MDBRow>
                </MDBContainer>
            </MDBBox>
        );
    }
}

export default Work;