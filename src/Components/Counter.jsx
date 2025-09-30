import React, { useState, useContext } from 'react'
import { TotalContext } from './List';

function Counter(props) {

  const totalContext = useContext(TotalContext);
  const [count, setCount] = useState(0);

  const increment = () => {
    if (!props.checked) {
      setCount(count + 1)
      totalContext.setTotal(totalContext.total+1)
    }
  }

  const decrement = () => {
    if (count > 0 && !props.checked) {
      setCount(count - 1)
      totalContext.setTotal(totalContext.total-1)
    }
  }

  return (
    <>
      <span className='counter float-end'>
        <i onClick={decrement} className="fa-solid fa-chevron-left"></i>{count}<i onClick={increment} className="fa-solid fa-chevron-right"></i>
      </span>
    </>
  )
}

export default Counter