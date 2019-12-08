import {useState} from "react";
import WebFont from "webfontloader";

function useFonts() {
  const [isFontsLoaded, setIsFontsLoaded] = useState(false);

  if (!isFontsLoaded) {
    WebFont.load({
      google: {
        families: ['Montserrat:400,500,600', 'Roboto:400,700,900']
      },
      classes: false,
      active: () => {
        setIsFontsLoaded(true)
      }
    });
  }

  return [isFontsLoaded];
}

export default useFonts;
