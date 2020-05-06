let expect;

if (typeof require !== 'undefined') { // Execution in node
  expect = require('chai').expect;
} else { // Execution in browser
  expect = chai.expect;
}

import Rectangle from '../scripts/Rectangle.js';
import Point from '../scripts/Point.js';

describe('Clase Rectangle tests', ()=>{

  describe('Comportamiento del constructor', ()=>{
    it('Debería generar un objeto Rectangle', () => {
      let RectangleTest = new Rectangle();
      expect(RectangleTest).to.be.a('Object');
    });
    it('Debería tener los siguientes atriburos miembro:', () => {
      let RectangleTest = new Rectangle();
      expect(RectangleTest).to.have.property('start');
      expect(RectangleTest).to.have.property('width');
      expect(RectangleTest).to.have.property('height');
    });
  });

  describe('Métodos de la clase', () => {
    it ('Tiene que tener un método para poder dibujar un rectángulo', () => {
      let RectangleTest = new Rectangle();
      expect(RectangleTest.baseDraw).to.exist;
    });
    it ('draw tiene que poder ser ejecutado sin errores', () => {
      let RectangleTest = new Rectangle();
      expect(RectangleTest.draw()).not.to.throw;
    });
    it ('Tiene que tener un método para calcular el área', () => {
      let RectangleTest = new Rectangle();
      expect(RectangleTest.area).to.exist;
    });
    it ('El método que calcula el área tiene que funcionar', () => {
      let RectangleTest = new Rectangle(new Point(), 10, 10);
      expect(RectangleTest.area()).to.eql(100);
    });
    it ('Tiene que tener un método para calcular el perímetro', () => {
      let RectangleTest = new Rectangle();
      expect(RectangleTest.area).to.exist;
    });
    it ('El método que calcula el perímetro tiene que funcionar', () => {
      let RectangleTest = new Rectangle(new Point(), 10, 10);
      expect(RectangleTest.perimeter()).to.eql(20);
    });
  });
});