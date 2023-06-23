import { styled } from 'styled-components';

export const ListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 24px;
  list-style: none;
  padding: 10px;
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 32px;
  border: 2px solid #000;
`;

export const Contact = styled.li`
  width: 300px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 12px;
  border-radius: 8px;
  border: 2px gray solid;
  box-shadow: 2px 2px blue;
  font-size: 24px;
  font-family: sans-serif;
`;
export const AddInput = styled.input`
  padding: 10px;
`;


export const AddBtn = styled.button`
  padding: 12px;
  &:hover {
    background-color: teal;
  }
`;

export const DelBtn = styled.button`
  padding: 12px;
  &:hover {
    background-color: red;
  }
`;
