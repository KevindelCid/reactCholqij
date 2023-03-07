
export const haab = (fecha) => {
    // Convertir la fecha a objeto Date
    let dateObj = new Date(fecha);
  
    // Verificar que la fecha sea válida
    if (!isFinite(dateObj)) {
        return { error: 'Fecha inválida' };
      }
  
    // Días del ciclo Haab
    let haabDays = [
      { name: "Imix", number: 0 },
      { name: "Ik", number: 1 },
      { name: "Akbal", number: 2 },
      { name: "K'an", number: 3 },
      { name: "Chikchan", number: 4 },
      { name: "Kimi", number: 5 },
      { name: "Manik", number: 6 },
      { name: "Lamat", number: 7 },
      { name: "Muluk", number: 8 },
      { name: "Ok", number: 9 },
      { name: "Chuen", number: 10 },
      { name: "Eb", number: 11 },
      { name: "Ben", number: 12 },
      { name: "Ix", number: 13 },
      { name: "Men", number: 14 },
      { name: "Kib", number: 15 },
      { name: "Kab'an", number: 16 },
      { name: "Etz'nab", number: 17 },
      { name: "Kawak", number: 18 },
      { name: "Ajaw", number: 19 }
    ];


    // names de los meses Haab
let haabMonths = [
    { name: "Pop", days: 0, number: 0 },
    { name: "Wo'", days: 20, number: 1 },
    { name: "Sip", days: 40, number: 2 },
    { name: "Sotz'", days: 60, number: 3 },
    { name: "Sek", days: 80, number: 4 },
    { name: "Xul", days: 100, number: 5 },
    { name: "Yaxk'in", days: 120, number: 6 },
    { name: "Mol", days: 140, number: 7 },
    { name: "Ch'en", days: 160, number: 8 },
    { name: "Yax", days: 180, number: 9 },
    { name: "Sak'", days: 200, number: 10 },
    { name: "Keh", days: 220, number: 11 },
    { name: "Mak", days: 240, number: 12 },
    { name: "K'ank'in", days: 260, number: 13 },
    { name: "Muwan", days: 280, number: 14 },
    { name: "Pax", days: 300, number: 15 },
    { name: "K'ayab", days: 320, number: 16 },
    { name: "Kumk'u", days: 340, number: 17 },
    { name: "Wayeb'", days: 360, number: 18 }
  ];
  
  // Calculate Haab day
  let haabDay = (dateObj.getDate() - 1) % 20;
  let haabDayName = haabDays[haabDay].name;
  let haabDayNumber = haabDays[haabDay].number;
  
  // Calculate Haab month
  let haabMonth = Math.floor((dateObj.getMonth() * 30 + dateObj.getDate() - 1) / 20);
  let haabMonthName = haabMonths[haabMonth].name;
  let daysElapsed = haabMonths[haabMonth].days;
  
  // For the last month (Wayeb'), use a different calculation for days elapsed
  if (haabMonth === 18) {
    let yearLength = 365 + (isLeapYear(dateObj.getFullYear()) ? 1 : 0);
    daysElapsed = yearLength - daysElapsed;
  }
  
  let haabMonthNumber = haabMonths[haabMonth].number;
  
  // Return the result
  return {
    month: haabMonthName,
    day: haabDayName,
    numberDay: haabDayNumber
  };
}