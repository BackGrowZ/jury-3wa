const comment = (state, action) => {
    const com = state.blocs.map(bloc => {
        if(bloc.id === action.blocs){
            bloc.evaluations.map(evaluation => {
                if(evaluation.id === action.evaluation){
                    evaluation.comment = action.value
                }
                return evaluation
            })
        }
        return bloc
    })
    return com
}

const commentBloc = (state, action) => {
    const com = state.blocs.map(bloc => {
        if(bloc.id === action.blocs){
            bloc.comment = action.value
        }
        return bloc
    })
    return com
}

export {comment, commentBloc}