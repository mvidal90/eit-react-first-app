import React from 'react'
import loading from '../assets/loading.svg'

function Loading() {
  return (
    <div className='w-100 d-flex justify-center'>
        <img src={loading} alt="Cargando" />
    </div>
  )
}

export default Loading