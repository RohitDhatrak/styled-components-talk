import styled, { css } from "styled-components";
// #0065ff

type StyledButtonProps = {
    buttonType?: "primary" | "secondary";
};

export const StyledButton = styled.button<StyledButtonProps>`
    background-color: #0065ff;
    color: #fff;
    border: none;
    padding: 0.5em 1em;
    border-radius: 0.5em;
    font-size: 1.1rem;
    cursor: pointer;
    ${(props) =>
        props.buttonType === "secondary" &&
        css`
            background-color: transparent;
            color: #0065ff;
            &:hover {
                text-decoration: underline;
            }
        `}
`;
