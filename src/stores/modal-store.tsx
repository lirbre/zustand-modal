import { ReactNode } from 'react'
import create from 'zustand'

export interface ICustomModal {
    modalBody: ReactNode
    modalHeader: string
    cancelText?: string
    confirmText?: string
    confirmHandler?: Function
    formId?: string
}

interface IModalStore {
  isOpen: boolean
  open(): void
  close(): void
  modalContent: ICustomModal[]
  updateModalContent(newBody: ICustomModal[]): void
  step: number
  updateStep(newStep: number): void
  resetStep(): void
}

export const useModalStore = create<IModalStore>()((set) => ({
  isOpen: false,
  open: () => set(() => ({ isOpen: true, step: 0 })),
  close: () => set(() => ({ isOpen: false })),
  modalContent: [
    {
      modalBody: '<p></p>',
      modalHeader: '',
      cancelText: 'cancel',
      confirmText: 'save'
    }
  ],
  updateModalContent: (newBody: ICustomModal[]) =>
    set(() => ({ modalContent: newBody, step: 0 })),
  step: 0,
  updateStep: (newStep: number) => set(() => ({ step: newStep })),
  resetStep: () => set(() => ({ step: 0 }))
}))
