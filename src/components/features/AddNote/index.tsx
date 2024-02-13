import * as Dialog from '@radix-ui/react-dialog'
import { Card } from '../../modules/Card';
import { Modal } from '../../modules/Modal';
import { useAddNote } from './hook';
import { AnimationRecording, ButtonRecording, ButtonSave, ContainerEditor, ContentModal, DialogTrigger, Form, TextAreaModal, TextButton, TitleModal } from './styles';

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
            <DialogTrigger>
                <Card 
                    content={'Grave uma nota em áudio que será convertida para texto automaticamente.'} 
                    variant={'normal'} 
                    titleColorIntense={'200'} 
                    titleCard={'Adicionar nota'} 
                />
            </DialogTrigger>
            <Modal>
                <Form>
                    <ContainerEditor>
                        <TitleModal>Adicionar nota</TitleModal>
                        {shouldShowOnboarding ? 
                            (
                                <ContentModal>
                                    Comece <TextButton onClick={handleStartRecording} type="button">gravando uma nota</TextButton> em áudio ou se preferir <TextButton type="button" onClick={handleStartEditor}>utilize apenas texto</TextButton>.
                                </ContentModal>
                            ) 
                            : 
                            (
                                <TextAreaModal 
                                    autoFocus
                                    onChange={handleContentChange}
                                    value={content}
                                />
                            )
                        }
                    </ContainerEditor>
                    {
                        isRecording ?
                            (
                                <ButtonRecording 
                                    type="button"
                                    onClick={handleStopRecording}
                                >
                                    <AnimationRecording />
                                    Gravando! (clique aqui para finalizar)
                                </ButtonRecording>
                            )
                            :
                            (
                                <ButtonSave 
                                    type="button"
                                    onClick={handleSaveNote}
                                >
                                    Salvar nota
                                </ButtonSave>
                            )
                    }
                </Form>
            </Modal>
        </Dialog.Root>
    );
};
