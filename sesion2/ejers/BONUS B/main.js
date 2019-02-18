'use strict';

class Polygon {
  constructor(numberSides,height,base) { //lo que luego llamas cuando lo ejecutas
    this.numberSides = numberSides;
    this.height = height;
    this.base = base;
  }
  perimeter() {
    const result = this.numberSides * this.base;
    console.log('perimetro',result);
  }
  area() {
    const result = this.base * this.height;
    console.log('area',result);
    return result;//pongo el retunr pq luego lo necesito 
  }
}

class Square extends Polygon {
  constructor(side) { //lo que luego llamas cuando lo ejecutas
    super(4,side,side); //lo que ejecutas del principio
    this._side = side;
  }
  get sides() {
    return this._side;
  }
  set sides(newSide) {
    this._side = newSide;
  }
}

const squarepolygon = new Square(4);
squarepolygon.perimeter();
squarepolygon.area();

//bonus B
const squareBonusB = new Square(7);
console.log('saquer bonus',squareBonusB);
const squareArea = squareBonusB.area();
console.log('bonus area 1',squareArea);
squareBonusB.side = 47;
const squareArea2 = squareBonusB.area();
console.log('bonus area 2',squareArea2);

