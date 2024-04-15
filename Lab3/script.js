//zadanko 2
alert("Hello World!");

//zadanko 3
let a = 10;
let b = 20;
let c = 23.2;

let suma = a + b;
console.log("Suma:", suma);
alert("Suma: " + suma);

let roznica = b - a;
console.log("Różnica:", roznica);
alert("Różnica: " + roznica);

let iloczyn = a * c;
console.log("Iloczyn:", iloczyn);
alert("Iloczyn: " + iloczyn);

let iloraz = b / a;
console.log("Iloraz:", iloraz);
alert("Iloraz: " + iloraz);

//zadanko 4
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//zadanko 5
function obliczPole() {
  const bokA = parseFloat(document.getElementById('bokA').value);
  const bokB = parseFloat(document.getElementById('bokB').value);
  const bokC = parseFloat(document.getElementById('bokC').value);

  if (isNaN(bokA) || isNaN(bokB) || isNaN(bokC)) {
    alert('Wprowadź poprawne wartości długości boków!');
    return;
  }

  if (bokA + bokB <= bokC || bokA + bokC <= bokB || bokB + bokC <= bokA) {
    alert('Te boki nie mogą utworzyć trójkąta!');
    return;
  }

  const pole = obliczPoleTrojkata(bokA, bokB, bokC);
  const wynikElement = document.getElementById('wynik');
  wynikElement.innerHTML = `Pole obliczonego trójkąta wynosi: ${pole.toFixed(2)}`;
}

function obliczPoleTrojkata(a, b, c) {
  const p = (a + b + c) / 2;
  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

//zadanko 6
const imieUzytkownika = prompt("Podaj swoje imię:");

if (imieUzytkownika) {
  alert(`Witaj, ${imieUzytkownika}!`);
} else {
  alert("Nie podałeś swojego imienia.");
}

//zadanko 7
function dodajLiczby() {
  const liczba1 = parseInt(document.getElementById('liczba1').value);
  const liczba2 = parseInt(document.getElementById('liczba2').value);

  if (isNaN(liczba1) || isNaN(liczba2)) {
    alert('Wprowadź poprawne wartości liczb!');
    return;
  }

  const suma = liczba1 + liczba2;
  const wynikElement = document.getElementById('wynik');
  wynikElement.innerHTML = `Suma podanych liczb wynosi: ${suma}`;
}

//zadanko 8
function znajdzNajwieksza() {
  const liczba1 = parseFloat(document.getElementById('liczba1').value);
  const liczba2 = parseFloat(document.getElementById('liczba2').value);
  const liczba3 = parseFloat(document.getElementById('liczba3').value);

  const najwieksza = Math.max(liczba1, liczba2, liczba3);
  const wynikElement = document.getElementById('wynik2');
  wynikElement.innerHTML = `Największa liczba spośród podanych wynosi: ${najwieksza.toFixed(2)}`;

  if (isNaN(liczba1) || isNaN(liczba2) || isNaN(liczba3)) {
    alert('Wprowadź poprawne wartości liczb!');
    return;
  }
}

//zadanko 9
function obliczNWD() {
  const liczba1 = parseInt(document.getElementById('liczba1').value);
  const liczba2 = parseInt(document.getElementById('liczba2').value);

  if (isNaN(liczba1) || isNaN(liczba2)) {
    alert('Wprowadź poprawne liczby całkowite!');
    return;
  }

  const nwd = nwdEuklidesa(liczba1, liczba2);
  const wynikElement = document
}

//zadanko 10  
  function aktualizujCzas() {
    const data = new Date(); 
    const godziny = data.getHours().toString().padStart(2, '0');
    const minuty = data.getMinutes().toString().padStart(2, '0'); 
    const sekundy = data.getSeconds().toString().padStart(2, '0');
  
    const czasString = `${godziny}:${minuty}:${sekundy}`; 
    document.getElementById('czas').innerHTML = czasString; 
  
    setTimeout(aktualizujCzas, 1000);
  }