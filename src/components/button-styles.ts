import styled from "styled-components";

export const ButtonContainer = styled.button`
    box-shadow:  ${props => props.theme.color === 'transparent' ? '' :  '0px 4px 16px rgba(0, 0, 0, 0.08)'};
    border-radius: 4px;
    padding: 12px 16px;

    display: flex;
    flex-direction: column;
    align-items: center;

    /* Color the border and text with theme.main */
    background: ${props => props.theme.color};
    border: 2px solid ${props => props.theme.color};

    cursor: pointer;

    :hover {
        opacity: 0.9;
    }
`;

export const ButtonText = styled.p`
    color: ${props => props.theme.color};

    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
`
