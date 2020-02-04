import React from 'react';
import './App.css';
import {Link, withRouter} from "react-router-dom";
import logo from './FlatyLogo.png';
import {Container, Row, Col} from 'reactstrap';

class MyOffers extends React.Component {

    render() {

        return (
            <div className="App-header">
                <h2>My Offers</h2>
                <Container>
                    <Row>
                        <Col>
                            <Row><label>offer 1</label></Row>
                            <Row>
                                <img src={logo} className="Offer-pic"/>
                            </Row>
                            <Row> <button>delete</button>
                                <button>modify</button>
                            </Row>

                        </Col>

                        <Col>
                            <Row><label>offer 2</label></Row>
                            <Row>
                                <img src={logo} className="Offer-pic"/>
                            </Row>
                            <Row> <button>delete</button>
                                <button>modify</button>
                            </Row>

                        </Col>
                        <Col>
                            <Row><label>offer 3</label></Row>
                            <Row>
                                <img src={logo} className="Offer-pic"/>
                            </Row>
                            <Row> <button>delete</button>
                                <button>modify</button>
                            </Row>
                        </Col>
                    </Row>

                    <br/>
                    <Row>
                        <Col>
                            <Row><label>offer 4</label></Row>
                            <Row>
                                <img src={logo} className="Offer-pic"/>
                            </Row>
                            <Row> <button>delete</button>
                                <button>modify</button>
                            </Row>

                        </Col>

                        <Col>
                            <Row><label>offer 5</label></Row>
                            <Row>
                                <img src={logo} className="Offer-pic"/>
                            </Row>
                            <Row> <button>delete</button>
                                <button>modify</button>
                            </Row>

                        </Col>
                        <Col>
                            <Row><label>offer 6</label></Row>
                            <Row>
                                <img src={logo} className="Offer-pic"/>
                            </Row>
                            <Row> <button>delete</button>
                                <button>modify</button>
                            </Row>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default withRouter(MyOffers);