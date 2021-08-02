import React from 'react'
import { Link } from 'react-router-dom'

const SpellCard = ({ spell }) => {
  return ( 
    <>
      <Link
        to={{
          pathname: `/spell/${spell.index}`
        }}
      >
        {spell.name}
      </Link>
      <br/>
    </>
  )
}
 
export default SpellCard;