import * as Dialog from '@radix-ui/react-dialog'
import { Card } from '../../modules/Card';
import { Modal } from '../../modules/Modal';
import { useAddNote } from './hook';

export interface AddNoteProps {
    onNoteCreated: (content: string) => void;
}

export const AddNote = ({ onNoteCreated }: AddNoteProps) => {
    const {
        shouldShowOnboarding,
        isRecording,
        content,
        handleStartEditor,
        handleContentChange,
        handleSaveNote,
        handleStartRecording,
        handleStopRecording
    } = useAddNote({ onNoteCreated });

    return (
        <Dialog.Root>
            <Dialog.Trigger className="rounded-md bg-slate-700 p-5 space-y-3 flex flex-col gap-3 text-left outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400" >
                <Card 
                    content={'Grave uma nota em áudio que será convertida para texto automaticamente.'} 
                    variant={'normal'} 
                    titleColorIntense={'200'} 
                    titleCard={'Adicionar nota'} 
                />
            </Dialog.Trigger>
            <Modal>
                <form className="flex-1 flex flex-col">
                    <div className="flex-1 flex flex-col gap-3 p-5">
                        <span className="text-sm font-medium text-slate-300">Adicionar nota</span>

                        {shouldShowOnboarding ? 
                            (
                                <p className="text-sm leading-6 text-slate-400">
                                    Comece <button onClick={handleStartRecording} type="button" className="font-medium text-lime-400 hover:underline">gravando uma nota</button> em áudio ou se preferir <button className="font-medium text-lime-400" type="button" onClick={handleStartEditor}>utilize apenas texto</button>.
                                </p>
                            ) 
                            : 
                            (
                                <textarea 
                                    autoFocus 
                                    className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                                    onChange={handleContentChange}
                                    value={content}
                                />
                            )
                        }
                    </div>

                    {
                        isRecording ?
                            (
                                <button 
                                    type="button"
                                    className="w-full flex items-center justify-center gap-2 bg-slate-900 py-4 text-center text-sm text-slate-300 outline-none font-medium hover:text-slate-100"
                                    onClick={handleStopRecording}
                                >
                                    <div className="size-3 rounded-full bg-red-500 animate-pulse" />
                                    Gravando! (clique para finalizar)
                                </button>
                            )
                            :
                            (
                                <button 
                                    type="button"
                                    className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500"
                                    onClick={handleSaveNote}
                                >
                                    Salvar nota
                                </button>
                            )
                    }
                </form>
            </Modal>
        </Dialog.Root>
    );
};
