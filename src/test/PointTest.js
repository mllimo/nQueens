let expect;

if (typeof require !== 'undefined') { // Execution in node
  expect = require('chai').expect;
} else { // Execution in browser
  expect = chai.expect;
}

import Point from '../scripts/Point.js';

describe('Clase Point tests', ()=>{

  describe('Comportamiento del constructor', ()=>{
    it('Debería generar un objeto Point', () => {
      let PointTest = new Point();
      expect(PointTest).to.be.a('Object');
    });
    it('Debería tener los siguientes atriburos miembro:', () => {
      let PointTest = new Point();
      expect(PointTest).to.have.property('x');
      expect(PointTest).to.have.property('y');
    });
  });

  describe('Métodos de la clase', () => {
    it ('Tiene que tener un método para poder dibujar una point', () => {
      let PointTest = new Point();
      expect(PointTest.baseDraw).to.exist;
    });
    it ('draw tiene que poder ser ejecutado sin errores', () => {
      let PointTest = new Point();
      expect(PointTest.draw()).not.to.throw;
    });
  });
});