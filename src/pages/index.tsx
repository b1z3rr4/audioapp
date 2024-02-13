import logo from '../assets/logonlw.svg';
import { AddNote } from '../components/features/AddNote';
import { ViewNote } from '../components/features/ViewNote';
import { Search } from '../components/modules/Search';
import { useNotes } from '../hooks/useNotes';

export const Home = () => {
    const {
        filteredNotes,
        handleSearch,
        onNoteDeleted,
        onNoteCreated
     } = useNotes();
    
    return (
        <div className="mx-auto max-w-6xl my-12 space-y-6 px-5">
          <img src={logo} alt='nlw expert' />

          <form className="w-full">
            <Search handleSearch={handleSearch} />
          </form>

          <div className="h-px bg-slate-700" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
            <AddNote onNoteCreated={onNoteCreated} />

            {filteredNotes?.map((note) => (
              <ViewNote note={note} key={note.id} onNoteDeleted={onNoteDeleted} />
            ))}
          </div>
      </div>
    );
};
