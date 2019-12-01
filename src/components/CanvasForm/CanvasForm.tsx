import React from 'react';
import {Input, Col, Typography, Row, Select, InputNumber} from 'antd';
import styles from "../CanvasForm/CanvasForm.module.css";

interface CanvasFormProps {
  setFontFamily(value: any): void;

  setFontSize(value: any): void;

  setFontStyle(value: any): void;

  onChange(value: any): void;

  value: string;
}

function CanvasForm(props: CanvasFormProps) {
  return (
    <div>
      <Col className={styles.group} span={24}>
        <Typography.Title level={1}>Input text</Typography.Title>
        <Input
          size="large"
          placeholder="Text to display on canvas"
          onChange={({target}) => props.onChange(target.value)}/>
      </Col>
      <Col className={styles.group} span={24}>
        <Typography.Title level={1}>Set style</Typography.Title>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <label><Typography.Title level={4}>Font</Typography.Title></label>
            <Select
              defaultValue="roboto"
              className={styles.select}
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
            <InputNumber defaultValue={48} className={styles.select} size="large" onChange={props.setFontSize}/>
          </Col>
          <Col span={8}>
            <label><Typography.Title level={4}>Style</Typography.Title></label>
            <Select
              defaultValue="normal"
              className={styles.select}
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
    </div>
  );
}

export default CanvasForm;
