import React,{Component} from 'react';
import './css/index.css'
import {Row, Col, Tabs, Tab, Card, CardTitle} from 'react-materialize';
import {Icon} from 'semantic-ui-react';

class Portfolio extends Component{
    render(){
        return(
            <div id="portfolio">
                <div className="section white">
                <div className="row container">
                    <h2 className="header center"><p className='orange-text'>Portfolio</p></h2>
                    <Row>
                        <Col s={12}>
                        <Tabs className='tab-demo z-depth-1 blue-grey darken-4'>
                            <Tab title="All" active><AllProjects /></Tab>
                            <Tab title="Bootstraps" active><Bootstraps /></Tab>
                            <Tab title="PHP" ><PHP /></Tab>
                            <Tab title="ReactJS"><ReactJS /></Tab>
                            <Tab title="ExpressJS"><ExpressJS /></Tab>
                        </Tabs>
                        </Col>
                    </Row>
                    
                </div>
                </div>
            </div>
        );
    }
}
class AllProjects extends Component{
    render(){
        return(
            <Row>
                <Col s={4}>
                    <Card 
                    header={<CardTitle image='https://www.w3schools.com/howto/img_fjords.jpg'>LeoClub of CEG</CardTitle>}>
                        <div class="fixed-action-btn vertical click-to-toggle">
                        <a  class="btn-floating halfway-fab waves-effect waves-light red">
                        <i class="material-icons">add</i></a>
                        <ul>
                            <li><a class="btn-floating red" href="#"><Icon name='github' /></a></li>
                            <li><a class="btn-floating blue" href="#"><Icon name='globe' /></a></li>
                        </ul>
                        </div>
                        <p>A Complete Responsive Website for LEO Club of CEG | Developed using Bootstraps from Scratch</p>
                    </Card>
                </Col>
                <Col s={4}>
                    <Card 
                    header={<CardTitle image='https://www.w3schools.com/howto/img_fjords.jpg'>LeoClub of CEG</CardTitle>}>
                        <div class="fixed-action-btn vertical click-to-toggle">
                        <a  class="btn-floating halfway-fab waves-effect waves-light red">
                        <i class="material-icons">add</i></a>
                        <ul>
                            <li><a class="btn-floating red" href="#"><Icon name='github' /></a></li>
                            <li><a class="btn-floating blue" href="#"><Icon name='globe' /></a></li>
                        </ul>
                        </div>
                        <p>A Complete Responsive Website for LEO Club of CEG | Developed using Bootstraps from Scratch</p>
                    </Card>
                </Col>
            </Row>
        );
    }
}

