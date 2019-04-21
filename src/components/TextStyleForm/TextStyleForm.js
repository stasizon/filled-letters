import React, {Component} from 'react';

class TextStyleForm extends Component {
  setFontFamily = (event) => {
    this.props.setFontFamily(event.target.value)
  };

  setFontSize = (event) => {
    this.props.setFontSize(Number(event.target.value))
  };

  setFontStyle = (event) => {
    this.props.setFontStyle(event.target.value)
  };

  render() {
    return (
      <div className="text-form">
        <h2>Set style</h2>
        <div className="row center full-width select-group">
          <div className="column select-wrapper">
            <label>Font</label>
            <select defaultValue="Roboto" onChange={this.setFontFamily}>
              <option>Montserrat</option>
              <option>Roboto</option>
            </select>
          </div>
          <div className="column select-wrapper">
            <label>Size</label>
            <select defaultValue={64} onChange={this.setFontSize}>
              <option>64</option>
              <option>72</option>
              <option>96</option>
              <option>144</option>
              <option>288</option>
              <option>576</option>
              <option>720</option>
              <option>864</option>
            </select>
          </div>
          <div className="column select-wrapper">
            <label>Style</label>
            <select defaultValue="normal" onChange={this.setFontStyle}>
              <option value="normal">Normal</option>
              <option value="bold">Bold</option>
              <option value="italic">Italic</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default TextStyleForm;
