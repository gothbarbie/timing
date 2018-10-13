import React from 'react'
import styled from 'styled-components'

const MainHeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
`

const MaxWidth = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
`

const MainHeader = () => (
  <MainHeaderStyle>
    <MaxWidth>
      <div>Timing</div> <div>Username</div>
    </MaxWidth>
  </MainHeaderStyle>
)

export default MainHeader
