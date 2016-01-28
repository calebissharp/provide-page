import React, { Component, PropTypes } from 'react';
import provide from 'react-redux-provide';
import eventsPropTypes from '../eventsPropTypes';

@provide
export default class Link extends Component {
  static propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,
    hrefTitle: PropTypes.string,
    hrefLang: PropTypes.string,
    media: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    rel: PropTypes.string,
    target: PropTypes.string,
    children: PropTypes.any,
    pushWindowPath: PropTypes.func.isRequired,
    ...eventsPropTypes
  };

  render() {
    const { onClick } = this.props;
    const aProps = {
      ...this.props,
      onClick: event => {
        event.stopPropagation();
        event.preventDefault();

        this.props.pushWindowPath(this.props.href, this.props.hrefTitle);

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
