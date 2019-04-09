import React from 'react'
import Person from './Person'

function NameList() {
    const names =['Bruce','Clark','Diana','Clark']
    const nameList = names.map((name,index) => <h2 key={index}>{index }{name}</h2>)
     
    /*const persons=[
    {
        id:1,
        name:'Aman',
        age:23,
        skill: 'React' 
    },
    {
        id:2,
        name:'Jatin',
        age:24,
        skill: 'Progress'
    },
    {
        id:3,
        name:'Kamesh',
        age:22,
        skill: 'Android '
    }
]*/
//const personList = persons.map(person => <Person key ={person.id} person={person}/>)
//// <h2>  I am {person.name}. I am {person.age} years old.I know {person.skill}</h2>

  return <div> {nameList}</div>
}

export default NameList
