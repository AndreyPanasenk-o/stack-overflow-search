import { SearchResult } from "../../models/result";

export default function searchResultReducer(state = {
    questions: [],
    has_more: false,
    quota_max: 0,
    quota_remaining: 0

}, action: { type: string, payload: SearchResult }) {
    switch (action.type) {
        case 'QUESTIONS_UPDATED': {
            return { ...action.payload, questions: [...action.payload.questions] };
        }
        default:
            return state;
    }
}