import { ReactNode, useMemo } from 'react'

import { Button } from './button'

import { ModalContainer, ModalHeader, ModalFooter, ModalTitle, OutsideModal } from './modal-styles'
import { useModalStore } from '../stores/modal-store'

const Header = ({ title }: { title: string }) =>
  useMemo(
    () => (
      <ModalHeader>
        <ModalTitle>{title}</ModalTitle>
      </ModalHeader>
    ),
    [title]
  )

const Body = ({ actualStep }: { actualStep: ReactNode }) => {
  return useMemo(
    () => (
      <>{actualStep}</>
    ),
    [actualStep]
  )
}

const Footer = ({
  cancel,
  save,
  close,
  handleConfirm,
  formId
}: {
  cancel: string | undefined
  save: string | undefined
  close(): void
  handleConfirm(): void
  formId?: string
}) =>
  useMemo(
    () => (
      <ModalFooter
        className={`${
          !save || !cancel
            ? 'justify-content-center'
            : 'justify-content-between'
        }`}
      >
        {cancel && (
          <Button
            type="button"
            data-testid="modal-cancel-btn"
            onClick={close}

            btnColor='transparent'
            textColor='#EF6F2B'
            text={cancel}
         />
        )}
        {save && (
          <Button
            type="submit"
            data-testid="modal-confirm-btn"
            onClick={handleConfirm}

            form={formId}
          
            btnColor='#EF6F2B'
            textColor='#FFF'
            text={save}
          />
        )}
      </ModalFooter>
    ),
    [cancel, save, close, handleConfirm, formId]
  )

export const CustomModal = () => {
  const close = useModalStore((state) => state.close)
  const isOpen = useModalStore((state) => state.isOpen)
  const modalContent = useModalStore((state) => state.modalContent)
  const step = useModalStore((state) => state.step)
  const updateStep = useModalStore((state) => state.updateStep)

  const nextStep = () => updateStep(step + 1)

  const {
    modalBody,
    cancelText,
    confirmText,
    modalHeader,
    formId,
    confirmHandler
  } = useMemo(() => modalContent[step], [modalContent, step])

  const handleConfirm = () => {
    if (confirmHandler) {
      confirmHandler()
    }

    if (formId) return

    if (step + 1 === modalContent!.length) {
      close()

      return
    }

    nextStep()
  }

  return isOpen ? 
    <>
      <OutsideModal onClick={(e) => {
        close()
      }}/>
      <ModalContainer>
        <Header title={modalHeader || ''} />
        <Body actualStep={modalBody || <></>} />
        <Footer
          close={close}
          handleConfirm={handleConfirm}
          cancel={cancelText ? cancelText : undefined}
          save={confirmText ? confirmText : undefined}
          formId={formId}
        />
      </ModalContainer>
    </> : <></>
}
