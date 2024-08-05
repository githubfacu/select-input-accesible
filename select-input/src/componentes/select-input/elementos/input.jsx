import React from 'react'

export const Input = ({inputValue, inputRef, placeHolder, desplegarLista, setInputValue}) => {


  return (
    <>
        <input type="text"
            value={inputValue}
            placeholder={placeHolder}
            aria-label="Campo de búsqueda y selección"
            ref={inputRef}
            onClick={desplegarLista}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    desplegarLista();
                }
            }}
            onChange={(e) => setInputValue(e.target.value)}
        />
    </>
  )
}