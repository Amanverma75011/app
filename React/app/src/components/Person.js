import React from 'react'

function Person({person,kay}) {
  return (
    <div>
      <h2>
       {kay}   I am {person.name}. I am {person.age} years old.I know {person.skill}
      </h2>
    </div>
  )
}

export default Person
