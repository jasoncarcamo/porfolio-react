import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css';

class NavBar extends React.Component{
    render(){
        return (
        <nav id='nav-links' >
          
          
          <NavLink exact to='/' activeStyle={{
            fontWeight: 900,
            fontSize: '2em',
            transition: 'all ease-in-out .1s',
            color: 'red'
          }} onClick={this.props.onClick}>Home</NavLink>

          <NavLink to='/projects' activeStyle={{
            fontWeight: 900,
            color: 'red',
            fontSize: '2em',
            transition: 'all ease-in-out .1s',
          }} onClick={this.props.onClick}>Projects</NavLink>

          <NavLink to='/about' activeStyle={{
            fontWeight: 900,
            color: 'red',
            fontSize: '2em',
            transition: 'all ease-in-out .1s',
          }} onClick={this.props.onClick}>About</NavLink>

          <NavLink to='/skills' activeStyle={{
            fontWeight: 900,
            color: 'red',
            fontSize: '2em',
            transition: 'all ease-in-out .1s',
          }} onClick={this.props.onClick}>Skills</NavLink>
        
        </nav>
        )
    }
}


export default NavBar;