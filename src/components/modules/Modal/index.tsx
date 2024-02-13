import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'
import { CloseIcon, DialogClose, DialogContent, DialogOverlay } from './styles'

interface ModalProps {
  children: ReactNode
}

export const Modal = ({ children }: ModalProps) => {
  return (
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <DialogClose>
          <CloseIcon />
        </DialogClose>
        {children}
      </DialogContent>
    </Dialog.Portal>
  )
}
