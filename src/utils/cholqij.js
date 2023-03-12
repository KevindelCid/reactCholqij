import moment from "moment";
import "moment-timezone";
import "moment/locale/es";
import { haab } from "./haab";

const infoNawals = [
  {
    nawal: "B'ATZ'",
    meaning:
      "Significa mono o hilo. Es el Nawal de todas las artes, de los tejidos, de los artistas. Es un día propicio para pedir pareja, amarrar o desatar cualquier asunto. Son maestros de todas las artes.",
    positive: [
      "Amable",
      "Reservado",
      "Tiene abundancia económica",
      "Hogareño",
      "Protector de su familia",
    ],
    negative: [
      "Ambicioso de casas, terrenos y bienes",
      "Incrédulo",
      "Carácter fuerte y duro",
      "Tacaño",
      "Molesta, pero no le gusta que lo molesten",
    ],
  },
  {
    nawal: "E",
    meaning:
      "Significa camino o diente. Es el Nawal de todos los caminos y dirigentes, del sistema nervioso y sanguíneo. Día propicio para iniciar cualquier viaje o negocio. Son líderes naturales.",
    positive: [
      "Propicia el bienestar de otros",
      "Viajero y caminante",
      "Orador y pensador",
      "Generoso",
      "Enseña a los demás",
    ],
    negative: [
      "Terco",
      "Sufre internamente",
      "Le cuesta su propio bienestar",
      "Impaciente",
      "Nervioso",
    ],
  },
  {
    nawal: "AJ",
    meaning:
      "Significa caña o cañaveral. Es el Nawal de la casa y de los niños, día propicio para el hogar y la salud de los niños. Nawal de las generaciones tiernas. Personas que no pueden negarse para otros.",
    positive: [
      "De carácter dulce",
      "Oradores e investigadores",
      "Protector de la casa y niños",
      "Suerte para trabajos o negocios",
      "Respetuosos y aconsejadores",
    ],
    negative: [
      "Celosos",
      "Destruyen familias",
      "Indecisos",
      "Ordena la vida de los demás",
      "Les gusta el chisme",
    ],
  },
  {
    nawal: "I'X",
    meaning:
      "Significa jaguar. Es el Nawal de la naturaleza y los altares mayas, día para pedir fortaleza física y mental. Es el nawal de las siete vergüenzas humanas: orgullo, ambición, envidia, mentira, crimen, ingratitud, ignorancia por pereza. Personas de razonamiento interno que les gusta la naturaleza y la soledad.",
    positive: [
      "Valerosos y fuertes",
      "Emprendedores",
      "Vigilantes",
      "Dador y cuidador de cosas",
      "No pelea fácilmente",
    ],
    negative: [
      "Colérico",
      "Le gusta la carne",
      "Haragán",
      "Le gusta la fama",
      "Lastima profundamente",
    ],
  },
  {
    nawal: "TZ'IK'IN",
    meaning:
      "Significa pájaro. Es el Nawal del bienestar económico, la buena fortuna, día propicio para agradecer y pedir el bienestar económico. Es la comunicación e intermediación entre Uk´ux Kaj - Uk´ux Ulew el corazón del cielo y el corazón de la tierra. Personas que construyen su propio bienestar.",
    positive: [
      "Buena suerte para cualquier trabajo",
      "Íntegros",
      "De palabras santas",
      "Organizados y metódicos",
      "Maestros que se auto forman",
    ],
    negative: [
      "Obsesivos",
      "Enamorados y adúlteros",
      "Tacaños",
      "Egoístas",
      "Rencorosos",
    ],
  },
  {
    nawal: "AJMAQ'",
    meaning:
      "Significa búho, falta o culpa. Es el Nawal de todas las faltas, es el día de los abuelos que ya no están (difuntos). Es el día para pedir perdón por las faltas. Personas valientes y de sangre dulce que fácilmente caen en culpas.",
    positive: [
      "Prudentes y analíticos",
      "Equilibrados física y espiritualmente",
      "Sabiduría",
      "Cae bien a cualquiera",
      "Percibe energías ocultas a otros",
    ],
    negative: [
      "Oculta sus faltas",
      "Pecador",
      "Destruye su herencia",
      "Puede caer en vicios",
      "Afamado",
    ],
  },
  {
    nawal: "NO'J",
    meaning:
      "Significa idea, sabiduría. Es el nawal de la inteligencia, día dedicado a pedir la sabiduría, el talento, el buen pensamiento. Es el nawal del temblor o sismo. Personas muy creativas e imaginativas.",
    positive: [
      "Buenas ideas",
      "Valientes",
      "Facilidad para el diálogo",
      "Oradores e investigadores",
      "Intuitivos",
    ],
    negative: [
      "Fantasiosos",
      "Incrédulos",
      "Enojados",
      "Enamorados y adúlteros",
      "Haraganes",
    ],
  },
  {
    nawal: "TIJAX",
    meaning:
      "Significa pedernal, obsidiana. Nawal de la muerte repentina y los sufrimientos. Día propicio para curanderos y autoridades, para cortar males y enfermedades. Personas confrontativas que cortan toda clase de males y problemas.",
    positive: [
      "Poseen señales en el cuerpo",
      "Curanderos y cirujanos",
      "Especialistas en derecho y psicología",
      "Honestos y justos",
      "Luchan por la vida",
    ],
    negative: [
      "Tajantes y cortantes",
      "Intrigantes y chismosos",
      "Crueldad y venganza",
      "Pueden caer en enfermedades mortales",
      "Injusticia y deshonestidad",
    ],
  },

  {
    nawal: "KAWOQ",
    meaning:
      "Significa tormenta o nube. Es el Nawal de la fortaleza y la fertilidad, día propicio para pedir la lluvia y la fertilidad en la vida. Personas con habilidades para proteger y nutrir a otros.",
    positive: [
      "Buenos protectores y proveedores",
      "Habilidad para hacer crecer y multiplicar",
      "Muy compasivos y amables",
      "Buenos amigos y consejeros",
      "Buenos líderes y organizadores",
    ],
    negative: [
      "Pueden ser engañosos",
      "Pueden caer en la dependencia emocional",
      "Pueden ser inseguros y temerosos",
      "Necesitan aprender a soltar el control",
      "Pueden ser demasiado posesivos",
    ],
  },
  {
    nawal: "AJPU",
    meaning:
      "Significa el Señor o el Gran Padre. Es el Nawal de la energía divina y la sabiduría, día para pedir la protección divina y la guía espiritual. Personas con habilidades para conectar con lo divino y transmitir esa energía a otros.",
    positive: [
      "Muy espirituales y conectados con lo divino",
      "Buenos guías y consejeros",
      "Buenos líderes y organizadores",
      "Capaces de transmitir energía positiva a otros",
      "Muy creativos y talentosos",
    ],
    negative: [
      "Pueden ser arrogantes y egocéntricos",
      "Pueden ser críticos y juzgadores",
      "Pueden caer en la manipulación emocional",
      "Pueden ser perfeccionistas y exigentes",
      "Necesitan aprender a escuchar y ser más humildes",
    ],
  },
  {
    nawal: "IMOX",
    meaning:
      "Significa lagarto o sapo. Es el nawal de la vida acuática, de las aguas, de la lluvia, de la medicina, de la fertilidad y de la limpieza. Día propicio para pedir por la salud física y emocional, y para realizar baños de limpieza. Personas intuitivas, emotivas y curativas.",
    positive: [
      "Empáticos y compasivos",
      "Intuitivos",
      "Buenos médicos y curanderos",
      "Creativos y originales",
      "Buenos amigos y confidentes",
    ],
    negative: [
      "Impacientes",
      "Depresivos",
      "Desconfiados",
      "Pueden tener adicciones",
      "Les cuesta tomar decisiones",
    ],
  },
  {
    nawal: "IQ'",
    meaning:
      "Significa viento o espíritu. Es el nawal del viento, de la fuerza vital, del aire y del pensamiento. Día propicio para pedir por la comunicación, la claridad mental y la fuerza espiritual. Personas espirituales, comunicativas y visionarias.",
    positive: [
      "Comunicativos y amables",
      "Fuertes espiritualmente",
      "Visionarios y proféticos",
      "Intelectuales y lógicos",
      "Creadores y pensadores",
    ],
    negative: [
      "Inestables emocionalmente",
      "Impulsivos y distraídos",
      "Pueden ser superficiales",
      "Les cuesta comprometerse",
      "Pueden tener dificultades para enfocarse",
    ],
  },
  {
    nawal: "AQ'AB'AL",
    meaning:
      "Significa amanecer o alba. Es el nawal de la aurora, de la transformación, de la iniciación y del renacimiento. Día propicio para pedir por la prosperidad y la realización personal. Personas transformadoras, innovadoras y audaces.",
    positive: [
      "Transformadores y renacedores",
      "Innovadores y audaces",
      "Buenos líderes y emprendedores",
      "Aventureros y arriesgados",
      "Pueden ser muy generosos",
    ],
    negative: [
      "Pueden ser inestables",
      "Pueden tener problemas con el compromiso",
      "Impulsivos y arriesgados en exceso",
      "Pueden tener dificultades para aceptar cambios",
      "Pueden ser muy tercos",
    ],
  },
  {
    nawal: "KAT",
    meaning:
      "Significa red o captura. Es el Nawal del arte, la música, la belleza y el canto. Día propicio para pedir arte, belleza y para triunfar en la vida. Personas creativas, alegres y llenas de amor por la vida.",
    positive: ["Artista", "Amoroso", "Inteligente", "Trabajador", "Inspirador"],
    negative: [
      "Tacaño",
      "Impulsivo",
      "Cambiante",
      "Difícil de controlar",
      "Puede caer en la adicción",
    ],
  },
  {
    nawal: "KAN",
    meaning:
      "Significa maíz, semilla, cuerpo humano. Es el Nawal de la fertilidad, de la sexualidad, de la familia y del cuerpo humano. Día propicio para pedir una buena cosecha, para los asuntos de familia y para la salud. Personas bondadosas y amigables.",
    positive: [
      "Generoso",
      "Trabajador",
      "Familiar",
      "Buen anfitrión",
      "Honesto",
    ],
    negative: [
      "Celoso",
      "Puede caer en vicios",
      "Inestable emocionalmente",
      "Puede ser orgulloso",
      "A veces rencoroso",
    ],
  },
  {
    nawal: "KEME",
    meaning:
      "Significa muerte o transformación. Es el Nawal de la transformación, de los cambios, de la muerte y del renacimiento. Día propicio para limpiar y sacar lo negativo de nuestras vidas, para los cambios y para los negocios de los curanderos. Personas con gran capacidad para adaptarse a los cambios.",
    positive: [
      "Capacidad para reinventarse",
      "Transmutador",
      "Cambia y transforma",
      "Honesto y justo",
      "Emprendedor",
    ],
    negative: [
      "Puede ser vengativo",
      "Celoso",
      "Desconfiado",
      "Inestable",
      "Puede tener dificultad en dejar ir",
    ],
  },
  {
    nawal: "KEEJ",
    meaning:
      "Significa venado o junco. Es el Nawal de la fortaleza, de la seguridad y de la estabilidad. Día propicio para pedir fuerza física, mental y emocional. Personas con gran fortaleza, astucia y habilidad.",
    positive: [
      "Seguro de sí mismo",
      "Intuitivo",
      "Líder natural",
      "Puede ver el futuro",
      "Hábil",
    ],
    negative: [
      "Testarudo",
      "Impaciente",
      "Puede ser agresivo",
      "Puede tener exceso de confianza",
      "Desconfiado",
    ],
  },
  {
    nawal: "Q'ANIL",
    meaning:
      "Significa semilla o brillo. Es el Nawal de la familia, de la sexualidad, del matrimonio y de las nuevas ideas. Día propicio para pedir hijos o la protección de la familia. Personas con gran energía sexual y creatividad.",
    positive: [
      "Buena energía sexual",
      "Fertilidad y buena cosecha",
      "Artistas y creadores",
      "Gente de ideas nuevas",
      "Comprometidos con su pareja",
    ],
    negative: [
      "Exceso de energía sexual",
      "Egoístas",
      "Desobligados",
      "Inestables emocionalmente",
      "Pueden tener conflictos familiares",
    ],
  },
  {
    nawal: "TOJ",
    meaning:
      "Significa pago, ofrenda o sacrificio. Es el Nawal de la ofrenda, del pago y del sacrificio. Día propicio para hacer pagos, para sanar enfermedades y para pedir por el bienestar de los demás. Personas que trabajan por el bienestar colectivo.",
    positive: [
      "Solidarios",
      "Amables",
      "Respetuosos",
      "Buenos consejeros",
      "Generosos",
    ],
    negative: [
      "Egocéntricos",
      "Envidiosos",
      "Desconfiados",
      "Orgullosos",
      "Pueden ser infieles",
    ],
  },
  {
    nawal: "TZ'I'",
    meaning:
      "Significa perro o compañero. Es el Nawal de la lealtad, de la compañía y del servicio. Día propicio para pedir por la amistad, por la fidelidad y por el servicio. Personas con gran sentido de la amistad y la lealtad.",
    positive: [
      "Leales",
      "Amistosos",
      "Buenos amigos",
      "Serviciales",
      "Honrados",
    ],
    negative: [
      "Infiel",
      "Chismosos",
      "Celosos",
      "Cuidado excesivo",
      "Pueden tener conflictos amorosos",
    ],
  },
];

