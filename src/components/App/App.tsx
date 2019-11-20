import React, {useState, useRef, useMemo} from 'react';
import Canvas from '../Canvas/Canvas';
import TextInput from '../TextInput/TextInput';
import TextStyleForm from '../TextStyleForm/TextStyleForm';
import PatternForm from '../PatterForm/PatternForm';
import PrintButton from '../PrintButton/PrintButton';
import ReactToPrint from 'react-to-print';

function App() {
  const canvasRef = useRef(null);
  const [text, setText] = useState('');
  const [fontFamily, setFontFamily] = useState('Roboto');
  const [fontSize, setFontSize] = useState(48);
  const [fontStyle, setFontStyle] = useState('normal');
  const [patternImageUrl, setPatternImageUrl] = useState();
  const canvasSize = useMemo(() => ({
    width: 595 / ((842 + 70) / window.innerHeight),
    height: 842 / ((842 + 70) / window.innerHeight)
  }), []);

  return (
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
      <div className="input-column">
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
          trigger={() => <button><PrintButton/></button>}
          // @ts-ignore
          content={() => canvasRef.current}
        />
      </div>
    </div>
  );
}

export default App;
