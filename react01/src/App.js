import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
     form: {
      nome:'',
      email: '',
      senha: '',
      error: ''
     }
    }

    this.cadastrar = this.cadastrar.bind(this)
    this.getDadosForm = this.getDadosForm.bind(this)
   
  }

  cadastrar(event){
    const {nome, email, senha} = this.state.form;
    if(nome !== ''  && email !== '' && senha !== ''){
      alert(`Nome: ${nome}\n Email: ${email}\n Senha: ${senha}`)
      this.setState({ error: ''})
    }else {
      this.setState({ error: 'preencha todos os campos'})
    }
    
    event.preventDefault();
  }

  getDadosForm(e){
    let { form } = this.state
    form[e.target.name] = e.target.value;
    this.setState({ form: form})
   
  }

  render(){
    return (
      <>
        <h1>formularios</h1>
        {this.state.error && <h3> {this.state.error} </h3> }
        <form onSubmit={this.cadastrar}>
          <label htmlFor="">Nome:</label>
          <input type="text" name="nome" value={this.state.form.nome} onChange={this.getDadosForm}/>
          <br/>
          <label htmlFor="">Email:</label>
          <input type="email" name="email" value={this.state.form.email} onChange={this.getDadosForm}/>
          <br/>
          <label htmlFor="">Senha:</label>
          <input type="text" name="senha" value={this.state.form.senha} onChange={this.getDadosForm}/>
          <br/>

          <button type="submit" >Cadastrar</button>
          
        </form>
      </>
    )
  }
}

export default App;