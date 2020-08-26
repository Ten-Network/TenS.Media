import React from "react";

import "./error-boundary.styles.scss";

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className="error-image-overlay">
          <img
            src="https://i.imgur.com/lKJiT77.png"
            alt="error"
            className="error-image"
          />
          <div className="error-image-text">A Dog Ate this Page</div>
          <div className="error-image-description">
            This page has faced some error, try reloading the page and if the
            problem still persists then try coming back to this page later when
            it is fixed by our team.
            <br />
            <br />
            Your user experience matters to us. We are sorry for the
            inconvenience. :(
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
