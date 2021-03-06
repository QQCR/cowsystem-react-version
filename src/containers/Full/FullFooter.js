import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class FullFooter extends Component {
  render() {

    // eslint-disable-next-line
    // const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span>React Version.</span>
        <span className="ml-auto">Powered by <a href="https://coreui.io/react">CoreUI for React</a></span>
      </React.Fragment>
    );
  }
}

FullFooter.propTypes = propTypes;
FullFooter.defaultProps = defaultProps;

export default FullFooter;
