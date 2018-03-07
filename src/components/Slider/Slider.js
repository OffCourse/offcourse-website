import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react'

import './style.less';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    content: PropTypes.string,
  }))
};

const defaultProps = {
  items: [],
};

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItemIndex: 0,
    }
  }

  render() {
    const { items } = this.props;
    const { selectedItemIndex } = this.state;
    const selectedItem = items[selectedItemIndex];

    return (
      <div>
        <List horizontal>
          {items.map((item, index) => {
            return (
              <List.Item
                onClick={() => {
                  this.setState({ selectedItemIndex: index });
                }}
              >
                {index + 1}. {item.name}
              </List.Item>
            );
          })}
        </List>

        {selectedItem &&
          <div>
            <p>{selectedItem.content}</p>
          </div>
        }

      </div>
    )
  }
};

Slider.propTypes = propTypes;
Slider.defaultProps = defaultProps;

export default Slider;
