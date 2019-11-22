import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PaginaInicial from './paginas/PaginaInicial'
import Contato from './paginas/Contato'
import Chat from './paginas/Chat'
import Nav from './componentes/Nav'
import Blog from './paginas/Blog'

import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path='/' component={PaginaInicial} ></Route>
        <Route path='/contato' component={Contato}></Route>
        <Route path='/chat' component={Chat}></Route>
        <Route path='/blog' component={Blog}></Route>
      </Switch>
      
      
    </div>
  );
}

export default App;
