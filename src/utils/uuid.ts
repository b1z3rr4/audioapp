/**
 * Classe que fornece métodos para geração de identificadores únicos.
 * Esses identificadores são strings aleatórias que são altamente improváveis de se repetirem.
 */
class Uuid {
  /**
   * Gera um novo identificador único.
   * @returns {string} - Uma string única que serve como identificador.
   * Esta string é gerada aleatoriamente e é extremamente improvável que se repita.
   */
  generate(): string {
    return crypto.randomUUID()
  }
}

export default new Uuid()
