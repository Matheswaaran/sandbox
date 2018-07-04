import React from 'react';

class Datee extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: Date.now(), isToggled: false};
    this.sample = this.sample.bind(this);
  }

  componentDidMount(){
    this.timerID = setInterval(() => {this.tick();},1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({date: this.state.date+1000});
  }

  sample(ts){
    this.setState((prevState) => ({date: ts * 1000, isToggled: !prevState.isToggled}));
  }

  render() {
    return (
      <div>
      <h1>
        Today is {new Date(this.state.date).getDate()+"/"
        +(new Date(this.state.date).getMonth()+1)+"/"
        +new Date(this.state.date).getFullYear()}
      </h1>
      <Clock date={this.state.date} action={this.sample} value={this.state.isToggled} />
      </div>
    );
  }
}

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: Date.now()};
  }

  componentDidMount(){
    this.timerID = setInterval(() => {this.tick();},1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({date: this.state.date+1000});
  }

  render(){
    return (
      <div>
      <h2>{new Date(this.state.date).toLocaleTimeString()}</h2>
      <h2>{new Date(this.props.date).toLocaleTimeString()}</h2>
      <button onClick={this.props.action.bind(this, 1230611504)} disabled={this.props.value}>Click</button>
      </div>
    );
  }
}

export default Datee;
