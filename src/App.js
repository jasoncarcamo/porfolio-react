import React from 'react';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Skills from './Components/Skills';
import About from './Components/About';
import Projects from './Components/Projects';
import faceShot from './Components/Images/face-shot.jfif';


function isActive(match, location){
  
}

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            width: window.innerWidth
        }
    }

  
    toggleMenu = () =>{
        const option = document.getElementById('nav-links');
        
        option.classList.toggle('display');
        
    }

    

   
  
    render(){

            
    return (
      <section id='main-layout'>
        <header id='nav-header'>


          <div id='nav-menu' onClick={this.toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <img  id='jason-logo' src={faceShot} alt='Jason carcamo'/>

          <div id='contacts' className='desktop-view'>
              <ul id='contact-icons'>
                  <li><a href='https://github.com/jasoncarcamo?tab=repositories' target='blank'><FontAwesomeIcon icon={faGithub}/></a></li>
                  <li><a href='https://www.linkedin.com/in/jason-carcamo-78217717b/' target="blank"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                  <li><a href='mailto:jasoncarcamo30@yahoo.com'><FontAwesomeIcon icon={faEnvelope}/></a></li>
              </ul>
          </div>

          <NavBar onClick={this.toggleMenu}/>
        </header>

        <main>
          <Route exact path='/' component={Home}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/skills' component={Skills}/>
          <Route path='/about' component={About}/>
        </main>

        
      </section>
    );
  }
}

export default App;
