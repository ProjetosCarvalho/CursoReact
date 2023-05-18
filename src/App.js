import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import { useState } from 'react';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import Navbar from './components/Navbar';
import Footer from './components/layout/Footer';

function App() {
  const name = 'Giovanna'

  const newname = name.toUpperCase()

  function sum(a, b){
    return a + b
  }
  //const nome = "Alice" 
  const url = 'https://via.placeholder.com/150'

  const meusItens = ['React', 'Vue', 'Angular']

  const [nome, setNome] = useState()

  return (
    <div className="App">
      <h1>Olá React!</h1>
      <h2>Alterando o JSX</h2>
      <Frase/>
      <Frase/>
      <p>Olá, (name)</p>
      <p>Olá, {newname}</p>
      <p>Soma: {2 + 2}</p>
      <p>Soma: {sum(1,2)}</p>
      <img scr={url} alt= "Minha Imagem"/>
      <p>Meu primeiro App</p>
      <HelloWorld/>
      <SayMyName nome="Giovanna"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Gi" idade="16" profissao="estudante" foto="https://via.placeholder.com/150"/>
      <List/>
      <h1>Testando eventos</h1>
      <Evento/>
      <Form/>
      <h1>Renderização condicional</h1>
      <Condicional/>
      <h1>Renderização de listas</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>
      <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome}/>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/empresa">
            <Empresa/>
          </Route>
          <Route path="/contato">
            <Contato/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
