import React, { useState } from 'react'
import Counter from './Counter'

function Element(props) {

  const [checked, setChecked] = useState(false)

  const toggleChecked = () => {
    setChecked(!checked)
  }

  return (
    <>
      <li className='clearfix'>
        {checked ?
          <>
            <i onClick={toggleChecked} className="fa-solid fa-circle-check"></i>
            <s>{props.item}</s><Counter checked={checked} />
          </> :
          <>
            <i onClick={toggleChecked} className="fa-solid fa-circle"></i>
            {props.item}<Counter checked={checked} />
          </>
        }
      </li>
    </>
  )
}

export default Element