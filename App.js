import { useState } from 'react';

import Nome from './components/Nome'

function App(){
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState(0);

  const [user, setUser] = useState({});

  function handleRegister(e) {
    e.preventDefault();

    alert("Usuario registrado com sucesso!")

    setUser({
      nome: nome,
      idade: idade,
      email: email,
    })
  }

  return(
  <div>
    <h1>Cadastrando usuario</h1>

    <form onSubmit={handleRegister}>
     <label>Nome:</label><br/>
     <input 
     placeholder="Digite seu nome:"
     value={nome}
     onChange={ (e) => setNome(e.target.value) }/><br/>

     <label>Email:</label><br/>
     <input placeholder="Digite seu email:"
     value={email}
     onChange={ (e) => setEmail(e.target.value) }/><br/>

     <label>Idade:</label><br/>
     <input placeholder="Digite sua idade:"
     value={idade}
     onChange={ (e) => setIdade(e.target.value) }/><br/>

     <button type='submit'>Registrar</button>
    </form>

    <br/><br/>

    <div>
      <span>Bem vindo: {user.nome}</span><br/>
      <span>Email: {user.email}</span><br/>
      <span>Idade: {user.idade}</span><br/>
    </div>
  </div>
  );
}

export default App;  

