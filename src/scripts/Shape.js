/**
 * @author Antonio Raúl Guijarro Contreras <alu0101100494@ull.edu.es>
 * @file Declaración de la clase Shape. Generalización de metodos y atributos de las
 * figuras.
 * @copyright Antonio Raúl Guijarro Contreras 2020
 * @since 13.03.2020
 */

'use strinc'


/** 
 * Clase padre de las figuras. Almacena métodos para poder dibujar dentro de un canvas
 * las figuras que hereden de él.
*/
class Shape {

  /**
   * @static Almacena todos los posibles bordes, es decir, si son redondeados,
   * cuadrados o butt.
   */
  static lineCap = {
    butt: 'butt',
    round: 'round',
    square: 'square'
  }

  /**
   * @static Almacena un conjunto de patrones para el stroke. Línea continua, discontinua con varias
   * distancias y patrones de separación
   */
  static dashLine = {
    continuous: [],
    discontinuousVeryShort: [1, 1],
    discontinuousShort: [10, 10],
    discontinuousLong: [20, 5],
    discontinuousMediumDot: [15, 3, 3, 3],
    discontinuousLong3Dot: [20, 3, 3, 3, 3, 3, 3, 3],
    discontinuousLongShort: [12, 3, 3]
  }

  /**
   * Constructor de la clase Shape.
   * @param {string} color Color en formato CSS
   * @class Shape
   */
  constructor(color = 'black') {
    this.lineCap = Shape.lineCap.square;
    this.fillStyle = color;
    this.strokeStyle = color;
    this.strokeWidth = 1;
    this.rotate = 0;
    this.scale = [1, 1];
    this.isDiscontinuous = false;
    this.distanceDiscontinuous = [10 ,10];
  }


  /* istanbul ignore next   */
  /**
   * Asienta los atributos de la figura para ser dibujada.
   * @param {context} ctx Contexto del canvas.
   */
  baseDraw(ctx) {
    if (ctx != null) {
      ctx.beginPath();
      if (this.isDiscontinuous) {
        ctx.setLineDash(this.distanceDiscontinuous);
      } else {
        ctx.setLineDash([0, 0]);
      }
      ctx.lineWidth = this.strokeWidth;
      ctx.lineCap = this.lineCap;
      ctx.fillStyle = this.fillStyle;
      ctx.strokeStyle = this.strokeStyle;
      ctx.rotate(this.rotate);
      ctx.scale(...this.scale);
    }
  }
}

export default Shape;