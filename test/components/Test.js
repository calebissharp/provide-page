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
    splitWindowPath: PropTypes.array.isRequired,
    setDocumentTitle: PropTypes.func.isRequired,
    documentTitle: PropTypes.string.isRequired,
    historyData: PropTypes.object
  };

  setPageInfo(props) {
    const { list, windowPath, documentTitle, setDocumentTitle } = props;
    let nextDocumentTitle = documentTitle;

    for (let item of list) {
      if (item.href === windowPath) {
        nextDocumentTitle = item.children;
        break;
      }
    }

    if (nextDocumentTitle !== documentTitle) {
      setDocumentTitle(nextDocumentTitle);
    }
  }

  componentWillMount() {
    this.setPageInfo(this.props);
  }

  componentWillReceiveProps(props) {
    this.setPageInfo(props);
  }

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
