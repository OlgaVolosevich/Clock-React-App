import React, { Component } from 'react';
import './App.scss';
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
      <div className="app">
        <DateInfo  date={this.state.date}/>
        <Clock time={this.state.date}/>
      </div>
    )
  }
}

export default App;
