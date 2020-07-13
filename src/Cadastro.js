import React from 'react';
import './App.css';
import './index.css';


function Cadastro() {

    return(<form action="#"> 
         
    <h1>Cadastre uma avenida</h1>

    <fieldset>
      <legend>
        <h2>Dados da Via</h2>
      </legend>

      <div className="field">
        <label for="name">Nome da Avendida</label> 
        <input type="text" name="name" placeholder="Digete nome"/>   
      </div>

      <div className="field">
          <label for="number">Extenção por KM</label>
          <input type="number" id="number_id" name="km" min="0" placeholder="Digite exteção por KM"/>
      </div>

      <div className="field-goup">
        
          <label for="number">Possui Ciclo Faixa? </label>
          <ul>
                <li className="radio">
                    <input type="radio" name="existeCicloFaixa" value="option1"/> Sim 
                </li>
                <li>
                    <input type="radio" name="existeCicloFaixa"value="option2"/> Não     
                </li>
          </ul>
      </div>   

    </fieldset>

    <button type="submit">Cadastrar avenida</button>
</form>);

}

export default Cadastro;