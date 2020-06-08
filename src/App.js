import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import About from './About';
import Login from './Login';
import Register from './Register';
import Contact from './Contact';
import {Line} from 'react-chartjs-2';
import './App.css';

const admin = require("firebase-admin");
const db = admin.database();
const root = 'real-estate-market-forecasts'

const DATE_LABELS = ['2016-10', '2016-11', '2016-12', '2017-01', '2017-02', '2017-03', '2017-04','2017-05',
'2017-06', '2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12','2018-01',
'2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08','2018-09',
'2018-10', '2018-11', '2018-12', '2019-01', '2019-02', '2019-03', '2019-04','2019-05',
'2019-06', '2019-07', '2019-08', '2019-06', '2019-07', '2019-08', '2019-09','2019-10',
'2019-11', '2019-12', '2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06',
'2020-07', '2020-08', '2020-09', '2020-10', '2020-11', '2020-12', '2021-01', '2021-02', 
'2021-03', '2021-04', '2021-05', '2021-06', '2021-07', '2021-08', '2021-09', 
'2021-10','2021-11', '2021-12']

class App extends Component {

    constructor() {
        super()
        this.state = {
            labels: DATE_LABELS,
            datasets: [
                {
                label: 'Real',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'black',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [],
                },
                {
                label: 'Forecasts',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'green',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [],
                }, 
            ]
        }    
    }

    handleButtonClick = (zipcode, e) => {
        e.preventDefault()
        let ref = root + '/' + zipcode
        ref.on("value", function(snapshot) {
            let data = snapshot.val()
            let actual = data.actual
            let forecasts = data.forecasts
            let newState = {
                labels: DATE_LABELS,
                datasets: [
                    {
                    label: 'Real',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'black',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: actual
                    },
                    {
                    label: 'Forecasts',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'green',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: forecasts
                    }, 
                ]
            }    
            this.setState(newState)
          }, function (errorObject) {
            console.log("Error fetching data: " + errorObject.code);
          });        
    }

    render() {

        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header />
                        <Route exact path="/" render={props => (
                            <div>
                                <NavBar />
                                <SearchBar handleButtonClick={this.handleButtonClick} />
                            </div>
                        )} />
                        <Route path="/about" component={About} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/contact" component={Contact} />
                    </div>
                    <div style={{marginLeft: '12%', marginRight: '12%', width: '76%', height: '100px'}}>
                        <Line
                            data={this.state}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Real estate forecasts',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'right'
                                }
                            }}
                        />
                    </div>
                </div>
            </Router>
        );
    }
} 

export default App;
