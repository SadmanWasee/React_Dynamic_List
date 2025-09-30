import React, { useEffect, useState } from 'react'
import Counter from './Counter'

function Element(props) {

  const [checked, setChecked] = useState(()=>{
    let status = localStorage.getItem(`${props.item}status`)

    if(status){
      if(status=="0"){
        return false
      }else{
        return true
      }
    }else{
      return false
    }

  })

  const toggleChecked = () => {
    setChecked(!checked)
  }

  useEffect(()=>{

    if(!checked){
      localStorage.setItem(`${props.item}status`,"0")
    }else{
      localStorage.setItem(`${props.item}status`,"1")
    }
    
  },[checked])
  

  return (
    <>
      <li className='clearfix'>
        {checked ?
          <>
            <i onClick={toggleChecked} className="fa-solid fa-circle-check"></i>
            <s>{props.item}</s><Counter name={props.item} checked={checked}/>
          </> :
          <>
            <i onClick={toggleChecked} className="fa-solid fa-circle"></i>
            {props.item}<Counter name={props.item} checked={checked} />
          </>
        }
      </li>
    </>
  )
}

export default Element