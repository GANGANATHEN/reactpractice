import './App.css'
import { ArraySample } from './components/ArraySample'
import ChildComponents from './components/ChildComponents'
import { Functionsample } from './components/Functionsample'
import { Multitype } from './components/Multitype'
import { NormalFile } from './components/NormalFile'
import { OneofSample } from './components/OneofSample'

function App() {

  const items =[
    {
      id: 1,
      name:'g'
    },
    {
      id: 2,
      name:'b'
    },
    {
      id: 3,
      name:'c'
  }]

  const handleClick=() =>{
    alert("why you clicked me?");
  }

  return (
    <>
      <NormalFile />
      <ChildComponents>
        <p>This is some text inside the child components 1</p>
        <p>This is some text inside the child components 2</p>
        <p>This is some text inside the child components 3</p>
        <p>This is some text inside the child components 4</p>
      </ChildComponents>
      <OneofSample color="blue" />
      <ArraySample items={items} />
      <Functionsample handleClick={handleClick} />
      <Multitype value={18} />
      <Multitype value:true />
      <Multitype value="hlo" />
    </>
  )
}

export default App
