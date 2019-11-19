import React from 'react'


function CaixaTexto(props) {

    function validaCampo (evento) {
        const { value, name } = evento.target
    // const value = evento.target.value
    // const name = evento.target.name

        if(props.required && value.trim() === ''){
            props.mudaEstado(name, value, 'Campo obrigatório')
            return 
        }

    if(props.minLength && value.length < props.minLength) {
        props.mudaEstado(name, value, `Digite pelo menos ${props.minLength} caracteres`)
        return
    }

    const regex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/

    if(props.type === 'email' && !regex.test(value)) {
        props.mudaEstado(name, value, 'Digite um email válido')
    }
    props.mudaEstado(name, value)

    }
    
    return (
        <input
            name={props.name}
            type='text'
            className='campo'
            placeholder={props.placeholder}
            onChange={validaCampo}
        />
    )
}

export default CaixaTexto