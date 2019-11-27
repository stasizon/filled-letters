import {useState, useEffect} from "react";

function useFonts() {
  const [isFontsLoaded, setIsFontsLoaded] = useState(false);

  useEffect(() => {
    // @ts-ignore
    document.fonts.ready.then((fontFaceSet) => {
      if (fontFaceSet.status === 'loaded') {
        setIsFontsLoaded(true)
      }
    });
  });

  return [isFontsLoaded];
}

export default useFonts;
