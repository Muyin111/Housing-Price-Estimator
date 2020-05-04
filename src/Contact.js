import React from 'react'


function Contact() {
    return (
        <React.Fragment>
            <header style={headerStyle}>
                <h1> Contact </h1>
            </header>
            <p style={pStyle}>
                For any kind of questions or help 
                <br/> Please send an email to  
                <br/> hpe@gmail.com
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

export default Contact;