import moment from 'moment';
import "moment-timezone";
import "moment/locale/es";

export const cholqij = (year, month, day) => {
  const date = new Date(year, month, day);
  const formattedDate = format(date, "d 'de' MMMM 'de' yyyy");
  console.log(formattedDate);
};
export const usableDate = (year, month, day) => {
  moment.tz.setDefault('America/Guatemala');
  const date = new Date(year, month, day);
  const formattedDate = moment(date)
    .locale("es")
    .format("YYYY-MM-DD");
    // .format("DD [de] MMMM [de] YYYY");
  return formattedDate;
};
export const prettiDate = (year, month, day) => {
  moment.tz.setDefault('America/Guatemala');
  const date = new Date(year, month, day);
  const formattedDate = moment(date)
    .locale("es")
    // .format("YYYY-MM-DD");
    .format("DD [de] MMMM [de] YYYY");
  return formattedDate;
};



const nawals = ["B'atz", "E", "Aj", "I'x", "Tz'ikin",  "Ajmaq",  "No'j",  "Tijax", "Kawoq", "Ajpú", "Imox",  "Iq'", "Aq'ab'al", "K'at", "Kan", "Keme", "Keej", "Q'anil",  "Toj", "Tz'i'",];

export const getMayanDate = (dateString) => {
  const date = new Date(dateString);
  const baseDate = new Date("457-01-18");

  const diff = date.getTime() - baseDate.getTime();
  const days = Math.floor(diff / (24 * 60 * 60 * 1000));

  let nawalIndex = days % 20;
  if (nawalIndex < 0) {
    nawalIndex += 20;
  }
  const nawal = nawals[nawalIndex];

  const energyNawal = (days + 10) % 13 ; // obtiene el número de energía

 // Obtener nawal auxiliar izquierdo
 let auxiliarIzIndex = (nawalIndex - 6) % 20;
 if (auxiliarIzIndex < 0) {
  auxiliarIzIndex += 20;
 }
 
 const energyAuxIz = (days + 4) % 13 ; // obtiene el número de energía

 const auxIz = nawals[auxiliarIzIndex];

  // Obtener nawal auxiliar derecho
  let auxiliarDerIndex = (nawalIndex + 6) % 20;
  if (auxiliarDerIndex < 0) {
   auxiliarDerIndex += 20;
  }
 const energyAuxDer = (days + 3) % 13 ; // obtiene el número de energía

  const auxDer = nawals[auxiliarDerIndex];

  // Obtener nawal de engendramiento
  let engendramientoIndex = (nawalIndex - 8) % 20;
  if (engendramientoIndex < 0) {
    engendramientoIndex += 20;
  }
 const energyEngendramiento = (days + 2) % 13 ; // obtiene el número de energía

  const engendramiento = nawals[engendramientoIndex];

  // Obtener nawal de destino
  let destinoIndex = (nawalIndex + 8) % 20;
  if (destinoIndex < 0) {
    destinoIndex += 20;
  }
 const energyDestino = (days + 5) % 13 ; // obtiene el número de energía

  const destino = nawals[destinoIndex];

  // Obtener nawal de engendramiento auxiliar izquierdo
  let engendramientoAuxIzqIndex = (engendramientoIndex - 6) % 20;
  if (engendramientoAuxIzqIndex < 0) {
    engendramientoAuxIzqIndex += 20;
  }
 const energyEngendramientoAuxIzq = (days + 9) % 13 ; // obtiene el número de energía

  const engendramientoAuxIzq = nawals[engendramientoAuxIzqIndex];

  // Obtener nawal de engendramiento auxiliar derecho
  let engendramientoAuxDerIndex = (engendramientoIndex + 6) % 20;
  if (engendramientoAuxDerIndex < 0) {
    engendramientoAuxDerIndex += 20;
  }
 const energyEngendramientoAuxDer = (days + 8) % 13 ; // obtiene el número de energía

  const engendramientoAuxDer = nawals[engendramientoAuxDerIndex];

  // Obtener nawal de destino auxiliar izquierdo
  let destinoAuxIzqIndex = (destinoIndex - 6) % 20;
  if (destinoAuxIzqIndex < 0) {
    destinoAuxIzqIndex += 20;
  }
 const energyDestinoAuxIzq = (days + 12) % 13 ; // obtiene el número de energía

  const destinoAuxIzq = nawals[destinoAuxIzqIndex];

  // Obtener nawal de destino auxiliar derecho
  let destinoAuxDerIndex = (destinoIndex + 6) % 20;
  if (destinoAuxDerIndex < 0) {
    destinoAuxDerIndex += 20;
  }
 const energyDestinoAuxDer = (days + 11) % 13 ; // obtiene el número de energía

  const destinoAuxDer = nawals[destinoAuxDerIndex];


  return {
    engendramientoAuxIzq: {  energy: energyEngendramientoAuxIzq === 0 ? 13 : energyEngendramientoAuxIzq,  nawal: engendramientoAuxIzq,  },
    engendramiento: {  energy: energyEngendramiento === 0 ? 13 : energyEngendramiento,  nawal: engendramiento,  },
    engendramientoAuxDer: {  energy: energyEngendramientoAuxDer  === 0 ? 13 : energyEngendramientoAuxDer, nawal: engendramientoAuxDer,  },
    auxIz: {  energy: energyAuxIz  === 0 ? 13 : energyAuxIz,  nawal: auxIz,  },
    nawal: {  energy: energyNawal  === 0 ? 13 : energyNawal,  nawal: nawal,  },
    auxDer: {  energy: energyAuxDer  === 0 ? 13 : energyAuxDer,  nawal: auxDer,  },
    destinoAuxIzq: {  energy: energyDestinoAuxIzq  === 0 ? 13 : energyDestinoAuxIzq,  nawal: destinoAuxIzq,  },
    destino: {  energy: energyDestino  === 0 ? 13 : energyDestino,  nawal: destino,  },
    destinoAuxDer: {  energy: energyDestinoAuxDer  === 0 ? 13 : energyDestinoAuxDer,  nawal: destinoAuxDer,  },
  }


}