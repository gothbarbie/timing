import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { openModal } from '../../../../../generic/molecules/Modal/modalActions'

import Button from '../../../../../generic/atoms/Button'

import LabeledInput from '../../../../../generic/molecules/LabeledInput'
import LabeledSelect from '../../../../../generic/molecules/LabeledSelect'
import LabeledTags from '../../../../../generic/molecules/LabeledTags'

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

const AddEvent = ({ openModal }) => (
  <section>
    <LabeledInput label="Title" name="title" />
    <TwoColumns>
      <LabeledInput label="Start" name="start" type="date" />
      <LabeledInput label="End" name="end" type="date" />
    </TwoColumns>
    <CategorySection>
      <LabeledSelect
        label="Category"
        name="category"
        options={[{ key: 'Test', value: 'TestValue' }]}
      />
      <Button
        fullWidth
        onClick={() => openModal({ content: 'editCategories' })}
        primary
      >
        Edit
      </Button>
    </CategorySection>
    <TwoColumns>
      <LabeledInput label="Add tags" name="add-tags" />
      <LabeledTags
        label="Used recently"
        onClick={id => console.log('added', id)}
        tags={[{ blue: true, name: 'unit test', id: 1 }]}
      />
    </TwoColumns>
    <LabeledTags
      label="Selected tags"
      onClick={id => console.log('deleted', id)}
      tags={[{ blue: false, name: 'story-125', id: 3 }]}
    />
    <AlignRight>
      <Button primary>Create</Button>
    </AlignRight>
  </section>
)

const mapDispatchToProps = {
  openModal,
}

export default connect(
  null,
  mapDispatchToProps
)(AddEvent)
