import logo from '../assets/logonlw.svg'
import { Search } from '../../components/modules/Search'
import { useNotes } from '../../hooks/useNotes'
import { Divisor, HomeContainer, Image } from './styles'
import { GridNotes } from './components/GridNotes'

export const Home = () => {
  const { filteredNotes, handleSearch, onNoteDeleted, onNoteCreated } =
    useNotes()

  return (
    <HomeContainer>
      <Image src={logo} alt="nlw expert" />
      <Search handleSearch={handleSearch} />
      <Divisor />
      <GridNotes
        filteredNotes={filteredNotes}
        onNoteCreated={onNoteCreated}
        onNoteDeleted={onNoteDeleted}
      />
    </HomeContainer>
  )
}
