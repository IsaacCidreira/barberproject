import React, { ReactNode } from 'react'
import { Container } from './Style'

interface IButton {
  children: string | ReactNode
  disabled?: boolean
  className?: string
  onClick?: () => void
}

const Button = ({ children, disabled, className, onClick }: IButton) => {
  return (
    <Container onClick={onClick} disabled={disabled} className={className}>
      {children}
    </Container>
  )
}

export default Button