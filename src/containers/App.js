import React, { Component } from "react";
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import './App.css';
import Scroll from '../components/Scroll.js';





class App extends Component {
    constructor () {
        super()
        this.state = {
                robots: [],
                Searchfield: ''
        }
    }

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return  response.json();    })
    .then(users => {
        this.setState({robots: users})
    });
    
}

    onSearchChange = (event) => {
        this.setState({Searchfield: event.target.value})
    }

    render (){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.Searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0){
            return <h1>Loading</h1>
        } else {
        return (
            <div className="tc"> 
                <h1 className="f2">Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                <CardList robots={filteredRobots} />
                </Scroll>
            </div>
    
        );
        }
    }
}

export default App;