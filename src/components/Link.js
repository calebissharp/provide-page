import React, { Component, PropTypes } from 'react';

export default class Link extends Component {
  static propTypes = {
    href: PropTypes.string,
    onClick: PropTypes.func,
    pushWindowPath: PropTypes.func.isRequired,
    children: PropTypes.any
  };

  render() {
    const { onClick } = this.props;
    const aProps = {
      ...this.props,
      onClick: event => {
        event.stopPropagation();
        event.preventDefault();

        this.props.pushWindowPath(this.props.href);

        if (onClick) {
          onClick.apply(this, arguments);
        }
      }
    };

    return (
      <a { ...aProps } />
    );
  }
}
