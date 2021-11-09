import React from 'react'

function NameList() {
        const persons = [
            {
                id:1,
                name: 'deepu',
                age: 21,
                skill: 'react'
            },
            {
                id:1,
                name: 'priya',
                age: 20,
                skill: 'flutter'
            },
            {
                id:1,
                name:'lucky',
                age: 20,
                skill: 'java'
            },
            {
                id:1,
                name:'uma',
                age: 20,
                skill: 'spring'
            }
        ]
    


    /* const names = ['deepu', 'priya', 'lucky', 'dxc','react']
    const namesList = names.map(name => <h2>{name}</h2>) */
    const personList = persons.map(person => <h2> i am {person.name},i am {person.age} years old and my skill is {person.skill}</h2>)

    return (
        <div>{personList}</div>
    )
 }

export default NameList