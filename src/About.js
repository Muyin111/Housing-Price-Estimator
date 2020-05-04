import React from 'react'


function About() {
    return (
        <React.Fragment>
            <header style={headerStyle}>
                <h1> About </h1>
            </header>
            <p style={pStyle}>
                This website is part of our senior design project at The city College of New York.
                <br/>We are building a Recurrent Neural Network Model that can predict the future prices of the houses in a given zipcode.
                <br />by
                <br />Muyin, Daouda, Sabrina, Asif
            </p>
            
        </React.Fragment>
        
        )
}

const headerStyle = {
    background: 'black',
    color: 'white',
    textAlign: 'left',
    padding: '5px'
}

const pStyle = {
    background: 'lightgray',
    color: 'black',
    textAlign: 'center',
    padding: '5px'
}


export default About;