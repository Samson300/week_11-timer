import React from 'react';
import logo from './logo.svg';
import './App.css';
import TotalTime from './TotalTime';
import TimeRemaining from './TimeRemaining';
import PauseUnpauseButton from './PauseUnpauseButton';
import ResetButton from './ResetButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      total: 0,
      remain: 0,
      pause: 0
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {
            (this.state.time == this.state.total) && this.state.time !== 0 ? <img src="https://media.giphy.com/media/qi29MoLjWNPUI/giphy.gif"></img> : null
          }
          <p>{this.state.time}</p>
          <TotalTime times={this.state.time} handleInput={this._totalTime} total={this.state.total} />
          <TimeRemaining remainTime={this.state.remain} />
          <PauseUnpauseButton pauseButton={this._pauseUnpause} />
          <ResetButton resetButton={this._reset} />
        </header>
      </div>
    );
  }

  componentDidMount() {
    setInterval(() => {
      this._incrementNumber()
      this._remainTime()
    }, 1000)
  }

  _incrementNumber = () => {
    if ((this.state.time < this.state.total) && this.state.pause === 0) {
      this.setState({
        time: this.state.time + 1
      })
    }
  }

  _totalTime = (total) => {
    this.setState({
      time: 0,
      total
    })
  }

  _remainTime = () => {
    if (this.state.pause === 0) {
      this.setState({
        remain: this.state.total - this.state.time
      })
    }
  }
  _pauseUnpause = () => {
    if (this.state.pause === 0) {
      this.setState({
        pause: 1
      })
    } else if (this.state.pause === 1) {
      this.setState({
        pause: 0
      })
    }
  }

  _reset = () => {
    this.setState({
      time: 0,
      total: '',
      remain: 0,
      pause: 0
    })
  }
}

export default App;
