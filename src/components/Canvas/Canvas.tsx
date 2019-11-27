import React, {useRef} from 'react';
import {Stage, Layer, Text} from 'react-konva';

interface CanvasProps {
  pixelRatio: number;
  patternImage?: any;
  width: number;
  height: number;
  fontFamily: string;
  fontSize: number;
  fontStyle: string;
  text: string;
}

function Canvas(props: CanvasProps) {
  const inputEl = useRef(null);

  return (
    <React.Fragment>
      <Stage
        className="preview"
        width={props.width}
        height={props.height}
      >
        <Layer ref={inputEl}>
          <Text
            fontFamily={props.fontFamily}
            fontSize={props.fontSize}
            fontStyle={props.fontStyle}
            fillPatternImage={props.patternImage}
            text={props.text}
            fillPriority="pattern"
            draggable
            onDragStart={() => {
              document.body.style.cursor = "grabbing";
            }}
            onDragEnd={() => {
              document.body.style.cursor = "grab";
            }}
            onMouseEnter={() => {
              document.body.style.cursor = "grab";
            }}
            onMouseLeave={() => {
              document.body.style.cursor = "default";
            }}
          />
        </Layer>
      </Stage>
    </React.Fragment>
  );
}

export default Canvas;
