import React from 'react';
import {Typography, Select, InputNumber, Col, Row} from "antd";

interface TextStyleFormProps {
  setFontFamily(value: any): void;

  setFontSize(value: any): void;

  setFontStyle(value: any): void;
}

function TextStyleForm(props: TextStyleFormProps) {
  return (
    <Col className="input-group" span={24}>
      <Typography.Title level={1}>Set style</Typography.Title>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <label><Typography.Title level={4}>Font</Typography.Title></label>
          <Select
            defaultValue="roboto"
            className="select-input"
            size="large"
            onChange={props.setFontFamily}
            showSearch
          >
            <Select.Option value="montserrat">Montserrat</Select.Option>
            <Select.Option value="roboto">Roboto</Select.Option>
          </Select>
        </Col>
        <Col span={8}>
          <label><Typography.Title level={4}>Size</Typography.Title></label>
          <InputNumber defaultValue={48} className="select-input" size="large" onChange={props.setFontSize}/>
        </Col>
        <Col span={8}>
          <label><Typography.Title level={4}>Style</Typography.Title></label>
          <Select
            defaultValue="normal"
            className="select-input"
            size="large"
            onChange={props.setFontStyle}
          >
            <Select.Option value="normal">Normal</Select.Option>
            <Select.Option value="bold">Bold</Select.Option>
            <Select.Option value="italic">Italic</Select.Option>
          </Select>
        </Col>
      </Row>
    </Col>
  );
}

export default TextStyleForm;
