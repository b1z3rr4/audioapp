import * as Dialog from '@radix-ui/react-dialog'
import { watchScreen } from 'metrics-analytics'
import { ReactNode, useCallback } from 'react'
import { CloseIcon, DialogClose, DialogContent, DialogOverlay } from './styles'

interface ModalProps {
  children: ReactNode
}

export const Modal = ({ children }: ModalProps) => {

  const ref = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      watchScreen(node, '1');
    }
  }, []);

  return (
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <div ref={ref}></div>
        <DialogClose>
          <CloseIcon />
        </DialogClose>
        {children}
      </DialogContent>
    </Dialog.Portal>
  )
}
