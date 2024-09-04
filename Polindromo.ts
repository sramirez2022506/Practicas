function esPalindromo(word: string): boolean{
    let reversed = '';
    for(let i = word.length - 1; i >=0; i--) {
        reversed += word[i];
    }
    return word === reversed;
}

console.log(esPalindromo("ana"));

//Resumen declare una funcion llamada esPalindromo que toma un parametro de tipo "word" de tipo String y este retornara un valor de tipo boolean
//de verdadero y falso, en donde utilice la variable "reversed que toma la palabra y la invierte, asi teniendo que verificar si la palabra si"
//es polindroma, esto mediante un bucle de tipo for que recorrera desde la ultima letra hasta la primera.