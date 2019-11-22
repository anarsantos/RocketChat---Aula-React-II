import React from 'react'
import './style.css'

export default function Postagem(props) {
    return (
        <div className="postagem">
            <h3>{props.post.title}</h3>
            <p>{props.post.body}</p>
            <button className="botao">Saiba mais</button>
        </div>
    )
} 