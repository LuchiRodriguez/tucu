import PropTypes from 'prop-types';
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error("Error capturado en ErrorBoundary:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return <h1>Ocurrió un error: {this.state.error?.message}</h1>;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
