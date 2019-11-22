import axios from 'axios'

const config = {
  baseURL: 'https://my-json-server.typicode.com',
  timeout: 1000
//   tempo para mensagem de erro
}
// esse link não modifica

const protocolo = axios.create(config)

export function getMensagens () {
  const url = '/reprograma/T8-React-II/mensagens'
  return protocolo.get(url)
//   chama o método que eu quero
}