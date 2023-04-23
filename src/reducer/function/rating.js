// met à jour le bloc
function updateBlock(state, action) {
    const bloc = state.blocs.map((bloc, index) => {
        if (index === action.blocs) {
            bloc.evaluations[action.evaluation].note = Number(action.value)
        }
        return bloc
    })
    bloc[action.blocs].total = setNoteOutOf20(state, action)
    return bloc
}
  
// met à jour la note
function updateNote(state, action) {
    let total = 0
    state.blocs[action.blocs].evaluations.map((evaluation) => {
        total += evaluation.note
    })
    return total
}
  
// met la note sur 20
function setNoteOutOf20(state, action) {
    let total = updateNote(state, action)
    if (state.blocs[action.blocs].max !== 20) {
        total = total * 20 / state.blocs[action.blocs].max
    }
    if (total % 1 !== 0) {
        total = total.toFixed(2)
    }
    return total
}
  
export default updateBlock