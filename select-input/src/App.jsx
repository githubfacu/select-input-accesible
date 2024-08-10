import { useRef, useState } from 'react'
import SelectGestor from './componentes/select-input/select-gestor'
import './App.css'

const lista = [
  'item 72', 'item 16', 'item 34', 'item 21',
  'item 50', 'item 45', 'item 68', 'item 81',
  'item 74', 'item 160', 'item 345', 'item 210',
  'item 50', 'item 45', 'item 68', 'item 81',
  'other', 'a', 'AA', 'a bc'
]

const lista2 = [
  'John Doe', 'Jane Smith', 'Michael Johnson', 'Emily Williams', 'David Brown', 
  'Sarah Miller', 'Robert Davis', 'Linda Wilson', 'James Moore', 'Maria Garcia', 
  'Thomas Taylor', 'Jennifer Martinez', 'David Brown', 'Sarah Miller', 'Robert Davis', 
  'Linda Wilson', 'Other Person', 'Alice Adams', 'Alex Anderson', 'Anna Baker'
];

function App() {

  const [ itemsCollected, setItemsCollected ] = useState([])
  const itemsRef = useRef(null)

  const selectItem = (item) => {
    setItemsCollected([...itemsCollected, item])
  }

  const deleteItem = (value) => {

    const updatedList = itemsCollected.filter((item) => item !== value)

    return setItemsCollected(updatedList)
  }

  return (
    <main>
      <h1 className="read-the-docs">
        Select Input Accesible
      </h1>

      <section ref={itemsRef} tabIndex={0}>
        {
          itemsCollected && 
          itemsCollected.map((item, index) => (
            <span
              key={index}
              onClick={() => deleteItem(item)}
              tabIndex={0}
            >-{item} </span>
          ))
        }
      </section>

      <div className='selectInputContainer'>

        <SelectGestor 
          contentList={lista2}         
          itemsCollected={itemsCollected}
          emptyMessage='No se encontraton resultados...' 
          placeHolder='Buscar y seleccionar'
          selectItem={selectItem}
          itemsRef={itemsRef}
        />

      </div>

    </main>
  )
}

export default App