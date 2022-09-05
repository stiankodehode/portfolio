import { StyledH2 } from "../components/styled";
import {
    ContactContainer,
    StyledForm,
    StyledInput,
    StyledTextarea,
    StyledButton,
    StyledInputEmail,
} from "./Contact/styled";
import { useState } from "react";

const Contact = () => {
    // Form info State
    const [formInfo, setFormInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });
    // This function updates the forminfo on input
    function handleChange(event) {
        const { name, value } = event.target;
        setFormInfo((oldInfo) => ({
            ...oldInfo,
            [name]: value,
        }));
    }
    // This function submits the form (right now i dont have anywhere to submit)
    function handleSubmit(event) {
        event.preventDefault();
        console.log(formInfo);
        console.log("Form Submitted!!!!!!!!!!");
    }
    return (
        <ContactContainer>
            <StyledH2>Kontakt Meg</StyledH2>
            <StyledForm>
                <StyledInput
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    placeholder="First Name"
                ></StyledInput>
                <StyledInput
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    placeholder="Last Name"
                ></StyledInput>
                <StyledInputEmail
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="email@email.com"
                ></StyledInputEmail>
                <StyledTextarea
                    type="text"
                    name="message"
                    onChange={handleChange}
                    placeholder="Type your message here"
                ></StyledTextarea>
                <StyledButton onClick={handleSubmit}>Submit</StyledButton>
            </StyledForm>
        </ContactContainer>
    );
};

export default Contact;
