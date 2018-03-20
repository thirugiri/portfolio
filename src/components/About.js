import React,{Component} from 'react';
import './css/index.css'
import {Parallax} from 'react-materialize';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default class About extends Component{
    render(){
        return(
            <div id="about">
                <Parallax imageSrc="https://images.pexels.com/photos/934062/pexels-photo-934062.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/>
                <div className="section white">
                <div className="row container">
                    <h2 className="header center"><p className='orange-text'>About</p></h2>
                    <p className="black-text text-darken-3 lighten-3">Graduated in BE Computer Science and Engineering from College of Engineering Guindy, Anna unversity, Chennai</p>
                    <p className="black-text text-darken-3 lighten-3">Designer/Developer Hybrid. Designing Websites for about 3 years</p>
                    <p className="black-text text-darken-3 lighten-3">Food Enthusiast</p>
                    <p className="black-text text-darken-3 lighten-3">Film Freak</p>
                </div>
                </div>
            </div>
        );
    }
}
