import React from 'react';


function Header() {
    return (
        <header style={headerStyle}>
            <h1> Housing Price Estimator </h1>
            <h3> Find Future Price of Your House  </h3>        
        </header>
    )
}

const headerStyle = {
    background: 'Red',
    color: 'white',
    textAlign: 'center',
    padding: '20px'
}
export default Header;