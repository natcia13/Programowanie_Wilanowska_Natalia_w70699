//zadanko 1

function countdownFor() {
    const countdownElement = document.getElementById('countdown');
    countdownElement.innerText = "Sylwestra czas zacząć!";
    
    for (let i = 10; i > 0; i--) {
      setTimeout(() => {
        countdownElement.innerText = i;
      }, (10 - i) * 1000);
    }
    
    setTimeout(() => {
      countdownElement.innerText = "Happy New Year!";
    }, 10000);
  }
  
  countdownFor();
  
// zadanko 2
  
  function calculateFactorial(number) {
    let factorial = 1;
    let factorialResult = '';
    
    for (let i = 1; i <= number; i++) {
      factorial *= i;
      factorialResult += `${i}! = ${factorial}<br>`;
    }
    
    return factorialResult;
  }
  
  function calculateAndDisplayFactorial() {
    const numberInput = document.getElementById('number');
    const number = parseInt(numberInput.value);
    const factorialResultElement = document.getElementById('factorial-result');
    
    if (!isNaN(number)) {
      factorialResultElement.innerHTML = calculateFactorial(number);
    }
  }
  
// zadanko 3

  window.onload = function() {
    verifyAge();
  };
  
  function verifyAge() {
    const age = parseInt(prompt("Proszę podać swój wiek:", ""));
    
    if (age >= 18) {
      alert("Super! Jesteś stary, zapraszamy ;)");
    } else {
      alert("Wybacz, ale musisz podrosnąć :// Masz pograj sobie :D");
      window.location.href = "https://www.opiekun.pl/strony-dla-dzieci.php";
    }
  }

// zadanko 4

  let previousButtonId = null;
  
  function changeColor(buttonId) {
    const button = document.getElementById(buttonId);
    
    if (previousButtonId !== null) {
      const previousButton = document.getElementById(previousButtonId);
      previousButton.style.backgroundColor = '';
    }
    
    button.style.backgroundColor = 'lightpink';
    previousButtonId = buttonId;
  }

//zadanko 5
  
  function toggleImageVisibility() {
    const heartImage = document.getElementById('heart-image');
    if (heartImage.style.display === 'none') {
      heartImage.style.display = 'block';
    } else {
      heartImage.style.display = 'none';
    }
  }

//zadanko 6
  
  function addToList() {
    const textInput = document.getElementById('textInput');
    const value = textInput.value.trim();
  
    if (value !== '') {
      const list = document.getElementById('list');
      const listItem = document.createElement('li');
      listItem.textContent = value;
      list.appendChild(listItem);
      textInput.value = ''; 
    }
  }

//zadanko 7
  
  function addToTable() {
    const nameInput = document.getElementById('nameInput');
    const surnameInput = document.getElementById('surnameInput');
    const name = nameInput.value.trim();
    const surname = surnameInput.value.trim();
  
    if (name !== '' && surname !== '') {
      const tableBody = document.getElementById('tableBody');
      const newRow = document.createElement('tr');
      const nameCell = document.createElement('td');
      const surnameCell = document.createElement('td');
  
      nameCell.textContent = name;
      surnameCell.textContent = surname;
  
      newRow.appendChild(nameCell);
      newRow.appendChild(surnameCell);
      tableBody.appendChild(newRow);

      nameInput.value = '';
      surnameInput.value = '';
    }
  }
  
  function clearTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; 
  }
  
//zadanko 8

  function convertToCelsius() {
    const fahrenheitInput = document.getElementById('fahrenheitInput');
    const celsiusInput = document.getElementById('celsiusInput');
    const fahrenheit = parseFloat(fahrenheitInput.value);
    
    if (!isNaN(fahrenheit)) {
      const celsius = (fahrenheit - 32) * (5 / 9);
      celsiusInput.value = celsius.toFixed(2);
    }
  }
  
  function convertToFahrenheit() {
    const celsiusInput = document.getElementById('celsiusInput');
    const fahrenheitInput = document.getElementById('fahrenheitInput');
    const celsius = parseFloat(celsiusInput.value);
    
    if (!isNaN(celsius)) {
      const fahrenheit = (celsius * 9/5) + 32;
      fahrenheitInput.value = fahrenheit.toFixed(2);
    }
  }

//zadanko 9

  function calculateGCD() {
    const firstNumberInput = document.getElementById('firstNumberInput');
    const secondNumberInput = document.getElementById('secondNumberInput');
    const resultParagraph = document.getElementById('result');
    
    const firstNumber = parseInt(firstNumberInput.value);
    const secondNumber = parseInt(secondNumberInput.value);
    
    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
      const gcd = findGCD(firstNumber, secondNumber);
      resultParagraph.textContent = `NWD = (${firstNumber},${secondNumber}) = ${gcd}`;
    } else {
      resultParagraph.textContent = "Wprowadź poprawne liczby całkowite.";
    }
  }
  
  function findGCD(a, b) {
    // Algorytm Euklidesa
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return Math.abs(a);
  }

//zadanko 10
function calculate() {
    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);
    const operator = document.getElementById('operator').value;
    let result;
  
    switch (operator) {
      case 'addition':
        result = firstNumber + secondNumber;
        break;
      case 'subtraction':
        result = firstNumber - secondNumber;
        break;
      case 'multiplication':
        result = firstNumber * secondNumber;
        break;
      case 'division':
        if (secondNumber !== 0) {
          result = firstNumber / secondNumber;
        } else {
          result = 'Głuptasie! Nie dzielimy przez zero!';
        }
        break;
      case 'exponentiation':
        result = Math.pow(firstNumber, secondNumber);
        break;
      default:
        result = 'Wybierz działanie';
        break;
    }
  
    document.getElementById('calculator-result').textContent = `Wynik: ${result}`;
  }
  

