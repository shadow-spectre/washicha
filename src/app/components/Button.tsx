'use client'
import { IfButton } from "../types/interfaces"

const Button:React.FC<IfButton> = ({className, text, productKey}) => {
  return (
    <button 
    className={`px-2 py-1 rounded-lg duration-200 ease-in-out w-1/2 ${className}`}
    onClick={()=>{ alert(productKey)}}
    >{text}</button>
  )
}

export default Button