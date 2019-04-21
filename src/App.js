import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.state = {
      font: 'Cousine',
      fontSize: 950,
      text: '',
      backgroundImage: null
    }
  }

  changeText = (event) => {
    this.setState({
      text: event.target.value.toUpperCase()
    })
  };

  changeBackgroundImage = (event) => {
    this.setState({
      backgroundImage: event.target.value
    });

    this.image = document.createElement("img");
    this.image.src = event.target.value;
    this.image.onload = () => {
      this.draw();
    };
  };

  draw = () => {
    const canvasWidth = this.canvas.current.width;
    const canvasHeight = this.canvas.current.height;
    const ctx = this.canvas.current.getContext("2d");
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.save();
    ctx.beginPath();

    ctx.font = `${this.state.fontSize}px ${this.state.font}`;
    const textWidth = ctx.measureText(this.state.text).width;
    const textHorizontalPosition = (canvasWidth / 2) - (textWidth / 2);
    ctx.textBaseline = 'top';
    let textVerticalPosition;
    if (this.state.text === 'Й') {
      textVerticalPosition = 85;
    } else {
      textVerticalPosition = 0;
    }
    ctx.fillText(this.state.text, textHorizontalPosition, textVerticalPosition);
    ctx.fill();

    if (this.state.backgroundImage) {
      ctx.beginPath();
      ctx.globalCompositeOperation = "source-in";
      ctx.drawImage(
        this.image,
        0,
        0,
        this.image.width,
        this.image.height,
        0,
        0,
        canvasWidth,
        canvasHeight
      );
      ctx.restore();
    }

  };

  render() {
    if (this.canvas.current) {
      this.draw();
    }
    return (
      <div className="App">
        <canvas
          className="canvas"
          ref={this.canvas}
          width="595"
          height="842"
        />
        <form>
          <input
            maxLength="1"
            type="text"
            onChange={this.changeText}
            placeholder="Enter character"
          />
          <input
            type="text"
            onChange={this.changeBackgroundImage}
            placeholder="Enter image URL"
          />
          <button onClick={() => window.print()}>Print</button>
        </form>
      </div>
    );
  }
}

export default App;
