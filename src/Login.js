import React, { Component } from 'react'


class Login extends Component {
    render() {
        return (
            <div style={loginStyle}>
                <form style={formStyle}>
                    {/* <div style={imgContainerStyle}>
                        <img src="" alt="Avatar" style={imgAvatStyle}/>
                    </div> */}

                    <div style={{ textAlign: 'center' }}>
                        <h2>Sign in</h2>
                    </div>

                    <div style={containerStyle}>
                        <label><b>Email</b></label>
                        <input type="text" style={{ width: '100%', padding: '12px 20px', margin: '8px 0', display: 'inline-block', border: '1px solid #ccc', borderSizing: 'border-box' }} placeholder="Enter Email" name="uname" required />

                        <label><b>Password</b></label>
                        <input type="password" style={{ width: '100%', padding: '12px 20px', margin: '8px 0', display: 'inline-block', border: '1px solid #ccc', borderSizing: 'border-box' }} placeholder="Enter Password" name="psw" required />

                        <button type="submit" style={buttonStyle}>Login</button>

                        {/* <label>
                            <input type="checkbox" checked="checked" name="remember">Remember Me</input>
                        </label> */}
                        <label>Remember me?</label>
                        <input type="checkbox" style={{ marginLeft: '5px' }} checked="checked" name="remember" />
                    </div>

                    <div style={lastDivStyle}>
                        <button type="button" style={cancelbtnStyle}>Cancel</button>
                        <span style={pswStyle}>Forgot <a href="#">password?</a></span>
                    </div>
                </form>
            </div>

        )
    }
}

const loginStyle = {
    width: '40%',
    padding: '40px',
    margin: '0 auto',
    border: '10px'
}


const formStyle = {
    border: '3px solid #f1f1f1',
    background: 'white'
}

const inputStyle = {
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    display: 'inline-block',
    border: '1px solid #ccc',
    boxSizing: 'border-box'
}

const buttonStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '14px 20px',
    margin: '8px 0',
    border: 'none',
    cursor: 'pointer',
    width: '100%'
}

const cancelbtnStyle = {
    backgroundColor: '#f44336',
    color: 'white',
    padding: '10px 18px',
    margin: '8px 0',
    border: 'none',
    cursor: 'pointer',
    width: 'auto'
}

const imgContainerStyle = {
    textAlign: 'center',
    margin: '24px 0 12px 0'
}

const imgAvatStyle = {
    width: '40%',
    borderRadius: '50%'
}

const containerStyle = {
    padding: '16px'
}

const pswStyle = {
    float: 'right',
    paddingTop: '16px'
}

const lastDivStyle = {
    backgroundColor: "#f1f1f1"
}



export default Login;
