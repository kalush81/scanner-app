import React, { PureComponent } from "react";

export default class Nav extends PureComponent {
    state = {
      num: 0,
      up: null
    };

  scrollHandler = () => {
    window.pageYOffset > this.state.num ?
      this.setState({ up: true }) :
      this.setState({ up: false });
    this.setState({ num: window.pageYOffset });
  };
 
  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler);
  }

  render() {
    const up = this.state.up
    return (
      <div
        className='Navig'
        style={{
          position: `${up ? 'null' : 'sticky'}`,
          opacity: `${up ? 0.2 : 1}`,
          top: `${up ? '-100px' : 0}`
        }}
      >{this.props.children}</div>
    );
  }
}
