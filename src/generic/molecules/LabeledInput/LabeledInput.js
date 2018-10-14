import React from 'react'
import styled from 'styled-components'

import Label from 'generic/atoms/Label/Label'
import Input from 'generic/atoms/Input/Input'

const LabeledInputStyle = styled.div`
  display: flex;
  flex-direction: column;
`

const LabelStyled = styled(Label)`
  margin-bottom: 1rem;
`

const LabeledInput = ({ name, label, onChange }) => (
  <LabeledInputStyle>
    <LabelStyled htmlFor={name}>{label}</LabelStyled>
    <Input name={name} onChange={onChange} />
  </LabeledInputStyle>
)

export default LabeledInput
