import { useState } from 'react'
import SelectGestor from './componentes/select-input/select-gestor'
import './App.css'

const lista = [
  'item 72', 'item 16', 'item 34', 'item 21', 'item 50', 'item 45', 'item 68', 'item 81', 'item 74', 'item 160', 'item 345', 'item 210', 'item 50', 'item 45', 'item 68', 'item 81', 'other', 'a', 'AA', 'a bc'
]

function App() {

  const [selectValues, setSelectValues] = useState(null)

  return (
    <main>
      <h1 className="read-the-docs">
        Select Input Accesible
      </h1>

      <section>
        {
          selectValues && 
          selectValues.map((item, index) => (
            <span key={index}>-{item} </span>
          ))
        }
      </section>

      <div className='selectInputContainer'>
        <SelectGestor 
          getValues={setSelectValues}
          contentList={lista} 
          emptyMessage='No se encontraton resultados...' 
          placeHolder='Buscar y seleccionar'
        />
      </div>

    </main>
  )
}

export default App