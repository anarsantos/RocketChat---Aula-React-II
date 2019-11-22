import React from 'react'
import './styles.css'


function Header (props) {
    return (
        <section className={props.classImg}>
            <h1>{props.titulo}</h1>
        </section>
    )
}

export default Header