function esPalindromo(word) {
    var reversed = '';
    for (var i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }
    return word === reversed;
}
console.log(esPalindromo("ana"));
