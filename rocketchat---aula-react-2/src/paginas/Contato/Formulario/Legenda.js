import React from 'react'

function Legenda (props) {
    return (
        <label htmlFor={props.htmlFor}>
            {props.nomeLegenda}
        </label>
    )
}

export default Legenda