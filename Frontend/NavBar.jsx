import React from 'react'
import styled from "styled-components"

const Container=styled.div`
display:flex;
background-color:#d6ccc2;
margin:0px 0px 0px 0px;
height:60px;
align-items:center;
justify-content:center;


`
const Title=styled.h1`
color:#003049;
margin:0px;`

const NavBar = () => {
  return (
    <Container >
        <Title>ToDo</Title>
    </Container>
  )
}

export default NavBar