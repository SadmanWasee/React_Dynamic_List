import React, { useState, useContext, useEffect } from 'react'
import TotalContext from './TotalContext'

function Counter(props) {

  const totalContext = useContext(TotalContext);
  const [count, setCount] = useState(() => {
    let value = localStorage.getItem(props.name)
    if (!value) {
      return 0
    } else {
      return (parseFloat(value))
    }

  });


  const increment = () => {
    if (!props.checked) {
      setCount(count + 1)
      totalContext.setTotal(totalContext.total + 1)

    }

  }

  const decrement = () => {
    if (count > 0 && !props.checked) {
      setCount(count - 1)
      totalContext.setTotal(totalContext.total - 1)
    }
  }

  useEffect(() => {
    localStorage.setItem(props.name, JSON.stringify(count))
    localStorage.setItem("total", JSON.stringify(totalContext.total))
  },[count])

  return (
    <>
      <span className='counter float-end'>
        <i onClick={decrement} className="fa-solid fa-chevron-left"></i>{count}<i onClick={increment} className="fa-solid fa-chevron-right"></i>
      </span>
    </>
  )
}

export default Counter