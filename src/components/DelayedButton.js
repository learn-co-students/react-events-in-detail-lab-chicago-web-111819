

import React, {Component} from 'react';

export default class DelayedButton extends Component {

  delayedBtn = evt => {
    // hold onto event to use it after 'setTimeout()'
    evt.persist();
    window.setTimeout((() => this.props.onDelayedClick(evt)), this.props.delay);
  }

  render() {
    return (
      <button id="btn" onClick={this.delayedBtn}>Delayed Btn</button>
    );
  }
}


