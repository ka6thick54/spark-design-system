/* global fetch window CustomEvent */
import React from 'react';

class IconSet extends React.Component {
  constructor() {
    super();
    this.state = { icons: '' };
  }

  componentDidMount() {
    fetch('sprk-icons.svg')
      .then(r => r.text())
      .then((text) => {
        this.setState({ icons: text });
      }).then(() => {
        window.dispatchEvent(new CustomEvent('icons-loaded'));
      });
  }

  render() {
    const { icons } = this.state;
    return (
      <div dangerouslySetInnerHTML={{ __html: icons }} />
    );
  }
}

export default IconSet;
