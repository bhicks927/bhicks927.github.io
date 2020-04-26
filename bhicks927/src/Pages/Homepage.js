import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../Styles/Homepage.css";

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Jumbotron className="py-3">
                    <div className="jumbotron-content text-center w-50 m-auto">
                        <h1 className="greeting">{this.props.greeting || "No greeting defined"}</h1>
                        <span className="conciseBio">{this.props.conciseBio}</span>
                        <hr className="my-4"/>
                        <div className="socialMediaLinks text-center">
                            <ul className="px-0">
                                <li className="px-2">Email</li>
                                <li className="px-2">Github</li>
                                <li className="px-2">Linkedin</li>
                            </ul>
                        </div>
                    </div>
                </Jumbotron>

                <Container>
                    <Row className="justify-content-center">
                        <Col>
                            <div className="text-center">

                            </div>
                        </Col>

                        <Col>
                            <div className="text-center">
                                <p>This site is a work in progress. when it is finished, it might even have content to display... maybe.</p>
                            </div>
                        </Col>

                        <Col>
                            <div className="text-center">

                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default Homepage;