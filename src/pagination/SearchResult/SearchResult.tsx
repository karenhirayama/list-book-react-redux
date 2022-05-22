import { useParams } from 'react-router-dom'

export const SearchResult = () => {
  const { bookTitle } = useParams();

  return (
    <div>
      SearchResult
    </div>
  )
}
