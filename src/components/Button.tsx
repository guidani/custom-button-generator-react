import styled from 'styled-components'

const ButtonStyled = styled.button`
    background-color: "#ffffff";
    padding: 1rem 2rem;
`;

export const Button = () => {
    return(
        <>
            <ButtonStyled color={'red'}>Button</ButtonStyled>
        </>
    )
}