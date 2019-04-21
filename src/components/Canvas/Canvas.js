import React, {useRef} from 'react';
import {Stage, Layer, Text} from 'react-konva';
import useImage from 'use-image';

/**
 * @return {string}
 */
function Canvas(props) {
  const [image] = useImage(props.patternImageUrl);
  const inputEl = useRef(null);

  return (
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
          fillPatternImage={image}
          text={props.text}
          fillPriority="pattern"
          draggable
          onMouseEnter={() => {
            document.body.style.cursor = "pointer";
          }}
          onMouseLeave={() => {
            document.body.style.cursor = "default";
          }}
        />
      </Layer>
    </Stage>
  );
}

export default Canvas;
