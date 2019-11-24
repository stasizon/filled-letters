import React from 'react';
import {Input, Typography, Col} from "antd";

interface PatternFormProps {
  onChange(value: any): void
}

function PatternForm(props: PatternFormProps) {
  return (
    <Col span={24}>
      <Typography.Title level={1}>Choose pattern</Typography.Title>
      <Input size="large" placeholder="Image URL" onChange={(value) => props.onChange(value)}/>
    </Col>
  );
}

export default PatternForm;
