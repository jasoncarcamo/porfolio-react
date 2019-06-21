import React from 'react';
import website1 from './Images/website1.png';
import website2 from './Images/website2.png';
import website3 from './Images/website3.png';
import website4 from './Images/website4.png';
import './Projects.css';

class Projects extends React.Component{
    render(){
        return(
            <section id='projects'>
                <h1>Projects</h1>

                <section id='project-front'>
                    <h2>Frontend</h2>
                    
                    <section className='school-project box-shadow'>
                        <h3>School revamp layout</h3>
                        <p>A prototype of what a school website should look like.</p>
                        
                        <a href='https://jasoncarcamo.github.io/schoollayout/' target='blank'><img className='school-lay' src={website1} alt='A school website layout page'/></a>
                        <p>Used: (Html semantics, Css)</p>
                        <div>
                            <a href='https://jasoncarcamo.github.io/schoollayout/' target='blank'>Live GitHub page</a>
                            <a href='https://github.com/jasoncarcamo/schoollayout' target='blank'>Github repository</a>
                        </div>
                        
                    </section>

                    <section className='school-project box-shadow'>
                        <h3>Yelp revamp layout</h3>
                        <p>I know Yelp can do better, but here is my layout.</p>
                        
                        
                        <a href='https://jasoncarcamo.github.io/yelp-api/' target='blank'><img className='school-lay' src={website2} alt='A better website layout page for Yelp'/></a>
                        
                        <p>Used: (Html, Css, JavaScript, React.js, Web Api(Yelp Api))</p>

                        <div>
                            <a href='https://jasoncarcamo.github.io/yelp-api/' target='blank'>Live GitHub page</a>
                            <a href='https://github.com/jasoncarcamo/schoollayout' target='blank'>Github repository</a>
                        </div>
                        
                    </section>

                    <section className='school-project box-shadow'>
                        <h3>A Rhyming app</h3>
                        <p>A basic web app to help you find rhyming words by language.</p>
                        
                        <a href='https://jasoncarcamo.github.io/reactrhyme/' target='blank'><img className='school-lay' src={website3} alt='A better website layout page for Yelp'/></a>

                        <p>Used: (Html semantics, Css, JavaScript, React.js, Web Api(Rhyme brain Api))</p>

                        <div>
                            <a href='https://jasoncarcamo.github.io/reactrhyme/' target='blank'>Live GitHub page</a>
                            <a href='https://github.com/jasoncarcamo/reactrhyme' target='blank'>Github repository</a>
                        </div>
                        
                    </section>

                    <section className='school-project box-shadow'>
                    <h3>Burger Restaurant layout</h3>
                    <p>A small burger layout project.</p>
                    
                    
                    <a href='https://jasoncarcamo.github.io/burgerrest/' target='blank'><img className='school-lay' src={website4} alt='A picture of a burger Restaurant layout'/></a>
                    
                    <p>Used: (Html, Css)</p>

                    <div>
                        <a href='https://jasoncarcamo.github.io/burgerrest/' target='blank'>Live GitHub page</a>
                        <a href='https://github.com/jasoncarcamo/burgerrest' target='blank'>Github repository</a>
                    </div>
                    
                </section>

                </section>

                <section id='project-back'>
                    <h2>Backend</h2>
                </section>
            </section>
        )
    }
}

export default Projects;