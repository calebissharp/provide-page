import React, { Component, PropTypes } from 'react';
import provide from 'react-redux-provide';
import { Link } from '../../src/index';

@provide
export default class Test extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    pushWindowPath: PropTypes.func.isRequired,
    replaceWindowPath: PropTypes.func.isRequired,
    windowPath: PropTypes.string.isRequired,
    setDocumentTitle: PropTypes.func.isRequired,
    documentTitle: PropTypes.string.isRequired,
    historyData: PropTypes.object
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
