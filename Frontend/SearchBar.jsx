import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Input = styled.input`
  display: flex;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: #d6ccc2;
  border-style: solid;
  border-color: #d6ccc2;
  margin-top: 80px;
  outline-style: none;
  height: 20px;
  width: 500px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

const Add = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #003049;
  border-color: #003049;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  height: 44px !important;
  width: 60px;
  padding: 0px;
  margin-top: 80px;
  border-style: solid;
  cursor: pointer;
`;

const AddText = styled.h2`
  color: white;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchBar = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setError(''); // Clear the error message when the user starts typing
  };

  const handleAddClick = () => {
    if (inputValue.trim() === '') {
      setError('Type in something'); // Set the error message if inputValue is empty
      return;
    }

    props.addTask(inputValue);
    setInputValue('');
  };

  return (
    <Container>
      <InputContainer>
        <Input
          type="text"
          placeholder="What do you need to do?"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Add onClick={handleAddClick}>
          <AddText>ADD</AddText>
        </Add>
      </InputContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};


export default SearchBar;
