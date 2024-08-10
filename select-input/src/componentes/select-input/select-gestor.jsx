import React from 'react'
import Select from './select'

const SelectGestor = ({contentList, itemsCollected, emptyMessage, placeHolder, selectItem, itemsRef}) => {


  const contentListOptimized = Array.from(new Set(contentList)).sort((a, b) => {
    const getWordsAndNumbers = (str) => {
        return str.split(/\s+/).map(word => {
            const num = parseInt(word.match(/\d+/)?.[0], 10)
            return isNaN(num) ? word.toLowerCase() : num
        });
    };

    const arrA = getWordsAndNumbers(a)
    const arrB = getWordsAndNumbers(b)

    const maxLength = Math.max(arrA.length, arrB.length)
    
    for (let i = 0; i < maxLength; i++) {
        const partA = arrA[i]
        const partB = arrB[i]

        if (partA === undefined) return -1
        if (partB === undefined) return 1

        if (typeof partA === 'number' && typeof partB === 'number') {
            if (partA !== partB) return partA - partB
        } else if (typeof partA === 'string' && typeof partB === 'string') {
            const comp = partA.localeCompare(partB)
            if (comp !== 0) return comp;
        } else {
            return typeof partA === 'number' ? -1 : 1
        }
    }

    return 0
  })


  return ( 
      <Select
        contentList={contentListOptimized}
        itemsCollected={itemsCollected}
        emptyMessage={emptyMessage}
        placeHolder={placeHolder}
        selectItem={selectItem}
        itemsRef={itemsRef}
      />
  )
}

export default SelectGestor