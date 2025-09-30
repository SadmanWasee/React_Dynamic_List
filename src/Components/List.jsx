import React, { useState, createContext, useEffect } from 'react'
import Element from './Element'
import TotalContext from './TotalContext'

const appKey = 'appKey'

function List() {

  const [items, setItems] = useState(() => {
    const itemsList = localStorage.getItem(appKey);
    if (!itemsList) return []
    return JSON.parse(itemsList);
  });

  const [total, setTotal] = useState(() => {
    let value = localStorage.getItem("total");
    if (!value) {
      return 0;
    } else {
      return (parseFloat(value))
    }
  });

  const handleClear = () => {
    localStorage.clear();
    setItems([]);
    setTotal(0);
  }

  const listItems = items.map(item => {

    return (
      <>
        <TotalContext.Provider value={{ total, setTotal }}>
          <Element
            key={item}
            item={item}
          />
        </TotalContext.Provider>
      </>
    )
  })

  const handleSubmit = (formData) => {
    let newItem = formData.get('item-name')
    setItems((previtems) => {
      return ([...previtems, newItem])
    })

  }

  localStorage.setItem(appKey, JSON.stringify(items))

  return (
    <>
      <div className='item-box'>
        <form action={handleSubmit}>
          <div className="input-group">
            <input type="text"
              name='item-name'
              id='item_name'
              className='item-name'
              placeholder='Add an item...'
              required />
            <button className='add-item'>
              <span className="input-group-text" id="basic-addon2">
                <i className="fa-solid fa-plus"></i>
              </span>
            </button>
          </div>
        </form>
        <ul>
          {listItems}
        </ul>
        <div className="clearfix text-white">
          <h5 className='float-end'>Total: {total}</h5>
          <button
            onClick={handleClear}
            className='btn btn-primary float-start pt-0 pb-0 text-white'><i className="fa-solid fa-rotate-right"></i></button>
        </div>
      </div>
    </>
  )
}

export default List