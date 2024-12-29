import React from 'react'
import { useState } from 'react'

function Input() {
const [state,setState] = useState('');

    const handleState = (e) =>{
        setState(e.target.value);
        console.log(e.target.value)
    }
 return (
   <div className='inpt'>
    <h1>Your Input:</h1>
    <input type="text" onChange={handleState} placeholder='type here'/>
   </div>
  )
}

export default Input