import { ChangeEvent, FormEvent, useState } from 'react'
import { AddNoteProps } from '.'
import { useSpeechRecognition } from '../../../hooks/useSpeechRecognition'
import snackbar from '../../../utils/snackbar'
import validate from '../../../utils/validate'

/**
 * Hook personalizado para adicionar uma nova nota.
 * Este hook gerencia o estado e as funções relacionadas à adição de uma nova nota.
 * Ele lida com a entrada de texto manual ou gravação de voz para criar uma nova nota, valida o conteúdo da nota e exibe feedback ao usuário.
 * Retorna um objeto contendo o estado atual e manipuladores de eventos relacionados à adição de uma nova nota.
 */
export const useAddNote = ({ onNoteCreated }: AddNoteProps) => {
  // Estado para controlar se a tela de introdução deve ser exibida
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true)

  // Estado para armazenar o conteúdo da nota
  const [content, setContent] = useState<string>('')

  // Estado para controlar se a gravação de voz está ativa
  const [isRecording, setIsRecording] = useState(true)

  // Obtém a instância de reconhecimento de fala e verifica se a API de reconhecimento de fala está disponível
  const { isSpeechRecognizeAPIAvailable, speechRecognition } =
    useSpeechRecognition()

  // Manipulador de evento para iniciar o editor
  const handleStartEditor = () => {
    setShouldShowOnboarding(false)
  }

  // Manipulador de evento para alterar o conteúdo da nota
  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // Valida o valor do conteúdo
    const isNotValidValue = !validate.string(e.target.value)

    // Se o valor não for válido, exibe a tela de introdução
    if (isNotValidValue) {
      setShouldShowOnboarding(true)
    }

    // Atualiza o estado com o novo conteúdo
    setContent(e.target.value)
  }

  // Manipulador de evento para salvar a nota
  const handleSaveNote = (e: FormEvent) => {
    e.preventDefault()

    // Valida o conteúdo da nota
    const isNotValidValue = !validate.string(content)

    // Se o conteúdo não for válido, interrompe a execução
    if (isNotValidValue) return

    // Chama a função fornecida para criar uma nova nota
    onNoteCreated(content)

    // Limpa o conteúdo da nota
    setContent('')

    // Exibe a tela de introdução
    setShouldShowOnboarding(true)

    // Exibe uma mensagem de sucesso ao usuário
    snackbar.success('Nota criada com sucesso.')
  }

  // Manipulador de evento para iniciar a gravação de voz
  const handleStartRecording = () => {
    // Verifica se a API de reconhecimento de fala está disponível
    if (!isSpeechRecognizeAPIAvailable) {
      alert('Seu navegador não suporta a API de gravação!')
      return
    }

    // Inicia a gravação de voz
    setIsRecording(true)
    setShouldShowOnboarding(false)

    // Configura os eventos de resultado e erro para a instância de reconhecimento de fala
    speechRecognition.onresult = (event) => {
      const transcription = Array.from(event.results).reduce((text, result) => {
        return text.concat(result[0].transcript)
      }, '')

      setContent(transcription)
    }

    speechRecognition.onerror = (event) => {
      console.error(event)
      snackbar.error(
        'Parece que algo deu errado ao tentar transcrever seu áudio.',
      )
    }

    // Inicia o reconhecimento de fala
    speechRecognition.start()
  }

  // Manipulador de evento para parar a gravação de voz
  const handleStopRecording = () => {
    setIsRecording(false)

    // Para o reconhecimento de fala, se estiver ativo
    if (speechRecognition) {
      speechRecognition.stop()
    }
  }

  return {
    shouldShowOnboarding,
    isRecording,
    content,
    handleStartEditor,
    handleContentChange,
    handleSaveNote,
    handleStartRecording,
    handleStopRecording,
  }
};
