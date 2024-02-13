import { ChangeEvent, useMemo, useState } from "react";
import { Note } from "../infra/interfaces";
import storage from "../utils/storage";
import uuid from "../utils/uuid";
import validate from "../utils/validate";

/**
 * Hook personalizado para lidar com notas.
 * Este hook gerencia o estado das notas, incluindo pesquisa, criação e exclusão de notas.
 * Ele retorna um objeto contendo as notas filtradas, manipuladores de eventos e funções para criar e excluir notas.
*/
export const useNotes = () => {
    // Estado para armazenar a string de pesquisa
    const [search, setSearch] = useState('');

    // Estado para armazenar as notas
    const [notes, setNotes] = useState<Note[]>(() => {
      // Query para obter todas as notas do armazenamento
      const query = {
        notes: {},
      };
  
      // Obtém as notas do armazenamento e as inicializa
      const notesOnStorage = storage.obtain(query) as Note[];
  
      return notesOnStorage;
    });
  
    // Função para criar uma nova nota
    const onNoteCreated = (content: string) => {
      // Cria uma nova nota com um identificador único, data e conteúdo fornecido
      const newNote = {
        id: uuid.generate(),
        date: new Date(),
        content,
      }  

      // Query para inserir a nova nota no armazenamento
      const query = {
        notes: newNote,
      }
      
      // Insere a nova nota no armazenamento e atualiza o estado das notas
      const myNotes = storage.insert(query) as Note[];
      setNotes(myNotes);
    }
  
    // Função para excluir uma nota com base no ID fornecido
    const onNoteDeleted = (id: string) => {
      // Query para remover a nota do armazenamento com base no ID
      const query = {
        notes: {
          id,
        }
      }

      // Remove a nota do armazenamento e atualiza o estado das notas
      const myNotes = storage.remove(query) as Note[];
      setNotes(myNotes);

    }
  
    // Função para lidar com a alteração na string de pesquisa
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
      // Atualiza o estado com a nova string de pesquisa
      const query = e.target.value;
      setSearch(query);
    }

    // Verifica se a string de pesquisa é válida
    const isValidSearchString = useMemo(() => validate.string(search), [search]);
    
    // Filtra as notas com base na string de pesquisa
    const filteredNotes = useMemo(() => 
      isValidSearchString
        ? notes.filter(note => note.content.toLocaleLowerCase().search(search.toLocaleLowerCase()) !== -1) 
        : notes,
    [isValidSearchString, notes, search]);

    // Retorna um objeto contendo as notas filtradas, manipuladores de eventos e funções para criar e excluir notas
    return {
        filteredNotes,
        handleSearch,
        onNoteDeleted,
        onNoteCreated
    }
};
