'use strict';

class Square {
  perimeter(side) {
    const result = side * 4;
    console.log('perimetro',result);
  }
  area(side) {
    const result = side * side;
    console.log('area',result);
  }
}

const side9 = new Square();

side9.perimeter(9);
side9.area(9);

//ejer 2
class Square2 {
  constructor(side){
    this.side = side;
  }
  perimeter() {
    const result = this.side * 4;
    console.log('perimetro',result);
  }
  area() {
    const result = this.side * this.side;
    console.log('area',result);
  }
}

const side92 = new Square2();

side92.perimeter(9);
side92.area(9);