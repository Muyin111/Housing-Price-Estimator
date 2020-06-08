import React, { Component } from 'react';

export class SearchBar extends Component {

    constructor() {
        super()
        this.zipcode = ''
    }

    handleChange = (event) => {
        this.zipcode = event.target.value
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleButtonClick(this.zipcode, e)
    }
    render() {
        return (

            <div style={searchStyle}>
                <form style={{ display: 'flex' }} onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        onChange = {this.handleChange}
                        style={{ flex: '10', padding: '10px' }}
                        placeholder="Enter Zipcode ..."
                    />
                    <input
                        type="submit"
                        value="Submit"
                        style={{marginLeft: '5px', color: 'white', backgroundColor: 'black', flex: '1' }}
                    />
                </form>
            </div>
        )
    }
}


const searchStyle = {
   
    width: '50%',
    float: 'center',
    padding: '20px',
    fontSize: '20px',
    marginTop: '0px',
    marginLeft: '25%',
    marginRight: '25%',
    border: '5px'
}

export default SearchBar;
