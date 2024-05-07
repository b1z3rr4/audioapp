import logo from '../../assets/logobzr.svg'
import { Search } from '../../components/modules/Search'
import { useNotes } from '../../hooks/useNotes'
import { GridNotes } from './components/GridNotes'
import { Divisor, HomeContainer, Image } from './styles'

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
