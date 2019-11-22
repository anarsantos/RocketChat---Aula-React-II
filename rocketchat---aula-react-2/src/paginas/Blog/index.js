import React from 'react'
import Header from '../../componentes/Header'
import { getMensagens } from '../../service/posts'
import './style.css'
import Postagem from './Postagem'

class Blog extends React.Component {
    constructor (props) {
        super(props)
        this.state={
            titulos: ''
        }
    }

    componentDidMount(){
        getMensagens()
        .then(response => {
            this.setState({
                titulos: response.data
            })
        })
        .catch(error => {
            console.error(error)
        })
    }

    render() {
        return (
            <section>

            <Header
            classImg='blog-header'
            titulo='Blog'
            ></Header>
            <div>
                {this.state.titulos.length > 0
                ? this.state.titulos.map(post => {
                    return <Postagem post ={post} key={post.id}/>
                })
                :<span>Carrengando post</span>
                }
            </div>

            </section>
        )
    }
}

export default Blog
