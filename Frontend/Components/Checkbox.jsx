import React from 'react'
import styled from 'styled-components';

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CheckboxInput = styled.input`
  display: none;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  position: relative;
  width: 15px;
  height: 15px;
  border: 2px solid #003049;
  background-color: ${(props) => (props.checked ? '#003049' : 'transparent')};
  margin-right: 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;

  &::before {
    content: '\u2713';
    position: absolute;
    top: 2px;
    left: 4px;
    font-size: 14px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    opacity: ${(props) => (props.checked ? 1 : 0)};
    transition: opacity 0.1s ease-in-out;
  }
`;

const Text = styled.h2`
  padding: 10px 10px;
  margin: 0;
  word-wrap: break-word;
  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')}; // Apply line-through style if checked
`;

const Checkbox = (props) => {
  const { isChecked, onChange } = props;

  const toggleCheckbox = () => {
    onChange(!isChecked); // Toggle checkbox state
  };

  return (
    <CheckboxWrapper onClick={toggleCheckbox}>
      <CheckboxInput type="checkbox" checked={isChecked} readOnly />
      <CheckboxLabel checked={isChecked} />
    </CheckboxWrapper>
  );
};

export default Checkbox;
