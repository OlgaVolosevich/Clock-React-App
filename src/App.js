import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock/Clock';
import DateInfo from './components/DateInfo/DateInfo';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      date: new Date(),
    }
  }

  componentDidMount() {
    const clockGo = setInterval(
      ()=> this.updateTime(), 1000
    )
  }

  updateTime() {
    this.setState({
      date: new Date()
    })
  }
  render() {

    return(
      <div>
        <DateInfo  date={this.state.date}/>
        <Clock time={this.state.date}/>
      </div>
    )
  }
}

export default App;
