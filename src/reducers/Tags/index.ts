export default function tagsReducer(state: string[] = ['ccc'], action: any) {
    switch (action.type) {
        case 'TAGS_FETCH': {
            return action.payload;
        }
        case 'TAGS_POPULAR_FETCH': {
            return action.payload;
        }
        default:
            return state
    }
}