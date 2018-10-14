import React from 'react'

import Label from 'generic/Label/Label'
import Input from 'generic/Input/Input'

const LabeledInputStyle = styled.div`
  display: flex;
  flex-direction: column;
`

const LabeledInput = ({ name, label, onChange }) => (
  <LabeledInputStyle>
    <Label htmlFor={name}>{label}</Label>
    <Input name={name} onChange={onChange} />
  </LabeledInputStyle>
)

export default LabeledInput
