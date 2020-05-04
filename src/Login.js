import React, { Component } from 'react';

export class Login extends Component {
    render() {
        return (

            <div style={searchStyle}>

                <form style={{ display: 'flex' }}>
                    <input
                        type="text"
                        name="title"
                        style={{ flex: '10', padding: '10px' }}
                        placeholder="Username "
                    />

                    <input
                        type="text"
                        name="title"
                        style={{ flex: '10', padding: '10px' }}
                        placeholder="Password "
                    />

                    <input
                        type="submit"
                        value="Submit"
                        className="btn"
                        style={{ flex: '1' }}
                        placeholder="Login"
                    />
                </form>
            </div>
        )
    }
}


const searchStyle = {

    width: '80%',
    float: 'center',
    padding: '20px',
    margin: '150px',
    border: '5px'
}

export default Login;