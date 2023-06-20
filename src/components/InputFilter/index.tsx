import { FormEvent, FormHTMLAttributes } from 'react'

import { usePosts } from '../../context/postsContext'

import { SearchFormContainer } from './styles'

interface FormElements extends HTMLFormControlsCollection {
  searchInput: HTMLInputElement
}

interface SearchInputElement extends HTMLFormElement {
  readonly elements: FormElements
}

export function InputFilter(props: FormHTMLAttributes<HTMLFormElement>) {
  const { updateFilterIssues } = usePosts()

  function handleSubmit(event: FormEvent<SearchInputElement>) {
    event.preventDefault()
    updateFilterIssues(event.currentTarget.elements.searchInput.value)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit} {...props}>
      <input id="searchInput" type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}
