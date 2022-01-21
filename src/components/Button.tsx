import styled from "styled-components";


export const ButtonStyled = styled.button`
  background-color: ${(props) => props.color || "#000000"};
  color: ${(props) => props.color || "#ffffff"};
  padding: 1rem 2rem;
`;
