import { toast } from 'sonner'

/**
 * Classe que fornece métodos para exibir mensagens de Snackbar.
 * Um Snackbar é uma notificação temporária que pode ser usada para exibir mensagens de sucesso, erro, informação ou alerta.
 */
class Snackbar {
  /**
   * Exibe uma mensagem de sucesso.
   * @param {string} message - A mensagem a ser exibida.
   */
  success(message: string) {
    toast.success(message)
  }

  /**
   * Exibe uma mensagem de erro.
   * @param {string} message - A mensagem a ser exibida.
   */
  error(message: string) {
    toast.error(message)
  }

  /**
   * Exibe uma mensagem de informação.
   * @param {string} message - A mensagem a ser exibida.
   */
  info(message: string) {
    toast.info(message)
  }

  /**
   * Exibe uma mensagem de alerta.
   * @param {string} message - A mensagem a ser exibida.
   */
  alert(message: string) {
    toast.warning(message)
  }
}

export default new Snackbar()
