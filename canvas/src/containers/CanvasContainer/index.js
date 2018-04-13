import React, { Component } from 'react';
import Canvas from 'components/Canvas';

class CanvasContainer extends Component {

  constructor(props) {
    super(props);
    this.stage = null;
    this.ctx = null;
    this.animId = null;
    this.w = 0;
    this.h = 0;
  }

  enterFrame = () => {
    this.animId = requestAnimationFrame(this.enterFrame);
    const ctx = this.ctx;
    const x = Math.random() * this.w;
    const y = Math.random() * this.h;
    const size = Math.random() * 10;
    ctx.fillRect(x, y, size, size);
  }

  componentDidMount() {
    this.stage.width = this.w = window.innerWidth;
    this.stage.height = this.h = window.innerHeight;
    this.ctx = this.stage.getContext('2d');
    this.enterFrame();
  }
  
  componentWillUnmount() {
    cancelAnimationFrame(this.animId);
  }

  render() {
    return <Canvas innerRef={(comp) => this.stage = comp} />
  }

}

export default CanvasContainer;