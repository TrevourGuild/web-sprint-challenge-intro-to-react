
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled, { keyframes } from 'styled-components'

const kf = keyframes`
  100% {
    opacity: 1;
    transform: scale(1) rotateZ(0);
  }
`

const StyledDetails = styled.div`
  opacity: 0;
  animation: ${kf} 1s ease-in-out forwards;
  border: 1px solid #d2d2d2;
  box-shadow: 0px 1px 6px -2px #807f7f;
  border-radius: 8px;
  margin-top: 16px;
  padding: 16px;
  background-color: white;
`

export default function Details(props){
    const {characterId, close} = props
    const [details, setDetails] = useState("")


    useEffect(() => {
        const clickHandler = () => {
          console.log('This was clicked')
        }

        document.addEventListener('click', clickHandler)



        return () => {
            console.log('clean up method/ CWU')
            document.removeEventListener('click', clickHandler)
          }
        }, [])



    useEffect(() =>{
        axios.get(`https://swapi.dev/api/people/`)
        .then(res => {
        setDetails(res.data)
        console.log(res.data)
    })
        .catch(err => {
        console.log(err)
    })
 }, [characterId])




 return(
     <StyledDetails>
         <div>
         <h2>Details</h2>
        {
            details &&
            <>
            <p>Gender: {details.gender}</p>
            <p>Height: {details.height}</p>
            <p>Mass: {details.mass}</p>
            <p>BirthYear: {details.birth_year}</p>
            <p>Eye Color: {details.eye_color}</p>
            <p>Hair Color: {details.hair_color}</p>
            <p>Skin Color: {details.skin_color}</p>
            </>
        }
        <button onClick = {close}>^</button>
        </div>
     </StyledDetails>
 )


}
