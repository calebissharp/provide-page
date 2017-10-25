import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

export default class Test extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    setDocumentTitle: PropTypes.func.isRequired,
    documentTitle: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="test">
        {this.renderItems()}
      </div>
    );
  }

  renderItems() {
    return this.props.list.map(
      (item, index) => <Link key={index} { ...item } />
    );
  }
}
