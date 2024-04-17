// zadanko 1
const liczby1 = [];
const listaLiczb1 = document.getElementById("liczby");
const wynik1 = document.getElementById("wynik1");

function dodajLiczbe() {
  const liczba = parseInt(document.getElementById("liczbaDoWpisania").value);

  if (isNaN(liczba)) {
    alert("Wprowadź poprawną liczbę!");
    return;
  }

  liczby1.push(liczba);
  listaLiczb1.textContent += liczba + " ";
  document.getElementById("liczbaDoWpisania").value = "";

  if (liczby1.length === 10) {
    document.getElementById("liczbaDoWpisania").disabled = true;
  }
}

function szukajLiczby() {
  const liczbaDoSzukania = parseInt(document.getElementById("liczbaDoSzukania").value);

  if (isNaN(liczbaDoSzukania)) {
    alert("Wprowadź poprawną liczbę do wyszukania!");
    return;
  }

  let iloscWyst = 0;
  for (const liczba of liczby1) {
    if (liczba === liczbaDoSzukania) {
      iloscWyst++;
    }
  }

  if (iloscWyst > 0) {
    wynik1.textContent = `Liczba ${liczbaDoSzukania} wystąpiła ${iloscWyst} razy.`;
  } else {
    wynik1.textContent = `Liczba ${liczbaDoSzukania} nie została znaleziona :().`;
  }
}


// zadanko 2
const tablica2 = [1, 2, 3, 4, 5, 6];
const wynik2 = document.getElementById("wynik2");

function wstawLiczbe() {
  const indeks = parseInt(document.getElementById("indeks").value);
  const liczba = parseInt(document.getElementById("liczba").value);

  if (indeks < 0 || indeks > tablica2.length - 1) {
    wynik2.textContent = "Głuptasie zły indeks ! Musi być z przedziału 0-5.";
    return;
  }

  if (isNaN(liczba)) {
    wynik2.textContent = "Wprowadź poprawną liczbę do wstawienia!";
    return;
  }

  tablica2.splice(indeks, 0, liczba);

  wynik2.textContent = "Tablica po wstawieniu: " + tablica2.join(", ");
}


// zadanko 3
function odwrocCiag() {
  const ciagZnakow = document.getElementById("ciagZnakow").value;

  if (ciagZnakow === "") {
    alert("Wprowadź ciąg znaków!");
    return;
  }
  let odwroconyCiag1 = "";
  for (let i = ciagZnakow.length - 1; i >= 0; i--) {
    odwroconyCiag1 += ciagZnakow[i];
  }

  const wynik3 = document.getElementById("wynik3");
  wynik3.textContent = `Ciąg po odwróceniu:\n${odwroconyCiag1}`;
}


// zadanko 4
function wypelnijTablice() {
  const listaLiczb4 = document.getElementById("listaLiczb4");
  listaLiczb4.innerHTML = "";

  const iloscLiczb = 10;
  const min = 1;
  const max = 100;

  const liczby4 = [];
  for (let i = 0; i < iloscLiczb; i++) {
    const losowaLiczba = Math.floor(Math.random() * (max - min + 1)) + min;
    liczby4.push(losowaLiczba);
  }

  for (const liczba of liczby4) {
    const li = document.createElement("li");
    li.textContent = liczba;
    listaLiczb4.appendChild(li);
  }
}


// zadanko 5
const liczby5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const suma5 = liczby5.reduce((acc, val) => acc + val, 0);
console.log("Suma wartości:", suma5);

const liczbyParzyste5 = liczby5.filter(liczba => liczba % 2 === 0);
console.log("Liczby parzyste:", liczbyParzyste5);

const liczbyPomnozone5 = liczby5.map(liczba => liczba * 3);
console.log("Liczby pomnożone razy 3:", liczbyPomnozone5);

const numerAlbumu5 = 123456;
liczby5.push(numerAlbumu5);
const indeksNumeru5 = liczby5.indexOf(numerAlbumu5);
console.log(`Numer albumu ${numerAlbumu5} dodany na pozycję ${indeksNumeru5}`);

const srednia5 = liczby5.reduce((acc, val) => acc + val, 0) / liczby5.length;
console.log("Średnia arytmetyczna:", srednia5);

const najwiekszaLiczba5 = Math.max(...liczby5);
console.log("Największa liczba:", najwiekszaLiczba5);

const wartoscDoZliczenia5 = 5;
const iloscWyst5 = liczby5.filter(liczba => liczba === wartoscDoZliczenia5).length;
console.log(`Liczba wystąpień ${wartoscDoZliczenia5}: ${iloscWyst5}`);


// zadanko 6
function ciagFibonacciego(n) {
  if (n < 0) {
    return undefined;
  }

  if (n === 0 || n === 1) {
    return n;
  }

  return ciagFibonacciego(n - 1) + ciagFibonacciego(n - 2);
}

const liczbyFibonacciego6 = [];
for (let i = 0; i < 100; i++) {
  liczbyFibonacciego6.push(ciagFibonacciego(i));
}

console.log("Tablica z 100 elementami ciągu Fibonacciego:", liczbyFibonacciego6);


// zadanko 7
function sumaDwochNajwiekszych(liczby) {
  if (!Array.isArray(liczby) || liczby.length < 2) {
    throw new Error("Tablica musi zawierać co najmniej 2 elementy!");
  }

  let najwiekszaLiczba7 = liczby[0];
  let drugaNajwiekszaLiczba7 = liczby[1];
  for (let i = 2; i < liczby.length; i++) {
    if (liczby[i] > najwiekszaLiczba7) {
      drugaNajwiekszaLiczba7 = najwiekszaLiczba7;
      najwiekszaLiczba7 = liczby[i];
    } else if (liczby[i] > drugaNajwiekszaLiczba7) {
      drugaNajwiekszaLiczba7 = liczby[i];
    }
  }

  return najwiekszaLiczba7 + drugaNajwiekszaLiczba7;
}

const liczbySuma7 = [5, 8, 2, 10, 4, 18];
const suma7 = sumaDwochNajwiekszych(liczbySuma7);
console.log(`Suma dwóch największych liczb w tablicy ${liczbySuma7}: ${suma7}`);


// zadanko 8
function usunDuplikaty(liczby) {
  if (!Array.isArray(liczby) || liczby.length === 0) {
    throw new Error("Tablica musi zawierać co najmniej jeden element!");
  }

  const unikalneWartosci8 = {};
  for (const liczba of liczby) {
    unikalneWartosci8[liczba] = true;
  }

  const wynik8 = [];
  for (const liczba in unikalneWartosci8) {
    wynik8.push(liczba);
  }

  return wynik8;
}

const liczbyZDuplikatami8 = [5, 2, 1, 3, 2, 4, 5, 1];
const liczbyBezDuplikatow8 = usunDuplikaty(liczbyZDuplikatami8);
console.log("Tablica bez duplikatów:", liczbyBezDuplikatow8);
