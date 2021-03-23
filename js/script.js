/**
 * Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 * stampi FizzBuzz.
 */

// var declaration
var num = 0;

// loop for printing numbers 
for (i = 1; i <= 100; i++) {
    // incremento il numero di 1 ogni volta
    num += 1;

    // controllo se il numero è divisibile sia per 3 che per 5 e stampo fizzbuzz
    if ( (num % 3 === 0) && (num % 5 === 0) ) {
        console.log('FizzBuzz');
    // altrimenti controllo se è divisibile per 3 e stampo fizz
    } else if (num % 3 === 0) {
        console.log('Fizz');
    // altrimenti controllo se è divisibile per 5 e stampo buzz
    } else if (num % 5 === 0) {
        console.log('Buzz');
    // altrimenti stampo solo il numero
    } else {
        console.log(num);
    }
}

