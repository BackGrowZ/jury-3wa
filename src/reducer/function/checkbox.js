const checkbox = (state, action) => {
    const bloc = state.blocs
    bloc[action.blocs].evaluations[action.evaluation].checkboxes[action.checkbox].checked = action.value
    return bloc
}

export default checkbox