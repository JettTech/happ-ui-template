import gql from 'graphql-tag'

export default gql`
  mutation CreateNote($noteInput: NoteInput) {
    createNote (noteInput: $noteInput) {
      id
      address
      createdAt 
      title
      content
    }
  }
`
