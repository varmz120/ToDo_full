import React from 'react'
import styled from "styled-components"
import Checkbox from "./Checkbox"
import DeleteIcon from '@mui/icons-material/Delete';

const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 50px;
  height: auto;
  padding: 8px 20px;
  position: relative;
`

const TextContainer = styled.div`
  text-align: left;
  width: 440px;
`

const Text = styled.h2`
  padding: 10px 10px;
  margin: 0;
  word-wrap: break-word;
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')}; 
  opacity: ${(props) => (props.checked ? 0.5 : 1)};
`

const Line = styled.hr`
  background-color: black;
  height: 2px;
  border: none;
  width: 490px;
  padding-right: 80px;
`

const DeleteContainer = styled.div`
  margin-left: 80px;
  margin-top: 16px;
  cursor: pointer;
  position: absolute;
  left: 440px;
`;

const Task = (props) => {
  const text = props.text;
  const id = props.id;
  const [isChecked, setIsChecked] = React.useState(false); // State to track checkbox

  const handleDelete = () => {
    props.deleteTask(id)
  }

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle checkbox state
  }

  return (
    <>
      <Container>
        <Checkbox isChecked={isChecked} onChange={handleCheckboxChange} />
        <TextContainer>
          <Text checked={isChecked}>{text}</Text>
        </TextContainer>
        <DeleteContainer>
          <DeleteIcon onClick={handleDelete} />
        </DeleteContainer>
      </Container>
      <Line />
    </>
  )
}

export default Task
