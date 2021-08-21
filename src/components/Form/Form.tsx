import React from "react";
import { StyledForm } from "./styled.form";
import heroImage from "../../images/hero.png";
import {
    StyledText,
    StyledImage,
    StyledContainer,
    StyledEmailInput,
    StyledButton,
} from "../Shared";

export function Form() {
    return (
        <StyledForm>
            <StyledContainer>
                <StyledText as="h1">
                    Trello helps teams move work forward.
                </StyledText>
                <StyledText>
                    Collaborate, manage projects, and reach new productivity
                    peaks. From high rises to the home office, the way your team
                    works is unique—accomplish it all with Trello.
                </StyledText>
                <StyledEmailInput placeholder="Email" />
                <StyledButton>Sign up-it's free!</StyledButton>
            </StyledContainer>
            <StyledImage src={heroImage} />
        </StyledForm>
    );
}
