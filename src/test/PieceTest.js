let expect;

if (typeof require !== 'undefined') { // Execution in node
  expect = require('chai').expect;
} else { // Execution in browser
  expect = chai.expect;
}

import Piece from '../scripts/Piece.js';

describe('Clase Piece tests', ()=>{

  describe('Comportamiento del constructor', ()=>{
    it('Debería generar un objeto Piece', () => {
      let PieceTest = new Piece();
      expect(PieceTest).to.be.a('Object');
    });
    it('Debería tener los siguientes atriburos miembro:', () => {
      let PieceTest = new Piece();
      expect(PieceTest).to.have.property('sprite');
      expect(PieceTest).to.have.property('moves');
    });
  });

  describe('Métodos de la clase', () => {
    it ('Tiene que tener un método para poder dibujar un Piece', () => {
      let PieceTest = new Piece();
      expect(PieceTest.draw).to.exist;
    });
    it ('draw tiene que poder ser ejecutado sin errores', () => {
      let PieceTest = new Piece();
      expect(PieceTest.draw()).not.to.throw;
    });
  });
});