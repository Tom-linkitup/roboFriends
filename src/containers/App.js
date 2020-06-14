import React from "react"
import CardList from "../components/CardList"
import Searchbox from "../components/Searchbox"
import "./App.css"
import Scroll from "../components/Scroll.js"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ""
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
    }
    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value })
        
    }
    render(){
        const filteredRobots = this.state.robots.filter(type => {
            return type.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots.length === 0){
            return <h1>Loading</h1>
        }else {
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <Searchbox searchChange = {this.onSearchChange}/>
                    <Scroll>
                    <CardList robots = {filteredRobots}/>
                    </Scroll>
                </div>
            )
        }
    } 
}

export default App