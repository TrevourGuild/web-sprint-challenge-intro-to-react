// Write your Character component here
import React from 'react'


export default function Character({ info, action }){
    return (
        <div className = 'character'>
            {info.name}
            <button onClick = {() => action(info.name)}>
            ^
            </button>
        </div>
    )
}