import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const { userId } = useParams() ; 

  return (
    <div className='text-center text-[5rem]' > User : {userId} </div>
  )
}

export default User