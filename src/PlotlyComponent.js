import React from 'react';
import Plotly from 'plotly.js/dist/plotly.js';
import shallowEqual from 'shallowequal';
import deepEqual from 'deep-equal';

var PlotlyComponent = React.createClass({

  displayName: 'Plotly',
  propTypes: {
    data: React.PropTypes.array,
    layout: React.PropTypes.object,
    config: React.PropTypes.object
  },

  shouldComponentUpdate(nextProps) {
    //TODO logic for detecting change in props
    return true;
  },

  componentDidMount() {
    let {data, layout, config} = this.props;
    Plotly.plot(this.container, data, layout, config);
  },

  componentDidUpdate() {
    //TODO use minimal update for given changes
    this.container.data = this.props.data;
    this.container.layout = this.props.layout;
    Plotly.redraw(this.container);

  },

  render: function () {
    let {data, layout, config, ...other } = this.props;
    return <div {...other} ref={(node) => this.container=node} />
  }
});

export default PlotlyComponent;
