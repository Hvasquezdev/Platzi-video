import React, { Component } from 'react';

// Components
import ErrorLayout from '../components/error/index';

class ErrorContainer extends Component {
  state = {
    handleError: false
  }

  componentDidCatch(error, info) {
    this.setState({
      handleError: true,
    })
  }

  render() {
    if (this.state.handleError) {
      return (
        <ErrorLayout />
      );
    } else {
      return (
        this.props.children
      );
    }
  }
}

export default ErrorContainer;