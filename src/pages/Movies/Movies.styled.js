import { styled } from 'styled-components';

export const StyledForm = styled.form`
  margin-bottom: 1rem;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`;

export const StyledInput = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  outline: none;

  &:focus {
    box-shadow: inset 0px 0px 5px 0px rgba(66, 68, 90, 1);
  }
`;

export const StyledButton = styled.button`
  border-radius: 4px;
  background-color: #d18d96;
  color: black;
  font-weight: 500;

  &:hover {
    background-color: #dfb160;
    box-shadow: 0px 0px 9px 0px rgba(66, 68, 90, 1);
  }
`;
