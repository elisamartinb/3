'use strict';

//ejer 1
class Square {
  perimeter(side){
    const result = side * 4;
    console.log('resultado perimetro',result);
  }
  area(side){
    const result = side * side;
    console.log('resultado area',result);
  }
}

const perimeter = new Square();

perimeter.perimeter(9);
perimeter.area(9);

//ejer 2


