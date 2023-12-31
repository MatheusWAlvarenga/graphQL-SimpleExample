import { gql, useQuery } from '@apollo/client'
import { NewUserForm } from './components/NewUserForm'
import { ClearList } from './components/ClearList'

type User = {
  id: string
  name: string
}

// eslint-disable-next-line react-refresh/only-export-components
export const GET_USER = gql`
  query {
    users {
      id
      name
    }
  }
`

function App() {
  const { data, loading } = useQuery<{ users: User[] }>(GET_USER)

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <ul>
        {data?.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <NewUserForm />
      {data?.users && data.users.length > 0 && <ClearList />}
    </div>
  )
}

export default App
