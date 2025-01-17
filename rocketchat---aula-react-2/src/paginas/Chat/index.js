import React from 'react'
import { getMensagens } from '../../service/posts'

import './styles.css'
import Mensagem from './componentes/Mensagem'

class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mensagens: []
        }
    }
    componentDidMount() {
        getMensagens()
        .then(response => {
            this.setState({
                mensagens: response.data
            })
        })
        .catch(error => {
            console.error(error)
        })
        
}

render () {
    return (
        <section className='chat'>
            <h2>Mensagens</h2>
            {this.state.mensagens.length > 0
            ? this.state.mensagens.map(mensagem => {
            return <Mensagem mensagem={mensagem} key={mensagem.id} />
        })
        : <span>Carregando mensagens :D</span>
    }
        </section>
    )
}
}



// function Chat () {
//     return (
//         <section className='chat'>
//             <p>Chat</p>
//         </section>
//     )
// }

export default Chat