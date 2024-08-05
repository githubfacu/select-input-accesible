import React, { useEffect, useRef, useState } from 'react'
import styles from './select.module.css'
import { Input } from './elementos/input'
import { SelectList } from './elementos/select-list'

const Select = ({itemsCollected, selectItem, contentList, emptyMessage, placeHolder}) => {

    const [inputValue, setInputValue] = useState('')
    const [listaDisplay, setListaDisplay] = useState("none")

    const selectRef = useRef(null)
    const inputRef = useRef(null);

    const desplegarLista = () => {
        setListaDisplay('flex')
    }

    useEffect(() => {
        function clickOut(event) {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setListaDisplay("none");
            }
        }
        document.addEventListener('mousedown', clickOut);
        return () => {
            document.removeEventListener('mousedown', clickOut);
        };
    }, [])


  return (
    <div className={styles.selectInput}>

        <div className={styles.inputWithArrowDiv} >
            <Input 
                inputValue={inputValue}
                inputRef={inputRef}
                placeHolder={placeHolder}
                desplegarLista={desplegarLista}
                setInputValue={setInputValue}
            />
        </div>

        <div className={styles.listaContainer}>
            <SelectList 
                inputValue={inputValue}
                setInputValue={setInputValue}
                listaDisplay={listaDisplay}
                setListaDisplay={setListaDisplay}
                contentList={contentList}
                inputRef={inputRef}
                selectRef={selectRef}
                selectItem={selectItem}
                itemsCollected={itemsCollected}
                emptyMessage={emptyMessage}
            />
        </div>

    </div>
  )
}

export default Select