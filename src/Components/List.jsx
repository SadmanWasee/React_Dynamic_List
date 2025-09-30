import React, { useState, createContext } from 'react'
import Element from './Element'

export const TotalContext = createContext()

function List() {

  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)

  const listItems = items.map(item => {
    return (
      <>
        <TotalContext.Provider value={{total, setTotal}}>
          <Element key={item} item={item} />
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

  return (
    <>
      <div className='item-box'>
        <form action={handleSubmit}>
          <div className="input-group">
            <input type="text" name='item-name' id='item_name' className='item-name' placeholder='Add an item...' required />
            <button className='add-item'>
              <span className="input-group-text" id="basic-addon2"><i className="fa-solid fa-plus"></i></span>
            </button>
          </div>
        </form>
        <ul>
          {listItems}
        </ul>
        <div className="clearfix text-white">
          <h5 className='float-end'>Total: {total}</h5>
        </div>
      </div>

    </>
  )
}

export default List