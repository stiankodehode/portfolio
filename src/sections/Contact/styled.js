import styled from "styled-components";

export const ContactContainer = styled.section`
    padding: 1em 0;
    border-radius: 10px;
    margin: 0 auto 5em;
    display: flex;
    background-color: #ffe8ff;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
`;
export const StyledInput = styled.input`
    width: 25%;
    font-size: 16px;
    margin-bottom: 1em;
    padding: 0.5em;
    border-radius: 5px;
    @media (max-width: 900px) {
        width: 40%;
    }
`;

export const StyledInputEmail = styled.input`
    width: 40%;
    font-size: 16px;
    margin-bottom: 1em;
    padding: 0.5em;
    border-radius: 5px;
    @media (max-width: 900px) {
        width: 50%;
    }
`;
export const StyledTextarea = styled.textarea`
    width: 75%;
    height: 10em;
    font-size: 16px;
    resize: none;
    margin-bottom: 2em;
    padding: 0.5em;
    border-radius: 5px;
    @media (max-width: 900px) {
        width: 70%;
    }
`;
export const StyledButton = styled.button`
    border-radius: 5%;
    padding: 1em;
    width: 25%;
    border-radius: 10px;
    @media (max-width: 900px) {
        width: 40%;
    }
`;
