import { ChangeEvent } from 'react'
import { Form, Input } from './styles'

interface SearchProps {
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Search = ({ handleSearch }: SearchProps) => {
  return (
    <Form>
      <Input
        type="text"
        placeholder="Busque em suas notas..."
        onChange={handleSearch}
      />
    </Form>
  )
}
