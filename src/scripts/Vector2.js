/**
 * @author Antonio Raúl Guijarro Contreras <alu0101100494@ull.edu.es>
 * @file Declaración de la clase Vector2. Simula el comportamiento de un vector bidimesional
 * @copyright Antonio Raúl Guijarro Contreras 2020
 * @since 21.04.2020
 */

'use stric'

/**
 * Clase Vector2. Simula el comportamiento de un vector bidimesional
 */
class Vector2 {

  /**
   * @param {Number} x Coordenada en el eje x
   * @param {Number} y Coordenada en el eje y
   */
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  /**
   * Getter que devolverá las coordenadas en forma de array.
   */
  get() {
    return [this.x, this.y];
  }

  /**
   * Realiza la suma entre el vector que invoca y el argumento. El resultado no se almacena
   * en el invocante; Retorna el resultado.
   * @param {Vector2} vector2 Vector bidimensional
   * @return {Vector2} Resultado de la suma de ambos vectores.
   */
  add(vector2) {
    return new Vector2(this.x + vector2.x, this.y + vector2.y);
  }

  /**
   * Realiza la resta entre el vector que invoca y el argumento. El resultado no se almacena
   * en el invocante; Retorna el resultado.
   * @param {Vector2} vector2 Vector bidimensional
   * @return {Vector2} Resultado de la suma de ambos vectores.
   */
  subs(vector2) {
    return new Vector2(this.x - vector2.x, this.y - vector2.y);
  }

  /**
   * Realiza la multiplicación entre el vector que invoca y el argumento. El resultado no se almacena
   * en el invocante; Retorna el resultado.
   * @param {Vector2} vector2 Vector bidimensional
   * @return {Vector2} Resultado de la suma de ambos vectores.
   */
  mult(vector2) {
    return this.x * vector2.x + this.y * vector2.y;
  }

  /**
   * Realiza la multiplicación entre el vector que invoca y el argumento. El resultado no se almacena
   * en el invocante; Retorna el resultado.
   * @param {Vector2} vector2 Vector bidimensional
   * @return {Vector2} Resultado de la suma de ambos vectores.
  */
  multScalar(scalar) {
    return new Vector2(this.x * scalar, this.y * scalar);
  }


  /**
   * Realiza la multiplicación entre el vector que invoca y el argumento. El resultado no se almacena
   * en el invocante; Retorna el resultado.
   * @param {Vector2} vector2 Vector bidimensional
   * @return {Vector2} Resultado de la suma de ambos vectores.
   */
  divideScalar(scalar) {
    return new Vector2(this.x / scalar, this.y / scalar);
  }

}

export default Vector2;