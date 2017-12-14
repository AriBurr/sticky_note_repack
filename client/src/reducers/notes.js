const notes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [action.note, ...state]
    case 'TOGGLE_NOTE':
      return state.map( note => {
        if (note.id === action.id)
          return {...note, priority: !note.priority}
        return note
      })
    default:
      return state
  }
}

export default notes;
