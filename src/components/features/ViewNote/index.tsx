import * as Dialog from '@radix-ui/react-dialog'
import { formatDistanceToNow,  } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Card } from '../../modules/Card';
import { Note } from '../../../infra/interfaces';
import { Modal } from '../../modules/Modal';

interface ViewNoteProps {
    note: Note;
    onNoteDeleted: (id: string) => void;
}

export const ViewNote = ({ note, onNoteDeleted}: ViewNoteProps) => {
    return (
        <Dialog.Root>
            <Dialog.Trigger className="text-left rounded-md flex flex-col bg-slate-800 p-5 outline-none gap-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
                <Card 
                    content={note.content}
                    variant={'gradient'}
                    titleColorIntense={'300'}
                    titleCard={formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}
                />
            </Dialog.Trigger>
            <Modal>
                <div className="flex-1 flex flex-col gap-3 p-5">
                    <span className="text-sm font-medium text-slate-300">{formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}</span>

                    <p className="text-sm leading-6 text-slate-400">
                        {note.content} 
                    </p>
                </div>
                <Dialog.Close>
                    <button 
                        type="button" 
                        onClick={() => onNoteDeleted(note.id)} 
                        className="w-full bg-slate-800 py-4 text-center text-sm text-slate-300 outline-none font-medium group"
                    >
                        Deseja <span className="text-red-400 group-hover:underline">apagar essa nota</span>?
                    </button>
                </Dialog.Close>
            </Modal>
        </Dialog.Root>
    );
};
