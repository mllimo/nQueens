/**
 * @author Antonio Raúl Guijarro Contreras <alu0101100494@ull.edu.es>
 * @file Declaración de la clase Shape. Generalización de metodos y atributos de las
 * figuras.
 * @copyright Antonio Raúl Guijarro Contreras 2020
 * @since 18.03.2020
 */


class Colors {
  /**
   * Objecto que contiene una gran variedad de colores.
  */
  static COLORS = {
    softGrey: '#bababa',
    mediumGrey: '#828282',
    hardGrey: '#4f4f4f',
  };

  /**
   * Genera un string en formato CSS-rgba con un color aleatorio
   * @return {string} Color en formato CSS-rgba
   */
  static random_rgba() {
    let r = Math.floor(Math.random()*256);          
    let g = Math.floor(Math.random()*256);          
    let b = Math.floor(Math.random()*256);          
    let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
    return rgb;
  }
}


export default Colors;