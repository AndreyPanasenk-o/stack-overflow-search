import { Filter, FilterOrder, FilterSorting } from "../../models/filter";

export default function filterReducer(state = {
    tags: [],
    order: FilterOrder.desc,
    sort: FilterSorting.activity

}, action: { payload: Filter, type: string }) {
    switch (action.type) {
        case 'TAGS_UPDATED': {
            return { ...action.payload, tags: [...action.payload.tags] };
        }
        default:
            return state
    }
}