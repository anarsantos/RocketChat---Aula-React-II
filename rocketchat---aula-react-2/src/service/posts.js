import axios from 'axios'

const config = {
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000
//   tempo para mensagem de erro
}
// esse link não modifica

const protocolo = axios.create(config)

export function getMensagens () {
  const url = '/posts'
  return protocolo.get(url)
//   chama o método que eu quero
}