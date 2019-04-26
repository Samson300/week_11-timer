import React from 'react';
import logo from './logo.svg';
import './App.css';
// import TotalTime from './TotalTime';
// import TimeRemaining from './TimeRemaining';
// import PauseUnpauseButton from './PauseUnpauseButton';
// import ResetButton from './ResetButton';
import All from './All';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      total: '',
      remain: 0,
      pause: 0,
      timers: []
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button
            onClick={this._addTimer}
          >ADD TIMER</button>
          <All />
          {
            this.state.timers.map((timer, i) => {
              return (
                <All key={i} />
              )
            })
          }
        </header>
      </div>
    );
  }

  _addTimer = () => {
    this.setState({
      timers: this.state.timers.concat(1)
    })
  }
}

export default App;
