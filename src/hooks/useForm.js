import { useState } from "react"

// como é uma função, chamaremos ela onde precisamos, enviaremos os parametros do formulario, eles serão setados aqui e retornados pra onde forma chamados
export default function useForm(initialState){
    // colocamops um estado generico, que podera receber diversas coisa diferentes como argumento no parametro do usefORM, faremos isso la na mainpage

 
    
const [form, setForm] = useState(initialState)

// fizemos um handler generico tbm para receber varias coisas

    // sempre que utilizarmos array ou objeto no estado, temos que trabalhar com a copia dele (como quando adicionamos no carrinho de compras)

const onChange = (event)=>{

    // como vamos receber um argumento que é um objeto com o valor dos meu in´puts, para atualizar o estado eu faço uma copia dele, e adiciono os valores
    // aqui primeiros passamos o event target value pra uma variavel e setamos o formulario com a copia do form (que por enquanto são as chaves nome, emaol e endereço vazias, e colocamos os valores das chaves como a const value, que pegou os valores do inputs)
    const value = event.target.value
    const name = event.target.name

    // depois de colocarmos o name no input html igual o nome das chaves do objeto no estado, criamos essa const name = event.target.name e dizemos que no setform que name: value. ele esta pegando o input pelos nomes, e como as chaves tem o mesmo nome, jka consehguimos adciocionar automaticamente seus valores

    // OBS: o name tem que estar entre []
    setForm ({...form, [name]:value })}

    // setform = copia do form(as chaves estao vazias), a chave nome recebe o input capturado nomee seta na chave nome do estado form (agora não estara masi vazio) 

    // função paralimpar os inmputs
    const clear = ()=>{
        setForm(initialState)
    }
    // retornamos o obejto com o estado e com a função onchange, para usarmos na mains page
    

    return {form, onChange, clear}
}