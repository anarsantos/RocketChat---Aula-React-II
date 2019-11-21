import React from 'react'
import Botao from '../Formulario/componentes/Botao'

function Sucesso (props) {
    return (
        <div className='pagina'>
            <h2>Cadastro realizado com sucesso!</h2>
            
            <Botao
            mudaConteudo={props.mudaConteudo}
            pagina='formulario'
            type='button'
            >Voltar</Botao>
            {/* é children de botao */}
        </div>
    )
}

export default Sucesso