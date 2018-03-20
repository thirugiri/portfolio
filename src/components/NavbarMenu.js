import React,{Component} from 'react';
import './css/index.css'
import {Navbar,NavItem} from 'react-materialize';
import Scrollchor from 'react-scrollchor';


export default class NavbarMenu extends Component{
    render(){
        return(
            <Navbar brand='Giritharan' className='blue-grey darken-4' right fixed>
                <NavItem><Scrollchor to="#about">About</Scrollchor></NavItem>
                <NavItem><Scrollchor to="#portfolio">Portfolio</Scrollchor></NavItem>
                <NavItem><Scrollchor to="#skills">Skills</Scrollchor></NavItem>
                <NavItem><Scrollchor to="#contact">Contact</Scrollchor></NavItem>
            </Navbar>
        );
    }
}
