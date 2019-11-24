import React from 'react';
import { Button, Icon } from 'antd';

function PrintButton() {
  return (
    <Button className="print-button" type="primary" size="large">
      <Icon type="printer" theme="filled" />
      PRINT
    </Button>
  );
}

export default PrintButton;
