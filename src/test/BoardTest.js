let expect;

if (typeof require !== 'undefined') { // Execution in node
  expect = require('chai').expect;
} else { // Execution in browser
  expect = chai.expect;
}

import Board from '../scripts/Board.js';

describe('Clase Board tests', ()=>{

  describe('Comportamiento del constructor', ()=>{
    it('Debería generar un objeto Board', () => {
      let BoardTest = new Board();
      expect(BoardTest).to.be.a('Object');
    });
    it('Debería tener los siguientes atriburos miembro:', () => {
      let BoardTest = new Board();
      expect(BoardTest).to.have.property('horizontalBoxes');
      expect(BoardTest).to.have.property('verticalBoxes');
      expect(BoardTest).to.have.property('width');
      expect(BoardTest).to.have.property('height');
      expect(BoardTest).to.have.property('elements');
    });
  });

  describe('Métodos de la clase', () => {
    it ('Tiene que tener un método para poder dibujar un tablero', () => {
      let BoardTest = new Board();
      expect(BoardTest.draw).to.exist;
    });
    it ('draw tiene que poder ser ejecutado sin errores', () => {
      let BoardTest = new Board();
      expect(BoardTest.draw()).not.to.throw;
    });
    it ('Tiene que tener un método para poder generar un tablero dado un tamaño', () => {
      let BoardTest = new Board();
      expect(BoardTest.build).to.exist;
    });
    it ('Tiene que tener un método para poder generar patrones asimétrico de tablero dado un patrón estandar', () => {
      let BoardTest = new Board();
      expect(BoardTest.makeAsimetricPatern).to.exist;
    });
    it ('makeAsimetricPatern tiene que funcionar', () => {
      let BoardTest = new Board(2, 2);
      let expected = ['black','white', 'white', 'black'];
      expect(BoardTest.makeAsimetricPatern(['black', 'white'])).to.eql(expected);
    });
    it ('Tiene que tener un método par poder importar elementos en las distintas cuadriculas del tablero ', () => {
      let BoardTest = new Board();
      expect(BoardTest.importElements).to.exist;
    });
    it ('Tiene que tener método para poder mover elementos del tablero', () => {
      let BoardTest = new Board();
      expect(BoardTest.move).to.exist;
    });
    it ('Tiene un método para poder convertir coordenadas numéricas a algebráicas', () => {
      let BoardTest = new Board();
      expect(BoardTest.translate).to.exist;
    });
    it ('Translate tiene que poder funcionar', () => {
      let BoardTest = new Board();
      expect(BoardTest.translate(1,1)).to.eql("b2");
      expect(BoardTest.translate(13,8)).to.eql("i14");
    });
    it ('Tiene que existir un método para insertar un elemento en el conjunto de elementos', () => {
      let BoardTest = new Board();
      expect(BoardTest.setElement).to.exist;
    });
    it ('setElement tiene que poder funcionar', () => {
      let BoardTest = new Board(6,6);
      BoardTest.build(100,100);
      BoardTest.setElement(1, 1, 10);
      expect(10).to.eq(BoardTest.elements[BoardTest.translate(1,1)].element);
    });
  });
});