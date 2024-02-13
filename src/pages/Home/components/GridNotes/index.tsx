import { AddNote } from '../../../../components/features/AddNote'
import { ViewNote } from '../../../../components/features/ViewNote'
import { Note } from '../../../../infra/interfaces'
import { ContainerGrid } from '../../styles'

interface GridNotesProps {
  filteredNotes: Note[]
  onNoteCreated: (content: string) => void
  onNoteDeleted: (id: string) => void
}

export const GridNotes = ({
  filteredNotes,
  onNoteCreated,
  onNoteDeleted,
}: GridNotesProps) => {
  return (
    <ContainerGrid>
      <AddNote onNoteCreated={onNoteCreated} />

      {filteredNotes?.map((note) => (
        <ViewNote note={note} key={note.id} onNoteDeleted={onNoteDeleted} />
      ))}
    </ContainerGrid>
  )
}
