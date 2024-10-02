function analyzeText(text: string): void {
    let totalWords = 0, 
        totalLength = 0, 
        sentenceCount = 0, 
        longestWord = "";
  
    let currentWord = "", 
        wordStarted = false;
  
    for (let i = 0; i <= text.length; i++) {
      let char = text[i] || ".";
      
      if (char === " " || char === "." || i === text.length) {
        if (wordStarted) {
          totalWords++; 
          totalLength += currentWord.length; 
          if (currentWord.length > longestWord.length) {
            longestWord = currentWord; 
          }
          currentWord = "";
          wordStarted = false;
        }
      } else {
        currentWord += char;
        wordStarted = true;
      }
  
      if (char === ".") {
        sentenceCount++;
      }
    }

    let averageWordLength = totalWords ? totalLength / totalWords : 0;
  
    console.log(`Número total de palabras: ${totalWords}`);
    console.log(`Longitud media de las palabras: ${averageWordLength.toFixed(2)}`);
    console.log(`Número de oraciones: ${sentenceCount}`);
    console.log(`Palabra más larga: ${longestWord}`);
  }

  const text = "Este es un texto. Hola mundo. Brandon la cabra.";
  analyzeText(text);
  

  /* En resumen hice que recorriera el texto carcater por caracter en lugar de dividir el texto en palabras, luego cada vez que encuentra un espacio o punto el programa asume que se termino la palabra */ 
  /* y la cuenta, tambien suma la longitud de cada palabra para calcular cual es la media, y cada vez que encuentra un punto aumenta el conteo de las oraciones */
  /* como ultimo calcula la longitud promedio dividiendo la suma total de palabras entre el numero de palabras. (perdon por tardar en entregarlo) */