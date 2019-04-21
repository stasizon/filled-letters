import React, {Component} from 'react';

class TextInput extends Component {
  onChange = (event) => {
    this.props.onChange(event.target.value)
  };

  render() {
    return (
      <div className="text-form">
        <h2>Input text</h2>
        <input className="text-input" type="text" onChange={this.onChange}/>
      </div>
    );
  }
}

export default TextInput;
