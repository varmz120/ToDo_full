import {React,useState,useEffect} from 'react'
import styled from 'styled-components'
import Task from './Task'
import Axios from "axios"


const Container=styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
margin: 0 auto;
margin-top:50px;
background-color:#d6ccc2;
width:580px;
height:500px;
border-radius:15px;



`

const Tasks = (props) => {

  const allTasks=props.allTasks||[]
  

  
  
  return (

    <Container>
        {allTasks.map(function (task) {
        return (
          <Task text={task.text} id={task._id} deleteTask={props.deleteTask} />
        );
      })}
    </Container>
    
  )
}

export default Tasks