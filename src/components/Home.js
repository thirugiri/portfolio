import React, {Component} from 'react';
import {Button, Icon, Modal, Navbar, NavItem, Parallax} from 'react-materialize';
import NavbarMenu from './NavbarMenu';
import About from './About';
import Portfolio from './Portfolio';
import FooterContent from './FooterContent'


class Home extends Component{
    render(){
        
        return(
            <div>
                <NavbarMenu />
                <About />
                <Portfolio />
                <FooterContent />
            </div>
        );
    }
}



export default Home;