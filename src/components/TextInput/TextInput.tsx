import React from 'react';

interface TextInputProps {
  onChange(value: any): void;
  value: string;

}

function TextInput(props: TextInputProps) {
  return (
    <div className="text-form">
      <h2>Input text</h2>
      <input className="text-input" type="text" onChange={({target}) => props.onChange(target.value)}/>
    </div>
  );
}

export default TextInput;
