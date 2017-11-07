import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ documentTitle }) => (
  <div className="title">
    {documentTitle}
  </div>
);

Title.propTypes = {
  setDocumentTitle: PropTypes.func.isRequired,
  documentTitle: PropTypes.string.isRequired
};

export default Title;
