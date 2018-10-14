import React from 'react'
import styled from 'styled-components'

import Label from '../../atoms/Label'
import Tag from '../../atoms/Tag'

const LabeledTagsWrapper = styled.div``

const LabeledTags = ({ label, tags, onClick }) => (
  <LabeledTagsWrapper>
    <Label>{label}</Label>
    {tags.map(tag => (
      <Tag
        blue={tag.blue}
        key={tag.id}
        name={tag.name}
        onClick={() => onClick(tag.id)}
      />
    ))}
  </LabeledTagsWrapper>
)

export default LabeledTags
