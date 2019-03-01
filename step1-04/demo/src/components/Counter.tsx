import React from 'react';
import { Button } from './Button';
import './Counter.css';

export class Counter extends React.Component<any, any> {
  boundedUpdateState: Function;

  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    this.boundedUpdateState = this.updateState.bind(this);
  }

  render() {
    return (
      <div className="counter">
        <div className="text">{this.state.counter} {this.props.text}</div>
        <div className="button"><Button onClick={this.boundedUpdateState}>+1</Button></div>
      </div>
    );
  }

  updateState() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
}
