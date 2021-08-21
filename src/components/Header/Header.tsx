import React from "react";
import { Logo } from "../Logo/Logo";
import { StyledHeader } from "./styles.header";
import { StyledContainer, StyledButton } from "../Shared";
import styled from "styled-components";

export function Header() {
    return (
        <StyledHeader>
            <Logo />
            <StyledContainer>
                <StyledButton buttonType="secondary">Log in</StyledButton>
                <StyledButton>Sign up</StyledButton>
            </StyledContainer>
        </StyledHeader>
    );
}
