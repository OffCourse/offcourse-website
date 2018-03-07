import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  render: PropTypes.func.isRequired,
};

class ScrollWatch extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { scrollX, scrollY } = window;

    this.setState({
      x: scrollX,
      y: scrollY,
    });
  }

  render() {
    const { render } = this.props;
    const { x, y } = this.state;

    return render(x, y);
  }
}

ScrollWatch.propTypes = propTypes;

export default ScrollWatch;
