import React from 'react';


class ErrorBoundary extends React.Component {

  state = {
    hasError: false,
  };

  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true
    });
  };

  render = () => {
    const {
      children
    } = this.props;
    const {
      hasError
    } = this.state;

    if(hasError) return <p>Ooops! Something went wrong.</p>
    return children;

  };

}


export default ErrorBoundary;