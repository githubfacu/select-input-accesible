import React, { useEffect, useState } from 'react'

export const SelectList = ({inputValue, setInputValue, listaDisplay, setListaDisplay, contentList, selectRef, itemsRef, selectItem, itemsCollected, emptyMessage}) => {

    const [itemsList, setItemsList] = useState(contentList)

    const filtrarItems = (entrada) => {

        const arrayfiltrado = contentList.filter((item) => item.toLowerCase().includes(entrada.toLowerCase()));
        setItemsList(arrayfiltrado);
    }

    useEffect(() => {
        filtrarItems(inputValue)
    }, [inputValue])

    const clickItem = (item) => {


        if (itemsCollected.some((itemCollect) => itemCollect === item)) {
            return alert('El item ya fue seleccionado')
        }

        alert(`El item ${item} ha sido seleccionado`)

        selectItem(item)
        setInputValue('')
        setListaDisplay('none')
        itemsRef.current && itemsRef.current.focus();        
    }

  return (
    <ul style={{ display: `${listaDisplay}` }}
        role="listbox"
        aria-label="Lista de elementos"
        ref={selectRef}
        >
        {
            (inputValue !== '' && itemsList.length === 0) &&
            <li className='emptyMessage' >{emptyMessage}</li>                    
        }

        {
            itemsList.map((item) => (
                <li key={item}
                    role="option"
                    tabIndex="0"
                    onClick={() => clickItem(item)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            clickItem(item);
                        }
                    }}
                >
                    {item}
                </li>
            ))
        }
        
    </ul>
  )
}