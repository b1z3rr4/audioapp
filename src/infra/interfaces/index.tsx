/**
 * Interface representando uma nota.
 * Uma nota é uma entidade que possui um identificador único, uma data e um conteúdo.
 */
export interface Note {
  /**
   * O identificador único da nota.
   * É uma string que identifica exclusivamente esta nota.
   */
  id: string

  /**
   * A data em que a nota foi criada ou modificada.
   * É um objeto do tipo Date que representa o momento em que a nota foi registrada.
   */
  date: Date

  /**
   * O conteúdo da nota.
   * É uma string que contém o texto ou informações associadas à nota.
   */
  content: string
}
