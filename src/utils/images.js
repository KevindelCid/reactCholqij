

import batzImage from "../assets/nawales/batz.png";
import eImage from "../assets/nawales/e.png";
import ajImage from "../assets/nawales/aj.png";
import ixImage from "../assets/nawales/ix.png";
import tzikinImage from "../assets/nawales/tzikin.png";
import ajmaqImage from "../assets/nawales/ajmaq.png";
import nojImage from "../assets/nawales/noj.png";
import tijaxImage from "../assets/nawales/tijax.png";
import kawoqImage from "../assets/nawales/kawoq.png";
import ajpuImage from "../assets/nawales/ajpu.png";
import imoxImage from "../assets/nawales/imox.png";
import iqImage from "../assets/nawales/iq.png";
import aqabalImage from "../assets/nawales/aqabal.png";
import katImage from "../assets/nawales/kat.png";
import kanImage from "../assets/nawales/kan.png";
import kemeImage from "../assets/nawales/keme.png";
import keejImage from "../assets/nawales/keej.png";
import qanilImage from "../assets/nawales/qanil.png";
import tojImage from "../assets/nawales/toj.png";
import tziImage from "../assets/nawales/tzi.png";

//cargar los nawales aab 

export const getImage = (nawal) => {
    switch (nawal) {
      case "B'atz":
        return batzImage;
      case "E":
        return eImage;
      case "Aj":
        return ajImage;
      case "I'x":
        return ixImage;
      case "Tz'ikin":
        return tzikinImage;
      case "Ajmaq":
        return ajmaqImage;
      case "No'j":
        return nojImage;
      case "Tijax":
        return tijaxImage;
      case "Kawoq":
        return kawoqImage;
      case "Ajpú":
        return ajpuImage;
      case "Imox":
        return imoxImage;
      case "Iq'":
        return iqImage;
      case "Aq'ab'al":
        return aqabalImage;
      case "K'at":
        return katImage;
      case "Kan":
        return kanImage;
      case "Keme":
        return kemeImage;
      case "Keej":
        return keejImage;
      case "Q'anil":
        return qanilImage;
      case "Toj":
        return tojImage;
      case "Tz'i'":
        return tziImage;
      default:
        return eImage;
    }
  };