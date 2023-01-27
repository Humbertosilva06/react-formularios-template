import React, { useState } from 'react'
import useForm from '../../hooks/useForm'
import { MainContainer, Form, Input } from './styles'

//1.1 temos 3 estados e 3 handlers, um para cada input do formulario, iremos otimizar isso (pense em um formulario com 10, 15 campos, teriamos que ter 15 estados e 15 handlers pra isso), iremos criar um custom hook paara recolver isso

function MainPage() {

  //chamamos nosso custom hook, (ele esta retornando o estado form que esta la no custom hook, parraremos os valores que iremos setar como argumetnos (aqui, um obejto com as propriesdades de nosso formulario: nome, idade e email))

  // recebo os retornos do usefor de forma desestruturada 
  // colocamos o onchage nos inputs, pois agora servira para todos, e nos values dos inputs nosso estado form.chave (quando preenchermos os inputs, ele setara na chave do estado)
  
  const {form, onChange, clear} = useForm({
    nome:"",
    idade:"",
    email:""
  })

  console.log("form",form)
 
  // chamamos a função clear aqui, pois apos abertar o botao, o input é limpo
  const handleClick = (event) => {
    event.preventDefault()
    clear()

  }

  // adicionamos a propriedade name nos inputs de html, e o valor tem que ser o mesmo nome das chaves do nosso objeto que esta no estado form, pois a função onchang agora chamara por esse nome

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome:</label>
        <Input 
          id="nome"
          name='nome'
          value={form.nome}
          onChange={onChange}
        />

        <label htmlFor="idade">Idade:</label>
        <Input 
          id="idade"
          name='idade'
          value={form.idade}
          onChange={onChange}
        />

        <label htmlFor="email">E-mail:</label>
        <Input 
          id="email"
          name='email'
          value={form.email}
          onChange={onChange}
        />
        
        
      <button type="submit">Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