class Bootstraps extends Component{
    render(){
        return(
            <Row>
                <Col s={4}>
                    <Card 
                    header={<CardTitle image='https://www.w3schools.com/howto/img_fjords.jpg'>LeoClub of CEG</CardTitle>}>
                        <div class="fixed-action-btn vertical click-to-toggle">
                        <a  class="btn-floating halfway-fab waves-effect waves-light red">
                        <i class="material-icons">add</i></a>
                        <ul>
                            <li><a class="btn-floating red" href="#"><Icon name='github' /></a></li>
                            <li><a class="btn-floating blue" href="#"><Icon name='globe' /></a></li>
                        </ul>
                        </div>
                        <p>A Complete Responsive Website for LEO Club of CEG | Developed using Bootstraps from Scratch</p>
                    </Card>
                </Col>
                <Col s={4}>
                    <Card 
                    header={<CardTitle image='https://www.w3schools.com/howto/img_fjords.jpg'>LeoClub of CEG</CardTitle>}>
                        <div class="fixed-action-btn vertical click-to-toggle">
                        <a  class="btn-floating halfway-fab waves-effect waves-light red">
                        <i class="material-icons">add</i></a>
                        <ul>
                            <li><a class="btn-floating red" href="#"><Icon name='github' /></a></li>
                            <li><a class="btn-floating blue" href="#"><Icon name='globe' /></a></li>
                        </ul>
                        </div>
                        <p>A Complete Responsive Website for LEO Club of CEG | Developed using Bootstraps from Scratch</p>
                    </Card>
                </Col>
            </Row>
        );
    }
}
class PHP extends Component{
    render(){
        return(
            <Row>
                <Col s={4}>
                    <Card 
                    header={<CardTitle image='https://www.w3schools.com/howto/img_fjords.jpg'>PHP of CEG</CardTitle>}>
                        <div class="fixed-action-btn vertical click-to-toggle">
                        <a  class="btn-floating halfway-fab waves-effect waves-light red">
                        <i class="material-icons">add</i></a>
                        <ul>
                            <li><a class="btn-floating red" href="#"><Icon name='github' /></a></li>
                            <li><a class="btn-floating blue" href="#"><Icon name='globe' /></a></li>
                        </ul>
                        </div>
                        <p>A Complete Responsive Website for LEO Club of CEG | Developed using Bootstraps from Scratch</p>
                    </Card>
                </Col>
                <Col s={4}>
                    <Card 
                    header={<CardTitle image='https://www.w3schools.com/howto/img_fjords.jpg'>LeoClub of CEG</CardTitle>}>
                        <div class="fixed-action-btn vertical click-to-toggle">
                        <a  class="btn-floating halfway-fab waves-effect waves-light red">
                        <i class="material-icons">add</i></a>
                        <ul>
                            <li><a class="btn-floating red" href="#"><Icon name='github' /></a></li>
                            <li><a class="btn-floating blue" href="#"><Icon name='globe' /></a></li>
                        </ul>
                        </div>
                        <p>A Complete Responsive Website for LEO Club of CEG | Developed using Bootstraps from Scratch</p>
                    </Card>
                </Col>
            </Row>
        );
    }
}
class ReactJS extends Component{
    render(){
        return(
            <Row>
                <Col s={4}>
                    <Card 
                    header={<CardTitle image='https://www.w3schools.com/howto/img_fjords.jpg'>LeoClub of CEG</CardTitle>}>
                        <div class="fixed-action-btn vertical click-to-toggle">
                        <a  class="btn-floating halfway-fab waves-effect waves-light red">
                        <i class="material-icons">add</i></a>
                        <ul>
                            <li><a class="btn-floating red" href="#"><Icon name='github' /></a></li>
                            <li><a class="btn-floating blue" href="#"><Icon name='globe' /></a></li>
                        </ul>
                        </div>
                        <p>A Complete Responsive Website for LEO Club of CEG | Developed using Bootstraps from Scratch</p>
                    </Card>
                </Col>
                <Col s={4}>
                    <Card 
                    header={<CardTitle image='https://www.w3schools.com/howto/img_fjords.jpg'>LeoClub of CEG</CardTitle>}>
                        <div class="fixed-action-btn vertical click-to-toggle">
                        <a  class="btn-floating halfway-fab waves-effect waves-light red">
                        <i class="material-icons">add</i></a>
                        <ul>
                            <li><a class="btn-floating red" href="#"><Icon name='github' /></a></li>
                            <li><a class="btn-floating blue" href="#"><Icon name='globe' /></a></li>
                        </ul>
                        </div>
                        <p>A Complete Responsive Website for LEO Club of CEG | Developed using Bootstraps from Scratch</p>
                    </Card>
                </Col>
            </Row>
        );
    }
}
class ExpressJS extends Component{
    render(){
        return(
            <Row>
                <Col s={4}>
                    <Card 
                    header={<CardTitle image='https://www.w3schools.com/howto/img_fjords.jpg'>LeoClub of CEG</CardTitle>}>
                        <div class="fixed-action-btn vertical click-to-toggle">
                        <a  class="btn-floating halfway-fab waves-effect waves-light red">
                        <i class="material-icons">add</i></a>
                        <ul>
                            <li><a class="btn-floating red" href="#"><Icon name='github' /></a></li>
                            <li><a class="btn-floating blue" href="#"><Icon name='globe' /></a></li>
                        </ul>
                        </div>
                        <p>A Complete Responsive Website for LEO Club of CEG | Developed using Bootstraps from Scratch</p>
                    </Card>
                </Col>
                <Col s={4}>
                    <Card 
                    header={<CardTitle image='https://www.w3schools.com/howto/img_fjords.jpg'>LeoClub of CEG</CardTitle>}>
                        <div class="fixed-action-btn vertical click-to-toggle">
                        <a  class="btn-floating halfway-fab waves-effect waves-light red">
                        <i class="material-icons">add</i></a>
                        <ul>
                            <li><a class="btn-floating red" href="#"><Icon name='github' /></a></li>
                            <li><a class="btn-floating blue" href="#"><Icon name='globe' /></a></li>
                        </ul>
                        </div>
                        <p>A Complete Responsive Website for LEO Club of CEG | Developed using Bootstraps from Scratch</p>
                    </Card>
                </Col>
            </Row>
        );
    }
}
export default Portfolio;