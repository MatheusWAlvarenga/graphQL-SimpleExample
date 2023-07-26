import { gql, useMutation } from '@apollo/client'
import { GET_USER } from '../App'

const CLEAR_LIST = gql`
  mutation {
    clearList
  }
`

export function ClearList() {
  const [clearList] = useMutation(CLEAR_LIST)

  async function handleClearList() {
    const data = await clearList({
      refetchQueries: [GET_USER],
    })

    console.log(data.data.clearList)
  }

  return (
    <div>
      <button onClick={handleClearList}>Apagar Lista</button>
    </div>
  )
}
