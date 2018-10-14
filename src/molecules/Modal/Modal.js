import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { closeModal } from 'generic/Modal/modalActions'

import Button from 'generic/Button/Button'
import Icon from 'generic/Icon/Icon'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalStyle = styled.div`
  min-width: 400px;
  background: ${({ theme }) => theme.colors.background};
`

const ModalHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.4rem;
  font-weight: 500;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ModalMain = styled.main`
  padding: 3rem;
`

const Modal = ({ closeModal, children, title, visible }) => {
  if (!visible) return null

  return (
    <Overlay>
      <ModalStyle>
        <ModalHeader>
          {title}
          <Button icon onClick={closeModal}>
            <Icon icon={['fas', 'times-circle']} />
          </Button>
        </ModalHeader>
        <ModalMain>{children}</ModalMain>
      </ModalStyle>
    </Overlay>
  )
}

const mapStateToProps = ({ modal }) => {
  return {
    visible: modal.visible,
  }
}

const mapDispatchToProps = {
  closeModal,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
