import React, { Component } from 'react';
import './Logo.css';
import Logo2 from './Logo.png';
export default class Header extends Component {
    render(){
        return (
            <div className="header">
            <img id="hlogo" src={Logo2}/>
            </div>
        )
    }
}