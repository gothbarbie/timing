import styled from 'styled-components'

const Input = styled.input`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 1rem 1.5rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.dark};
`

export default Input
