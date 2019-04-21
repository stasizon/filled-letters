import React, {Component} from 'react';

class PatternForm extends Component {
  onChange = (event) => {
    this.props.onChange(event.target.value)
  };

  render() {
    return (
      <div className="text-form">
        <h2>Choose pattern</h2>
        <input className="text-input" type="text" onChange={this.onChange}/>
      </div>
    );
  }
}

export default PatternForm;
