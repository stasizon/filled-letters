import React from 'react';
import {Input, Col, Typography} from 'antd';

interface TextInputProps {
  onChange(value: any): void;

  value: string;
}

function TextInput(props: TextInputProps) {
  return (
    <Col className="input-group" span={24}>
      <Typography.Title level={1}>Input text</Typography.Title>
      <Input
        size="large"
        placeholder="Text to display on canvas"
        onChange={({target}) => props.onChange(target.value)}/>
    </Col>
  );
}

export default TextInput;
