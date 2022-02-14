  // Today's temp in Kelvin
  const kelvin = 293;

  // Converts to Celsius
  const celsius = kelvin - 273;

  //Converts to Farenheit
  var farenheit = celsius * (9/5) + 32;

  // Rounds Farenheit down
  farenheit = Math.floor(farenheit);

  console.log(`The temperature is ${farenheit} degrees Fahrenheit.`)

  //Calculates Newton
  var newton = Math.floor(celsius * (33/100));

  console.log(`The temperature is ${newton} degrees Newton.`)
