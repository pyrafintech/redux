import React from 'react'

const Users = (Props) => {
    const {data} = Props
    
  return (
    <div>
        <h2>{data.name}</h2>
    </div>
  )
}

export default Users