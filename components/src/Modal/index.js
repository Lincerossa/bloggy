import React from 'react'
import * as S from './styles'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#root')

const MODAL = 'modal-class'
const OVERLAY = 'overlay-class'

export default ({
  children,
  isOpen,
  title,
  onCloseModal,
  footer,
  ...props
}) => {
  const handleCloseModal = () => {
    onCloseModal()
  }

  // The className is about the modal itself
  // The overlayClassName is about the

  return (
    <>
      <style>{`
      .${MODAL}{${S.Modal}}
      .${OVERLAY}{${S.Overlay}}
      `}</style>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        className={MODAL}
        overlayClassName={OVERLAY}
        {...props}
      >
        <S.Title> {title} </S.Title>
        <S.Body> {children} </S.Body>
        <S.Footer> {footer} </S.Footer>
      </ReactModal>
    </>
  )
}
