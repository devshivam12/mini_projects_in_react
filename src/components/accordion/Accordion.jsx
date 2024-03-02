import React, { useState } from 'react'
import data from './data'
import './accordion.css'

const Accordion = () => {
  const [selected, setSelected] = useState(null)
  const [enableMultiSelection, setEnableMultiSelection] = useState(false)
  const [multiple, setMultiple] = useState([])

  const handleSingleSelection = (getId) => {
    setSelected(getId === selected ? null : getId)
  }

  const handleMultipleSelection = (getId) => {
    let cpyMulti = [...multiple]
    const findIndexOfCurrentId = cpyMulti.indexOf(getId)

    if (findIndexOfCurrentId === -1) cpyMulti.push(getId)
    else cpyMulti.splice(findIndexOfCurrentId, 1)

    setMultiple(cpyMulti);
  }

  return (
    <div className='wrapper'>
      <button className='btn'
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable multiple selection
      </button>

      {
        data && data.length > 0 ?
          data.map(dataItem => <div className='item'>
            <div
              onClick={
                enableMultiSelection ?
                  () => handleMultipleSelection(dataItem.id)
                  : () => handleSingleSelection(dataItem.id)}
              className='title'>
              <h3>{dataItem.question}</h3>
              <span>+</span>
            </div>

            {
              enableMultiSelection ? multiple.indexOf(dataItem.id) !== -1 && (
                <div className='content'>{dataItem.answer}</div>
              )
                : selected === dataItem.id && (
                  <div className='content'>{dataItem.answer}</div>
                )
            }

            {/* {
              selected === dataItem.id ?
                <div className='content'>{dataItem.answer}</div>
                : null
            } */}
          </div>)
          : <div>Data not foujnd !</div>
      }
    </div>
  )
}

export default Accordion
