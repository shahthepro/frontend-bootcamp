import React from 'react';
import { Counter } from './components/Counter';

export class App extends React.Component<any, any> {
  render() {
    let text = 'My App';
    return (
      <div className="App">
        <Counter text="Cats"></Counter>
        <Counter text="Dogs"></Counter>
        <Counter text="Horses"></Counter>
      </div>
    );
  }
}
