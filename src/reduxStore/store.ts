import { RootState } from '../helper/constants';

const init: RootState = {
    history: [] 
}

const rootReducer = ((state = init, action: any) => {
    switch (action.type) {
        case 'SET_HISTORY':
            return {
                history: [
                    ...state.history,
                    action.pay
                ]
            }
        default:
            return state
    }
})

export default rootReducer