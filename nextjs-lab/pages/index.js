import { useState } from "react"
import Pessoa from "../components/Pessoa"
import comAutorizacao from "../hoc/comAutorizacao";

function Home() {
  const [idadeRafael , setIdadeRafael] = useState(26);
  const pessoas = [
    {
      nomePessoa : 'Cleiton',
      idadePessoa: 18
    },
    {
      nomePessoa: 'Suellen',
      idadePessoa :26
    },
    {
      nomePessoa: 'Fernanda',
      idadePessoa: 29
    }
  ]
 
  const incrementaIdadeRafael = () =>{
    setIdadeRafael(++idadeRafael)
  }

  return (
   <> 
    <h1>Olá Mundo!{process.env.NEXT_PUBLIC_TESTE}</h1>
    <Pessoa nome='Rafael' idade= {idadeRafael}/>
    <Pessoa nome='Rafa' idade= {30}/>

    {pessoas.map(({nomePessoa , idadePessoa },index) => 
    {return <Pessoa 
      nome={nomePessoa} 
      idade={idadePessoa}
      key={index}
    />})}

    <button onClick={incrementaIdadeRafael}>Incrementa idade do Rafael</button>
   </>
  )
}
export default comAutorizacao(Home);