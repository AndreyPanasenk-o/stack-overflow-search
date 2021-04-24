export default function tagNameReducer(state = '', action: any) {
    switch (action.type) {
        case 'TAG_NAME_CHANGED': {
            return action.payload;
        }
        default:
            return state
    }
}