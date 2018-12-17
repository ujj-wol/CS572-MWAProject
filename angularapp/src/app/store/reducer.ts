import { IAppState } from './iapp-state';
import { ADD_POST } from './actions';

const initialState: IAppState = { data: [
    { title:'test', body: 'body here testing' }
]
}

function addPost(state, action): IAppState {
    return Object.assign({}, state,
        { data: [...state.data, action.payload ]}
        )
}

export function reducer(state: IAppState = initialState, action) {
    switch(action.type) {
        case ADD_POST: return addPost(state, action);
        default: return state;
    }
}
