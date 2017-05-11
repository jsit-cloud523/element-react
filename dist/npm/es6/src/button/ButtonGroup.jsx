/*       */

import React from 'react';
import { Component } from '../../libs';

export default class ButtonGroup extends Component {
  render()                     {
    return (
      <div style={this.style()} className={this.className('el-button-group')}>
        {this.props.children}
      </div>
    )
  }
}