const nawals = [
  "B'atz",
  "E",
  "Aj",
  "I'x",
  "Tz'ikin",
  "Ajmaq",
  "No'j",
  "Tijax",
  "Kawoq",
  "Ajpú",
  "Imox",
  "Iq'",
  "Aq'ab'al",
  "K'at",
  "Kan",
  "Keme",
  "Keej",
  "Q'anil",
  "Toj",
  "Tz'i'",
];

export const usableDate = (year, month, day) => {
  moment.tz.setDefault("America/Guatemala");
  const date = new Date(year, month, day);
  const formattedDate = moment(date).locale("es").format("YYYY-MM-DD");
  // .format("DD [de] MMMM [de] YYYY");
  return formattedDate;
};
export const prettiDate = (year, month, day) => {
  moment.tz.setDefault("America/Guatemala");
  const date = new Date(year, month, day);
  const formattedDate = moment(date)
    .locale("es")
    // .format("YYYY-MM-DD");
    .format("DD [de] MMMM [de] YYYY");
  return formattedDate;
};

export const getMayanDate = (dateString) => {
  // restaFechaHoy("1900-03-21")
  const date = new Date(dateString);
  const baseDate = new Date("457-01-18");

  const diff = date.getTime() - baseDate.getTime();
  const days = Math.floor(diff / (24 * 60 * 60 * 1000));

  let nawalIndex = days % 20;
  if (nawalIndex < 0) {
    nawalIndex += 20;
  }
  const nawal = nawals[nawalIndex];

  const energyNawal = (days + 10) % 13; // obtiene el número de energía

  // Obtener nawal auxiliar izquierdo
  let auxiliarIzIndex = (nawalIndex - 6) % 20;
  if (auxiliarIzIndex < 0) {
    auxiliarIzIndex += 20;
  }

  const energyAuxIz = (days + 4) % 13; // obtiene el número de energía

  const auxIz = nawals[auxiliarIzIndex];

  // Obtener nawal auxiliar derecho
  let auxiliarDerIndex = (nawalIndex + 6) % 20;
  if (auxiliarDerIndex < 0) {
    auxiliarDerIndex += 20;
  }
  const energyAuxDer = (days + 3) % 13; // obtiene el número de energía

  const auxDer = nawals[auxiliarDerIndex];

  // Obtener nawal de engendramiento
  let engendramientoIndex = (nawalIndex - 8) % 20;
  if (engendramientoIndex < 0) {
    engendramientoIndex += 20;
  }
  const energyEngendramiento = (days + 2) % 13; // obtiene el número de energía

  const engendramiento = nawals[engendramientoIndex];

  // Obtener nawal de destino
  let destinoIndex = (nawalIndex + 8) % 20;
  if (destinoIndex < 0) {
    destinoIndex += 20;
  }
  const energyDestino = (days + 5) % 13; // obtiene el número de energía

  const destino = nawals[destinoIndex];

  // Obtener nawal de engendramiento auxiliar izquierdo
  let engendramientoAuxIzqIndex = (engendramientoIndex - 6) % 20;
  if (engendramientoAuxIzqIndex < 0) {
    engendramientoAuxIzqIndex += 20;
  }
  const energyEngendramientoAuxIzq = (days + 9) % 13; // obtiene el número de energía

  const engendramientoAuxIzq = nawals[engendramientoAuxIzqIndex];

  // Obtener nawal de engendramiento auxiliar derecho
  let engendramientoAuxDerIndex = (engendramientoIndex + 6) % 20;
  if (engendramientoAuxDerIndex < 0) {
    engendramientoAuxDerIndex += 20;
  }
  const energyEngendramientoAuxDer = (days + 8) % 13; // obtiene el número de energía

  const engendramientoAuxDer = nawals[engendramientoAuxDerIndex];

  // Obtener nawal de destino auxiliar izquierdo
  let destinoAuxIzqIndex = (destinoIndex - 6) % 20;
  if (destinoAuxIzqIndex < 0) {
    destinoAuxIzqIndex += 20;
  }
  const energyDestinoAuxIzq = (days + 12) % 13; // obtiene el número de energía

  const destinoAuxIzq = nawals[destinoAuxIzqIndex];

  // Obtener nawal de destino auxiliar derecho
  let destinoAuxDerIndex = (destinoIndex + 6) % 20;
  if (destinoAuxDerIndex < 0) {
    destinoAuxDerIndex += 20;
  }
  const energyDestinoAuxDer = (days + 11) % 13; // obtiene el número de energía

  const destinoAuxDer = nawals[destinoAuxDerIndex];

  return {
    haab: haab(date.toString()),
    cargador: chargerOfYear(date),
    engendramientoAuxIzq: {
      energy:
        energyEngendramientoAuxIzq === 0 ? 13 : energyEngendramientoAuxIzq,
      nawal: engendramientoAuxIzq,
    },
    engendramiento: {
      energy: energyEngendramiento === 0 ? 13 : energyEngendramiento,
      nawal: engendramiento,
    },
    engendramientoAuxDer: {
      energy:
        energyEngendramientoAuxDer === 0 ? 13 : energyEngendramientoAuxDer,
      nawal: engendramientoAuxDer,
    },
    auxIz: { energy: energyAuxIz === 0 ? 13 : energyAuxIz, nawal: auxIz },
    nawal: { energy: energyNawal === 0 ? 13 : energyNawal, nawal: nawal },
    auxDer: { energy: energyAuxDer === 0 ? 13 : energyAuxDer, nawal: auxDer },
    destinoAuxIzq: {
      energy: energyDestinoAuxIzq === 0 ? 13 : energyDestinoAuxIzq,
      nawal: destinoAuxIzq,
    },
    destino: {
      energy: energyDestino === 0 ? 13 : energyDestino,
      nawal: destino,
    },
    destinoAuxDer: {
      energy: energyDestinoAuxDer === 0 ? 13 : energyDestinoAuxDer,
      nawal: destinoAuxDer,
    },
  };
};

// Define a function that takes a date parameter
const chargerOfYear = (date) => {
  // Define the base date as March 21, 1900, which is 5 No'j in the Mayan calendar
  const baseDate = new Date("1900-03-21");

  // Calculate the difference in time between the input date and the base date in milliseconds
  const timeDiff = date.getTime() - baseDate.getTime();

  // Convert the time difference to days, counting for leap years
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysDiff = Math.floor(timeDiff / msPerDay);

  // Define the available chargers as an array
  const chargers = ["No'j", "Iq'", "Keej", "E"];

  const years = Math.floor(daysDiff / 365);

  // Calculate the index of the corresponding charger based on the number of days difference
  const chargerIndex = Math.floor(daysDiff / 365) % chargers.length;

  // Retrieve the corresponding charger based on the index
  const charger = chargers[chargerIndex];

  // Calculate the energy number based on the number of days difference
  const energy = (years % 13) + 5; // 5 corresponds to the No'j day on the base date

  // Return an object containing the energy number and the corresponding charger
  return {
    energy: energy % 13 === 0 ? 13 : energy % 13, // Ensure that the energy number is within the range of 1-13
    nawal: charger,
  };
};