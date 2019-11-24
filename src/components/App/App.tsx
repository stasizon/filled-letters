import React, {useState, useRef, useMemo} from 'react';
import Canvas from '../Canvas/Canvas';
import TextInput from '../TextInput/TextInput';
import TextStyleForm from '../TextStyleForm/TextStyleForm';
import PatternForm from '../PatterForm/PatternForm';
import PrintButton from '../PrintButton/PrintButton';
import ReactToPrint from 'react-to-print';
import {Layout, Col} from 'antd';

const {Header, Content} = Layout;

function App() {
  const canvasRef = useRef(null);
  const [text, setText] = useState('');
  const [fontFamily, setFontFamily] = useState('Roboto');
  const [fontSize, setFontSize] = useState(48);
  const [fontStyle, setFontStyle] = useState('normal');
  const [patternImageUrl, setPatternImageUrl] = useState();
  const canvasSize = useMemo(() => ({
    width: 595 / ((842 + 120) / window.innerHeight),
    height: 842 / ((842 + 120) / window.innerHeight)
  }), []);

  return (
    <Layout>
      <Header className="header">123</Header>
      <Content>
        <div className="row">
          <div ref={canvasRef}>
            <Canvas
              pixelRatio={2}
              width={canvasSize.width}
              height={canvasSize.height}
              text={text}
              fontFamily={fontFamily}
              fontSize={fontSize}
              fontStyle={fontStyle}
              patternImageUrl={patternImageUrl}
            />
          </div>
          <Col className="column">
            <TextInput
              value={text}
              onChange={setText}
            />
            <TextStyleForm
              setFontFamily={setFontFamily}
              setFontSize={setFontSize}
              setFontStyle={setFontStyle}
            />
            <PatternForm onChange={setPatternImageUrl}/>
            <ReactToPrint
              trigger={() => <PrintButton/>}
              // @ts-ignore
              content={() => canvasRef.current}
            />
          </Col>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
