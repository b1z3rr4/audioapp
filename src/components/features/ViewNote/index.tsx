import * as Dialog from '@radix-ui/react-dialog'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Note } from '../../../infra/interfaces'
import { Card } from '../../modules/Card'
import { Modal } from '../../modules/Modal'
import {
  ButtonSave,
  ContainerModal,
  ContentModal,
  DialogTrigger,
  TextButton,
  TitleModal,
} from './styles'

interface ViewNoteProps {
  note: Note
  onNoteDeleted: (id: string) => void
}

export const ViewNote = ({ note, onNoteDeleted }: ViewNoteProps) => {
  return (
    <Dialog.Root>
      <DialogTrigger>
        <Card
          content={note.content}
          variant={'gradient'}
          titleColorIntense={'300'}
          titleCard={formatDistanceToNow(note.date, {
            locale: ptBR,
            addSuffix: true,
          })}
        />
      </DialogTrigger>
      <Modal>
        <ContainerModal>
          <TitleModal>
            {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}
          </TitleModal>
          <ContentModal>{note.content}</ContentModal>
        </ContainerModal>
        <Dialog.Close>
          <ButtonSave type="button" onClick={() => onNoteDeleted(note.id)}>
            Deseja <TextButton>apagar essa nota</TextButton>?
          </ButtonSave>
        </Dialog.Close>
      </Modal>
    </Dialog.Root>
  )
}
