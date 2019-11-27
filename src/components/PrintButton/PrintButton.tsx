import React from 'react';
import { Button, Icon } from 'antd';
// @ts-ignore
import * as styles from './PrintButton.less';

console.log(styles.print)

function PrintButton() {
  return (
    <Button className={styles.print} type="primary" size="large">
      <Icon type="printer" theme="filled" />
      PRINT
    </Button>
  );
}

export default PrintButton;
