import { StyledH2 } from "../components/styled";
import {
    ContactContainer,
    StyledForm,
    StyledInput,
    StyledTextArea,
    StyledButton,
    StyledInputEmail,
    StyledFlexRow,
    StyledFlexColumn,
} from "./Contact/styled";
import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = (props) => {
    const content = props.content;

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
        if (Object.values(formInfo).every((key) => key.length > 0)) {
            emailjs.sendForm().then(
                (result) => {
                    console.log("Email Sent");
                },
                (error) => {
                    console.log("There as an error");
                }
            );

            console.log(formInfo);
        } else {
            alert("Please fill out the entire form");
        }
    }
    return (
        <ContactContainer id="contactID">
            <StyledH2>{content.headline}</StyledH2>
            <StyledForm id="form">
                <StyledFlexRow>
                    <StyledFlexColumn>
                        <label aria-label="firstName" htmlFor="firstName">
                            {content.form.firstName}
                        </label>
                        <StyledInput
                            type="text"
                            id="firstName"
                            name="firstName"
                            onChange={handleChange}
                            placeholder={content.form.firstName}
                        ></StyledInput>
                    </StyledFlexColumn>
                    <StyledFlexColumn>
                        <label aria-label="lastName" htmlFor="lastName">
                            {content.form.lastName}
                        </label>
                        <StyledInput
                            type="text"
                            id="lastName"
                            name="lastName"
                            onChange={handleChange}
                            placeholder={content.form.lastName}
                        ></StyledInput>
                    </StyledFlexColumn>
                </StyledFlexRow>
                <StyledFlexColumn>
                    <label aria-label="email" htmlFor="email">
                        {content.form.email}
                    </label>
                    <StyledInputEmail
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        placeholder={content.form.email}
                    ></StyledInputEmail>
                </StyledFlexColumn>
                <label aria-label="subject" htmlFor="subject">
                    {content.form.subject}
                </label>
                <StyledInput
                    type="text"
                    id="subject"
                    name="subject"
                    onChange={handleChange}
                    placeholder={content.form.subject}
                ></StyledInput>
                <label aria-label="message" htmlFor="message">
                    {content.form.message}
                </label>
                <StyledTextArea
                    type="text"
                    id="message"
                    name="message"
                    onChange={handleChange}
                    placeholder={content.form.message}
                ></StyledTextArea>

                <StyledButton onClick={handleSubmit}>Submit</StyledButton>
            </StyledForm>
        </ContactContainer>
    );
};

export default Contact;
