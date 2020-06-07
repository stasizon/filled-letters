import React from 'react';
import { Button } from 'antd';
import {PrinterFilled} from '@ant-design/icons';
import styles from './PrintButton.module.css';

function PrintButton() {
  return (
    <Button className={styles.print} type="primary" size="large">
      <PrinterFilled /> PRINT
    </Button>
  );
}

export default PrintButton;
