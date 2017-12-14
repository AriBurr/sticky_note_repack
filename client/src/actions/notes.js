export const addNote = (note) => {
  return { type: 'ADD_NOTE', note }
}

export const toggleNote = (id) => {
  return { type: 'TOGGLE_NOTE', id }
}
