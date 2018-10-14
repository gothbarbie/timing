import React from 'react'
import styled from 'styled-components'

import Navigation from './Navigation/Navigation'
import Scheduler from './Scheduler/Scheduler'

import Button from 'generic/atoms/Button'
import Tag from 'generic/atoms/Tag'
import Modal from 'generic/molecules/Modal/Modal'
import LabeledInput from 'generic/molecules/LabeledInput'
import LabeledSelect from 'generic/molecules/LabeledSelect'

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`
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

const Home = () => (
  <HomeStyle>
    <Navigation />
    <Scheduler />
    <Modal title="Add event">
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
        <div>
          <Tag name="unit test" blue />
        </div>
      </TwoColumns>
    </Modal>
  </HomeStyle>
)

export default Home
