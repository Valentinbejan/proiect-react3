/*
import React, { useState } from 'react';

import { Button } from 'antd';

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>numar: {count}</p>
      <Button type="primary" onClick={handleClick}>Creste numarul</Button>
    </div>
  );
}

export default Counter;
*/


import React, { Component } from 'react';

import { Button } from 'antd';

class Buton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.IncrementItem}>Apasa pentru a creste numarul</Button>
        <Button type="primary" onClick={this.DecreaseItem}>Apasa pentru a scadea numarul</Button>
        <Button type="primary" onClick={this.ToggleClick}>
          { this.state.show ? 'ascunde numarul' : 'arata numarul' }
        </Button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
      </div>
    );
  }
}

export default Buton;


