/**
 * Classe que fornece métodos para validar dados.
 * Esta classe contém métodos para validar strings e números.
 */
class Validate {
  /**
   * Valida uma string.
   * @param {string} value - A string a ser validada.
   * @returns {boolean} - Retorna verdadeiro se a string for válida, caso contrário, falso.
   */
  string(value: string): boolean {
    // Verifica se a string não é nula, vazia ou undefined
    const isValidString = !!value && value !== ''
    return isValidString
  }

  /**
   * Valida um número.
   * @param {number} value - O número a ser validado.
   * @returns {boolean} - Retorna verdadeiro se o número for válido, caso contrário, falso.
   */
  number(value: number): boolean {
    // Verifica se o valor não é nulo e não é NaN (não é um número)
    const isValidNumber = !!value && !isNaN(value)
    return isValidNumber
  }
}

export default new Validate()
