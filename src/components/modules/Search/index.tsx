import { ChangeEvent } from "react";

interface SearchProps {
    handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({ handleSearch }: SearchProps) => {
    return (
        <form className="w-full">
            <input 
              type="text" 
              placeholder='Busque em suas notas...'
              className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
              onChange={handleSearch}
            />
        </form>
    );
};
