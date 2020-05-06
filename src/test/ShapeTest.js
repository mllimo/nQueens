let expect;

if (typeof require !== 'undefined') { // Execution in node
  expect = require('chai').expect;
} else { // Execution in browser
  expect = chai.expect;
}
import Shape from '../scripts/Shape.js';


describe('Clase Shape tests', ()=>{

  describe('Comportamiento del constructor', ()=>{
    it('Debería generar un objeto Shape', () => {
      let shapeTest = new Shape();
      expect(shapeTest).to.be.a('Object');
    });
    it('Debería tener los siguientes atriburos miembro:', () => {
      let shapeTest = new Shape();
      expect(shapeTest).to.have.property('lineCap');
      expect(shapeTest).to.have.property('fillStyle');
      expect(shapeTest).to.have.property('strokeStyle');
      expect(shapeTest).to.have.property('strokeWidth');
      expect(shapeTest).to.have.property('rotate');
      expect(shapeTest).to.have.property('scale');
      expect(shapeTest).to.have.property('isDiscontinuous');
      expect(shapeTest).to.have.property('distanceDiscontinuous');
    });
  });

  describe('Métodos de la clase', () => {
    it ('Tiene que tener un método que pueda empezar un path dentro de un canvas', () => {
      let shapeTest = new Shape();
      expect(shapeTest.baseDraw).to.exist;
    });
    it ('baseDraw tiene que poder ser ejecutado sin errores', () => {
      let shapeTest = new Shape();
      expect(shapeTest.baseDraw()).not.to.throw;
    });
  });
});