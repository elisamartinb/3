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
    this.side = side;
  }
}

const squarepolygon = new Square(4);
squarepolygon.perimeter();
squarepolygon.area();


class Triangle extends Polygon {
  constructor(height,base) { //lo que luego llamas cuando lo ejecutas
    super(3,height,base); //lo que ejecutas del principio
    console.log('super',super.area());
  }
  area() {
    const result2 = super.area()/2;
    console.log('area triangulo',result2);
  }
}

const trianglepolygon = new Triangle(3,4);
trianglepolygon.perimeter();
trianglepolygon.area();