import { useMemo } from 'react'

/**
 * Hook personalizado para lidar com reconhecimento de fala.
 * Este hook inicializa e fornece uma instância de reconhecimento de fala, juntamente com uma bandeira indicando se a API de reconhecimento de fala está disponível no navegador.
 * Ele retorna um objeto contendo a instância de reconhecimento de fala e uma bandeira indicando a disponibilidade da API.
 */
export const useSpeechRecognition = () => {
  // Utiliza useMemo para inicializar a instância de reconhecimento de fala apenas uma vez
  const speechRecognition = useMemo(() => {
    // Verifica se a API de reconhecimento de fala está disponível no navegador
    const SpeechRecognitionAPI =
      window.SpeechRecognition || window.webkitSpeechRecognition

    // Cria uma nova instância da API de reconhecimento de fala
    const _speechRecognition = new SpeechRecognitionAPI()

    // Configurações da instância de reconhecimento de fala
    _speechRecognition.lang = 'pt-BR' // Define o idioma para português do Brasil
    _speechRecognition.continuous = true // Habilita o reconhecimento contínuo
    _speechRecognition.maxAlternatives = 1 // Define o número máximo de alternativas para 1
    _speechRecognition.interimResults = true // Habilita resultados intermediários

    return _speechRecognition // Retorna a instância de reconhecimento de fala configurada
  }, [])

  // Verifica se a API de reconhecimento de fala está disponível no navegador
  const isSpeechRecognizeAPIAvailable =
    'SpeechRecognition' in window || 'webkitSpeechRecognition' in window

  // Retorna um objeto contendo a instância de reconhecimento de fala e uma bandeira indicando a disponibilidade da API
  return {
    speechRecognition,
    isSpeechRecognizeAPIAvailable,
  }
}
