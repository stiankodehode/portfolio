import {
    StyledForm,
    StyledInput,
    StyledTextarea,
    StyledH2,
    StyledButton,
} from "../../components/components";
import { useState } from "react";

const ContactPage = () => {
    const [formInfo, setFormInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });
    function handleChange(event) {
        const { name, value } = event.target;
        setFormInfo((oldInfo) => ({
            ...oldInfo,
            [name]: value,
        }));
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(formInfo);
        console.log("Form Submitted!!!!!!!!!!");
    }
    return (
        <div className="container">
            <StyledH2>Sick Form</StyledH2>
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
                <StyledInput
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="email@email.com"
                ></StyledInput>
                <StyledTextarea
                    type="text"
                    name="message"
                    onChange={handleChange}
                    placeholder="Type your message here"
                ></StyledTextarea>
                <StyledButton onClick={handleSubmit}>Submit</StyledButton>
            </StyledForm>
        </div>
    );
};

export default ContactPage;
