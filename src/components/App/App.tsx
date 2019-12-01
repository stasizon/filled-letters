import React, {useState, useRef} from 'react';
import Canvas from '../Canvas/Canvas';
import CanvasForm from '../CanvasForm/CanvasForm';
import ImageSelectEditor from '../ImageSelectEditor/ImageSelectEditor';
import PrintButton from '../PrintButton/PrintButton';
import ReactToPrint from 'react-to-print';
import {Layout, Col, Spin, Typography} from 'antd';
import useImage from "use-image";
import useFonts from '../../utils/hooks/useFonts';
import useProportionalSize from "../../utils/hooks/useProportionalSize";
import styles from './App.module.css';

const {Header, Content} = Layout;

function App() {
  const canvasRef = useRef(null);
  const [text, setText] = useState('');
  const [fontFamily, setFontFamily] = useState('Roboto');
  const [fontSize, setFontSize] = useState(48);
  const [fontStyle, setFontStyle] = useState('normal');
  const [patternImageUrl, setPatternImageUrl] = useState('');
  const [isFontsLoaded] = useFonts();
  const [canvasWidth, canvasHeight] = useProportionalSize(595, 842, 120);
  const [image, status] = useImage(patternImageUrl);

  if (!isFontsLoaded) {
    return <span>Test</span>
  }

  return (
    <Layout>
      <Header className={styles.header}>
        <Typography.Title className={styles.title} level={3}>Filled letters</Typography.Title>
      </Header>
      <Content>
        <div className={styles.wrapper}>
          <div ref={canvasRef}>
            <Canvas
              pixelRatio={2}
              width={canvasWidth}
              height={canvasHeight}
              text={text}
              fontFamily={fontFamily}
              fontSize={fontSize}
              fontStyle={fontStyle}
              patternImage={image}
            />
          </div>
          <Col className={styles.column}>
            <Spin spinning={!isFontsLoaded} tip="Loading..." size="large">
              <CanvasForm
                value={text}
                onChange={setText}
                setFontFamily={setFontFamily}
                setFontSize={setFontSize}
                setFontStyle={setFontStyle}
              />
              <ImageSelectEditor
                onChange={setPatternImageUrl}
                imageLoadStatus={patternImageUrl ? status : 'loaded'}
              />
              <ReactToPrint
                trigger={() => <a><PrintButton/></a>}
                // @ts-ignore
                content={() => canvasRef.current}
              />
            </Spin>
          </Col>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
