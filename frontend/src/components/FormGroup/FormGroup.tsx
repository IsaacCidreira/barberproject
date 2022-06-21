import { ReactNode } from 'react'
import { Container } from './style'

interface Forms {
  children: ReactNode
  error?: string
}
const FormGroup = ({ children, error }: Forms) => {
  return (
    <Container>
      {children}
      {error && <small>{error}</small>}
    </Container>
  )
}

export default FormGroup