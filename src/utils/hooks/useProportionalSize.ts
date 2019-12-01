import {useMemo} from "react";

function useProportionalSize(startWidth: number, startHeight: number, correct: number) {
  const {width, height} = useMemo(() => ({
    width: startWidth / ((startHeight + correct) / window.innerHeight),
    height: startHeight / ((startHeight + correct) / window.innerHeight)
  }), [startWidth, startHeight, correct]);

  return [width, height]
}

export default useProportionalSize;
