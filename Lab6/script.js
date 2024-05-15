//zadanko 1

const book = {
    title: "Kirke",
    author: "Madeline Miller",
    year: 2018
  };

  function formatBookInfo(book) {
    const { title, author, year } = book; 
  
    return `${title} - ${author} (${year})`;
  }

  const bookInfoString = formatBookInfo(book);
  console.log(bookInfoString); 
  
  
//zadanko 2

  const student = {
    firstName: "Anna",
    lastName: "Kowalska",
    albumNumber: "12345",
    grades: [4.5, 3.0, 5.0],
  
    calculateAverageGrade() {
      const sum = this.grades.reduce((total, grade) => total + grade, 0);
      return sum / this.grades.length;
    }
  };
  
//zadanko 3

  class Triangle {
    constructor(height, baseLength, name) {
      this.height = height;
      this.baseLength = baseLength;
      this.name = name;
    }
  
    calculateArea() {
      return 0.5 * this.baseLength * this.height;
    }
  
    static compareTriangles(triangle1, triangle2) {
      const area1 = triangle1.calculateArea();
      const area2 = triangle2.calculateArea();
      return area1 > area2 ? triangle1 : triangle2;
    }
  }
  
//zadanko 4

  class Trapez {
    constructor(height, base1, base2, name) {
      this.height = height;
      this.base1 = base1;
      this.base2 = base2;
      this.name = name;
    }
  
    calculateArea() {
      return 0.5 * (this.base1 + this.base2) * this.height;
    }
  
    changeName(newName) {
      this.name = newName;
    }
  }
  
//zadanko 5

  function printLargerFigureArea(triangle, trapez) {
    const triangleArea = triangle.calculateArea();
    const trapezArea = trapez.calculateArea();
  
    if (triangleArea > trapezArea) {
      console.log(`Większa figura: ${triangle.name}, Pole: ${triangleArea}`);
    } else if (trapezArea > triangleArea) {
      console.log(`Większa figura: ${trapez.name}, Pole: ${trapezArea}`);
    } else {
      console.log("Pola obu figur są równe.");
    }
  }

//zadanko 6

  const rectangle = {
    calculateArea() {
      return this.sideA * this.sideB;
    },
  
    calculatePerimeter() {
      return 2 * (this.sideA + this.sideB);
    },
  
    isSquare() {
      return this.sideA === this.sideB;
    }
  };
  
  function createRectangle() {
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
  
    const myRectangle = Object.create(rectangle);
    myRectangle.sideA = sideA;
    myRectangle.sideB = sideB;
  
    const infoElement = document.getElementById('rectangleInfo');
    infoElement.innerHTML = `
      <p>Długość boku A: ${myRectangle.sideA}</p>
      <p>Długość boku B: ${myRectangle.sideB}</p>
      <p>Pole prostokąta: ${myRectangle.calculateArea()}</p>
      <p>Obwód prostokąta: ${myRectangle.calculatePerimeter()}</p>
      <p>Czy prostokąt jest kwadratem? ${myRectangle.isSquare() ? 'Tak' : 'Nie'}</p>
    `;
  }
  
//zadanko 7

class Car {
    constructor(brand, model, year, color, maxSpeed) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this.currentSpeed = 0;
    }
  
    accelerate(amount) {
      if (amount > 0 && amount <= this.maxSpeed) {
        this.currentSpeed += amount;
        console.log(`Przyspieszono do ${this.currentSpeed} km/h`);
      } else {
        console.log(`Nieprawidłowa wartość przyspieszenia (${amount} km/h)`);
      }
    }
  
    decelerate(amount) {
      if (amount > 0 && amount <= this.currentSpeed) {
        this.currentSpeed -= amount;
        console.log(`Zwolniono do ${this.currentSpeed} km/h`);
      } else {
        console.log(`Nieprawidłowa wartość zwolnienia (${amount} km/h)`);
      }
    }
  
    getCarInfo() {
      return `${this.brand} ${this.model} (${this.year}), Kolor: ${this.color}, Prędkość: ${this.currentSpeed} km/h`;
    }
  
    getCarAge() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.year;
    }
  }
  
  
  
//zadanko 8

class BankAccount {
    constructor(balance) {
      this.balance = balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Wpłacono ${amount} zł. Aktualny stan konta: ${this.balance} zł`);
      } else {
        console.log("Wpłacana kwota musi być dodatnia.");
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Wypłacono ${amount} zł. Aktualny stan konta: ${this.balance} zł`);
      } else if (amount > this.balance) {
        console.log("Brak wystarczających środków do wypłaty.");
      } else {
        console.log("Wypłacana kwota musi być dodatnia.");
      }
    }
  
    getBalance() {
      return this.balance;
    }
  }
  
