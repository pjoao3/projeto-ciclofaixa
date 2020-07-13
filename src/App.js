import React from 'react';
import { Form } from '@unform/web';
import Input from './components/Input';
import Header from './Header';
import Footer from './Footer';
import Cards from './Cards';
import './index.css';
import './App.css'




function App() {
  function handleSubmit(data){
    console.log(data)
  }

  return (
    <div className="App"> 
      
      <Header name="Eco-Via"></Header>
    
      
      <Form onSubmit={handleSubmit}>

      <h1 className="h1">Cadastre uma avenida</h1>
      <fieldset>
      <legend>
      <h2 className="h2">Dados da Via</h2>
      </legend>
      <div className="field">
        <label for="name">Nome da Avendida</label> 
        <Input type="text" name="name" placeholder="Digete nome"/>   
      </div> 

      <div className="field">
        <label for="number">Extenção por KM</label>
        <Input className="field" type="number" id="number_id" name="km" min="0" placeholder="Digite exteção por KM"/>
      </div>

      <div className="field-group">
        <label for="number">Possui Ciclo Faixa? </label>
      <ul> 
        <li>
          <Input type="radio" name="existeCicloFaixa" value="option1" onclick="exibeOutros()"/> Sim <br/>
          <Input type="radio" name="existeCicloFaixa"value="option2"/> Não   
        </li>
      </ul>
        </div>

        <button type="submit" onClick="#">Cadastrar avenida</button>
        </fieldset>
      </Form>

     {/* <Cards></Cards> */}
    
      
      <Footer></Footer>

   
    </div>          
  );
}

export default App;