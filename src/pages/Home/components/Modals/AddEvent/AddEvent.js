import React from 'react'
import styled from 'styled-components'

import Button from '../../../../../generic/atoms/Button'

import LabeledInput from '../../../../../generic/molecules/LabeledInput'
import LabeledSelect from '../../../../../generic/molecules/LabeledSelect'
import LabeledTags from '../../../../../generic/molecules/LabeledTags'

const Wrapper = styled.section``

const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  margin: 3rem 0;
`

const CategorySection = styled.div`
  display: grid;
  grid-template-columns: 6fr 1fr;
  grid-gap: 1rem;
  margin: 3rem 0;
  align-items: flex-end;
`

const AlignRight = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

const AddEvent = () => (
  <Wrapper>
    <LabeledInput name="title" label="Title" />
    <TwoColumns>
      <LabeledInput name="start" label="Start" type="date" />
      <LabeledInput name="end" label="End" type="date" />
    </TwoColumns>
    <CategorySection>
      <LabeledSelect
        name="category"
        label="Category"
        options={[{ key: 'Test', value: 'TestValue' }]}
      />
      <Button primary>Edit</Button>
    </CategorySection>
    <TwoColumns>
      <LabeledInput name="add-tags" label="Add tags" />
      <LabeledTags
        tags={[{ blue: true, name: 'unit test', id: 1 }]}
        label="Used recently"
        onClick={id => console.log('added', id)}
      />
    </TwoColumns>
    <LabeledTags
      tags={[{ blue: false, name: 'story-125', id: 3 }]}
      label="Selected tags"
      onClick={id => console.log('deleted', id)}
    />
    <AlignRight>
      <Button primary>Create</Button>
    </AlignRight>
  </Wrapper>
)

export default AddEvent
