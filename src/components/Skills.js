import React, { Component } from 'react';
import { ProgressBar, Row, Col, Button } from 'react-materialize';

export default class Skills extends Component {
    render() {
        return (
            <div id="skills">
                <div className="section white">
                    <div className="row container">
                        <h2 className="header center"><p className='orange-text'>Skills</p></h2>
                        <Row>
                            <Col s={12}>
                                <Col s={3}><Button waves='light'>HTML</Button></Col>
                                <Col s={3}><Button className='red' waves='light'>CSS</Button></Col>
                                <Col s={3}><Button className='blue' waves='light'>JavaScript</Button></Col>
                                <Col s={3}><Button className='Yellow' waves='light'>Bootstraps</Button></Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={12}>
                                <Col s={3}><Button waves='light'>ReactJS</Button></Col>
                                <Col s={3}><Button className='red' waves='light'>AngularJS</Button></Col>
                                <Col s={3}><Button className='blue' waves='light'>PHP</Button></Col>
                                <Col s={3}><Button className='Yellow' waves='light'>ExpressJS</Button></Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={12}>
                                <Col s={3}><Button waves='light'>SQL</Button></Col>
                                <Col s={3}><Button className='red' waves='light'>MongoDB</Button></Col>
                                <Col s={3}><Button className='blue' waves='light'>Github</Button></Col>
                                <Col s={3}><Button className='Yellow' waves='light'>Photoshop</Button></Col>
                            </Col>
                        </Row>
                        
                    </div>
                </div>
            </div>
        );
    }
}