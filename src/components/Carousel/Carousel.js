import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.less';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  render: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.handleClickPrev = this.handleClickPrev.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);

    this.state = {
      index: 0,
    };
  }

  handleClickPrev() {
    const { items } = this.props;
    const { index } = this.state;

    if (index > 0) {
      this.setState({ index: index - 1 });
    } else {
      this.setState({ index: items.length - 1 });
    }
  }

  handleClickNext() {
    const { items } = this.props;
    const { index } = this.state;

    if (index < items.length - 1) {
      this.setState({ index: index + 1 });
    } else {
      this.setState({ index: 0 });
    }
  }

  render() {
    const { items, render } = this.props;
    const { index } = this.state;

    return (
      <div className="Carousel">
        <div className="ui grid container">
          <div className="ui centered row">
            <div className="sixteen wide tablet ten wide computer column">

              <div className="Carousel__nav">
                {items.map((item, itemIndex) => {
                  const active = index === itemIndex;

                  return (
                    <a
                      className={`Carousel__nav-item ${active ? 'active' : ''}`}
                      onClick={() => { this.setState({ index: itemIndex }); }}
                    >
                      {item.title}
                    </a>
                  );
                })}
              </div>


              <div className="Carousel__item">
                <div
                  className="Carousel__item-prev"
                  onClick={this.handleClickPrev}
                />
                {render(items[index])}
                <div
                  className="Carousel__item-next"
                  onClick={this.handleClickNext}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Carousel.propTypes = propTypes;

export default Carousel;
