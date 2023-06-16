import { InputHTMLAttributes } from 'react'

import { Container } from './styles'

interface InputFilterProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputFilter({ style, ...rest }: InputFilterProps) {
  return (
    <Container style={style}>
      <input placeholder="Buscar conteúdo" {...rest} />
    </Container>
  )
}
