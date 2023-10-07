import {React,useState,useEffect} from 'react'
import styled from "styled-components"
import NavBar from '../Components/NavBar';
import SearchBar from '../Components/SearchBar';
import Tasks from '../Components/Tasks';
import Axios from 'axios';


const Home = () => {
  const[allTasks,SetAllTasks]=useState([])
  
  const retrieveTasks=async()=>{
    const retrievedTasks=await Axios.get("http://localhost:4000/api/tasks")
    
    SetAllTasks(retrievedTasks.data)
    
    console.log(allTasks)

  }
  const addTask=async(text)=>{
    const addedTask=await Axios.post("http://localhost:4000/api/tasks",{
      text: text

    })
    retrieveTasks()
  }

  const deleteTask=async(id)=>{
    await Axios.delete("http://localhost:4000/api/tasks/"+id)
    retrieveTasks()
  }

  
  
  useEffect(()=>{
    retrieveTasks()  
    

  },[])

  return (
    <div>
      
        
          <NavBar /> 
          <SearchBar addTask={addTask} />
          <Tasks allTasks={allTasks} deleteTask={deleteTask}/>
        
      
    </div>
  );
}

export default Home