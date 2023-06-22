import { styled } from 'styled-components';

export const ListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 24px;
  list-style: none;
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  border: 2px solid #000;
`;

export const Contact = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 12px;
  border-radius: 8px;
  box-shadow: #000 2px;
  font-size: 24px;
  font-family: sans-serif;
`;
export const AddInput = styled.input`
  padding: 10px;
`;
export const SearchInput = styled.input`
  padding: 8px;
`;

export const SearchBtn = styled.button`
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
