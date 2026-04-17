import {useState} from 'react';
import './App.css';
import varesa from "./assets/varesa.png";

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <main>
    <section id='window' className="window">
  <div className="nome">
    <span>ivyoliveira.exe</span>
  </div>

  <div className="content">
    Genshin builds  ୭ ˚. ₍ᐢ. .ᐢ₎ ₊˚⊹♡
  </div>
</section>
<input type="text" className="campo" placeholder="Pesquisar... ⌕" />
<section className= 'Varesa'>
  <div className="b1">
    <span>Varesa build - overload </span>
  </div>
  <h1> Varesa, Mavuika, Iansan, Chevreuse</h1>
  <img className="varesa" src={varesa} alt=""></img>
</section>
<button className="botao1">Arco-Íris</button>
  </main>
    </>
  )
}