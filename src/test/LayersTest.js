let expect;

if (typeof require !== 'undefined') { // Execution in node
  expect = require('chai').expect;
} else { // Execution in browser
  expect = chai.expect;
}

import Layers from '../scripts/Layers.js'

describe('Clase Layers tests', ()=>{

  describe('Comportamiento del constructor', ()=>{
    it('Debería generar un objeto Layers', () => {
      let LayersTest = new Layers();
      expect(LayersTest).to.be.a('Object');
    });
    it('Debería tener los siguientes atriburos miembro:', () => {
      let LayersTest = new Layers();
      expect(LayersTest).to.have.property('elements');
    });
  });

  describe('Métodos de la clase', () => {
    it ('Tiene que tener un método para poder dibujar un Layers', () => {
      let LayersTest = new Layers();
      expect(LayersTest.draw).to.exist;
    });
    it ('draw tiene que poder ser ejecutado sin errores', () => {
      let LayersTest = new Layers();
      expect(LayersTest.draw()).not.to.throw;
    });
  });
});