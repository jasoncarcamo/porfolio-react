import React from 'react';
import './Skills.css';

class Skills extends React.Component{
    render(){
        return (
            <section id='skills'>
                <section id='frontend'>
                    <header><h1>Frontend</h1></header>
                    <ul id='frontend-skills'>
                        <li className='box-shadow'>Html (semantics)</li>
                        <li className='box-shadow'>Css</li>
                        <li className='box-shadow'>JavaScript</li>
                        <li className='box-shadow'>Web APIs</li>
                        <li className='box-shadow'>Ajax</li>
                        <li className='box-shadow'>JSON</li>
                        <li className='box-shadow'>JQuery</li>
                        <li className='box-shadow'>React.js</li>
                        <li className='box-shadow'>CORS</li>
                        <li className='box-shadow'>REST</li>
                        <li className='box-shadow'>React Native</li>
                        <li className='box-shadow'>SEO</li>

                    </ul>
                </section>

                <section id='backend'>
                    <header><h1>Backend</h1></header>

                    <ul id='backend-skills'>
                        <li className='box-shadow'>Node.js</li>
                        <li className='box-shadow'>Express.js</li>
                        <li className='box-shadow'>RESTful API</li>
                        <li className='box-shadow'>Relational Database</li>
                        <li className='box-shadow'>SQL</li>
                        <li className='box-shadow'>PostgreSQL</li>
                        <li className='box-shadow'>Knex.js</li>
                        <li className='box-shadow'>Unit, Integration, and Test Driven testing</li>
                        <li className='box-shadow'>Mocha.js</li>
                        <li className='box-shadow'>Jest.js</li>
                        <li className='box-shadow'>Authentication</li>
                        <li className='box-shadow'>Git</li>
                    </ul>

                </section>
            </section>
        )
    }
}

export default Skills;