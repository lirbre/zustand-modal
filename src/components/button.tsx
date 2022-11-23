import React from 'react'

import { ButtonContainer, ButtonText } from './button-styles'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    textColor: string
    btnColor: string
}

export const Button = ({ btnColor, text, textColor, ...props }: IButtonProps) => {
    return (
        <ButtonContainer theme={{ color: btnColor }} {...props}>
            <ButtonText theme={{ color: textColor }}>{text}</ButtonText>
        </ButtonContainer>
    )
}