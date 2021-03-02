// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


// Stampo numeri da 1 a 100

var numeri;

for (numeri = 1; numeri <= 100; numeri++) {
  if ((numeri % 3 == 0) && (numeri % 5 == 0)) {
    console.log('FizzBuzz');
  } else if (numeri % 5 == 0) {
    console.log('Buzz');
  } else if (numeri % 3 == 0) {
    console.log('Fizz');
  } else {
    console.log(numeri);
  }
}
