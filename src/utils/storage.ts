interface StorageProps<T> {
    [key: string]: T;
}

/**
 * Classe que fornece métodos para inserir, obter e remover itens de armazenamento local.
 * @template T - O tipo de dados armazenados.
*/
class Storage<T> {
    /**
     * Insere um item no armazenamento local.
     * @param {StorageProps<T>} item - O item a ser inserido.
     * @returns {T[]} - Uma matriz contendo todos os itens no armazenamento local após a inserção.
    */
    insert(item: StorageProps<T>): T[] {
        const key: keyof typeof item = Object
            .entries(item).map(([key]) => key)[0];

        const items = this.obtain({
            [key]: {},
        });

        const itemsJson = [item[key], ...items]
    
        const itemsStringfy = JSON.stringify(itemsJson);
    
        localStorage.setItem(key, itemsStringfy);

        return itemsJson;
    }

    /**
     * Obtém todos os itens correspondentes aos critérios fornecidos do armazenamento local.
     * @param {StorageProps<Partial<T>>} item - Os critérios para buscar os itens.
     * @returns {T[]} - Uma matriz contendo todos os itens correspondentes aos critérios fornecidos.
    */
    obtain(item: StorageProps<Partial<T>>): T[] {
        const key = Object.entries(item)
            .map(([key]) => key)[0] as string;

        const baseObjectFind = item[key];

        const keyOutFindInItems = Object
            .entries(baseObjectFind).map(([key]) => key)[0] as keyof typeof baseObjectFind;

        const itemsStorage = localStorage.getItem(key) || '[]';

        const jsonItems = JSON.parse(itemsStorage);

        const valueToFind = (item as Record<string, T>)[key][keyOutFindInItems];

        if (valueToFind) {
            return jsonItems
                ?.find((item: T) => 
                    item[keyOutFindInItems] === valueToFind);
        }

        return jsonItems;
    }


    /**
     * Remove um item do armazenamento local com base nos critérios fornecidos.
     * @param {StorageProps<Partial<T>>} item - Os critérios para identificar o item a ser removido.
     * @returns {T[]} - Uma matriz contendo todos os itens restantes após a remoção.
    */
    remove(item: StorageProps<Partial<T>>): T[] {
        const key = Object.entries(item)
            .map(([key]) => key)[0].toString() as string;

        const jsonItems = this.obtain({
            [key]: {},
        });

        const itemToRemove = item[key];

        const keyItemOutIndexToFindObjectRemove = Object
            .entries(itemToRemove).map(([key]) => key)[0] as keyof typeof itemToRemove;

        const valueItemOutIndexToFindObjectRemove = (item as Record<string, T>)[key][keyItemOutIndexToFindObjectRemove];

        const newItems = jsonItems
            ?.filter((item: T) => 
                item[keyItemOutIndexToFindObjectRemove] !== valueItemOutIndexToFindObjectRemove);

        const itemsStringfy = JSON.stringify(newItems);
        
        localStorage.setItem(key, itemsStringfy);

        return newItems;
    }
}

export default new Storage();