import React, { Component } from 'react';

export class SearchBar extends Component {
    render() {
        return (

            <div style={searchStyle}>
                <form style={{ display: 'flex' }}>
                    <input
                        type="text"
                        name="title"
                        style={{ flex: '10', padding: '10px' }}
                        placeholder="Enter Zipcode ..."
                    />
                    <input
                        type="submit"
                        value="Submit"
                        className="btn"
                        style={{ flex: '1' }}
                    />
                </form>
            </div>
        )
    }
}


const searchStyle = {
   
    width: '70%',
    float: 'center',
    padding: '20px',
    margin: '150px',
    border: '5px'
}

export default SearchBar;