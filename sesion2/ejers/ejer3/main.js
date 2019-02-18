'use strict';

class Square {
    constructor(numberSides,base,height) {
        this.numberSides = numberSides;
        this.base = base;
        this.height = height;
        
      }
    perimeter(side) {
      const result = side * 4;
      console.log('perimetro',result);
    }
    area(side) {
      const result = side * side;
      console.log('area',result);
    }
  }


