import React from 'react';
import { Button, Icon } from 'antd';
import styles from './PrintButton.module.css';

function PrintButton() {
  return (
    <Button className={styles.print} type="primary" size="large">
      <Icon type="printer" theme="filled" />
      PRINT
    </Button>
  );
}

export default PrintButton;
