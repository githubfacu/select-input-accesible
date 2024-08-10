import React, { useEffect, useState } from 'react'

export const SelectList = ({inputValue, setInputValue, listaDisplay, setListaDisplay, contentList, inputRef, selectRef, selectItem, itemsCollected, emptyMessage}) => {

    const [itemsList, setItemsList] = useState(contentList)

    const filtrarItems = (entrada) => {

        const arrayfiltrado = contentList.filter((item) => item.toLowerCase().includes(entrada.toLowerCase()));
        setItemsList(arrayfiltrado);
    }

    useEffect(() => {
        filtrarItems(inputValue)
    }, [inputValue])

    const clickItem = (item) => {

        inputRef.current && inputRef.current.focus();
        
        if (itemsCollected.some((itemCollect) => itemCollect === item)) {
            return alert('El item ya fue seleccionado')
        }

        /*avisar seleccion*/ 

        selectItem(item)
        setInputValue('')
        setListaDisplay('none')
    }

  return (
    <ul style={{ display: `${listaDisplay}` }}
        ref={selectRef} 
        role="listbox"
        aria-label="Lista de elementos">

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