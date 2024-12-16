import React from 'react'

const Button = (props:any) => {
  return (
    <div>
      <button className={` px-5 py-2  ${props.bgColor} text-white rounded-full`}>

  {props.btnText} 
      </button>
    </div>
  )
}

export default Button