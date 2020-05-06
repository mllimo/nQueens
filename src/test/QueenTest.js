let expect;

if (typeof require !== 'undefined') { // Execution in node
  expect = require('chai').expect;
} else { // Execution in browser
  expect = chai.expect;
}

import Queen from '../scripts/Queen.js';

describe('Clase Queen tests', ()=>{

  describe('Comportamiento del constructor', ()=>{
    it('Debería generar un objeto Queen', () => {
      let QueenTest = new Queen();
      expect(QueenTest).to.be.a('Object');
    });
  });

  describe('Métodos de la clase', () => {
    it ('Tiene que tener un método para poder dibujar un Queen', () => {
      let QueenTest = new Queen();
      expect(QueenTest.draw).to.exist;
    });
    it ('draw tiene que poder ser ejecutado sin errores', () => {
      let QueenTest = new Queen();
      expect(QueenTest.draw()).not.to.throw;
    });
  });
});