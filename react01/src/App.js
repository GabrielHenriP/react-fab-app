import React from 'react';

const Sobre = ({ nome, cargo, idade}) => {
  return (
    <>
      <h2>Olá sou(a) {nome} </h2>
      <h3>Cargo: {cargo} </h3>
      <h3>Idade: {idade} </h3>
    </>
  );
};

const Social = ({ insta }) => {
  return (
    <>
     <a href="#">Linkedin</a>
     <a href={insta}>Instagran</a>
     <a href="#">Github</a>
    </>
  );
};

const Equipe = ({ nome, cargo, idade, instagran}) => {
  return (
    <>
      <Sobre nome={nome} cargo={cargo} idade={idade}/>
      <Social insta={instagran}/>
    </>
  );
};

export default function App() {
  return (
    <>
      <h1>Conheça Nossa Equipe</h1>
      <br/>
      <Equipe nome="gabriel" cargo="Programador" idade="26" instagran="https://www.instagram.com/" />
      <Equipe nome="pedro" cargo="engenheiro" idade="29" />
    </>
  )
};