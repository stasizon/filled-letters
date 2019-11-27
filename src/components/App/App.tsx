import React, {useState, useRef} from 'react';
import Canvas from '../Canvas/Canvas';
import TextInput from '../TextInput/TextInput';
import TextStyleForm from '../TextStyleForm/TextStyleForm';
import PatternForm from '../PatternForm/PatternForm';
import PrintButton from '../PrintButton/PrintButton';
import ReactToPrint from 'react-to-print';
import {Layout, Col, Spin, Typography} from 'antd';
import useImage from "use-image";
import useFonts from '../../utils/hooks/useFonts';
import useProportionalSize from "../../utils/hooks/useProportionalSize";

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

  return (
    <Layout>
      <Header className="header">
        <Typography.Title className="app-title" level={3}>Filled letters</Typography.Title>
      </Header>
      <Content>
        <div className="row">
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
          <Col className="column">
            <Spin spinning={!isFontsLoaded} tip="Loading..." size="large">
              <TextInput
                value={text}
                onChange={setText}
              />
              <TextStyleForm
                setFontFamily={setFontFamily}
                setFontSize={setFontSize}
                setFontStyle={setFontStyle}
              />
              <PatternForm
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
