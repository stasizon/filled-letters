import React from 'react';
import {Input, Typography, Col} from "antd";

interface PatternFormProps {
  onChange(value: any): void
  imageLoadStatus: string
}

function PatternForm(props: PatternFormProps) {
  return (
    <Col span={24}>
      <Typography.Title level={1}>Choose pattern</Typography.Title>
      <Input.Search
        size="large"
        placeholder="Image URL"
        onChange={({currentTarget}) => props.onChange(currentTarget.value)}
        loading={props.imageLoadStatus === 'loading'}
      />
    </Col>
  );
}

export default PatternForm;
