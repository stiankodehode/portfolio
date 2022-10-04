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
    width: 90%;
    max-width: 175px;
    font-size: 16px;
    margin-bottom: 1em;
    padding: 0.5em;
    border: 2px solid #09001e3f;
    border-radius: 5px;
    @media (max-width: 900px) {
        max-width: 10em;
    }
    &:focus {
        border: 2px solid #09001e;
    }
`;

export const StyledInputEmail = styled.input`
    max-width: 270px;
    font-size: 16px;
    margin-bottom: 1em;
    padding: 0.5em;
    border: 2px solid #09001e3f;
    border-radius: 5px;
    &:focus {
        border: 2px solid #09001e;
    }
`;
export const StyledTextArea = styled.textarea`
    width: 75%;
    height: 8em;
    font-size: 16px;
    resize: none;
    margin-bottom: 2em;
    padding: 0.5em;
    border: 2px solid #09001e3f;
    border-radius: 5px;
    @media (max-width: 900px) {
        width: 90%;
    }
    &:focus {
        border: 2px solid #09001e;
    }
`;
export const StyledButton = styled.button`
    border-radius: 5%;
    padding: 1em;
    width: 20%;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        background-color: lightgrey;
    }
    @media (max-width: 900px) {
        width: 40%;
    }
`;

export const StyledFlexRow = styled.div`
    width: 60%;
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    @media (max-width: 900px) {
        width: 90%;
    }
`;

export const StyledFlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 85%;
`;
