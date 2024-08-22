import React from 'react'
import { useState } from 'react'

function Contact() {
    let [count,Setnum] = useState(0)
    const Addnum=()=>{
        let newnum=count+1
        Setnum(newnum)
    }
    const Subnum=()=>{
        let newnum=count-1
        Setnum(newnum)
    }
  return (
    <div>
      <h2>count: {count}</h2>
        <button className='btn btn-info m-3' onClick={Addnum}>Add</button>
        <button className='btn btn-info m-3' onClick={Subnum}>Sub</button>  

    </div>
  )
}

export default Contact