let expect;

if (typeof require !== 'undefined') { // Execution in node
  expect = require('chai').expect;
} else { // Execution in browser
  expect = chai.expect;
}

import Box from '../scripts/Box.js';
import Point from '../scripts/Point.js';

describe('Clase Box tests', ()=>{

  describe('Comportamiento del constructor', ()=>{
    it('Debería generar un objeto Box', () => {
      let BoxTest = new Box();
      expect(BoxTest).to.be.a('Object');
    });
    it('Debería tener los siguientes atriburos miembro:', () => {
      let BoxTest = new Box();
      expect(BoxTest).to.have.property('id');
      expect(BoxTest).to.have.property('element');
    });
  });

  describe('Métodos de la clase', () => {
    it ('Tiene que tener un método para poder dibujar un Box', () => {
      let BoxTest = new Box();
      expect(BoxTest.draw).to.exist;
    });
    it ('draw tiene que poder ser ejecutado sin errores', () => {
      let BoxTest = new Box();
      expect(BoxTest.draw()).not.to.throw;
    });
  });
});