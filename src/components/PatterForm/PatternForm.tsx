import React from 'react';

interface PatternFormProps {
  onChange(value: any): void
}

function PatternForm(props: PatternFormProps) {
  return (
    <div className="text-form">
      <h2>Choose pattern</h2>
      <input className="text-input" type="text" onChange={({target}) => props.onChange(target.value)}/>
    </div>
  );
}

export default PatternForm;
