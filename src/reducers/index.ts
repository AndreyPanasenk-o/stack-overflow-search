import { combineReducers } from "redux";
import filterReducer from "./Filter";
import searchResultReducer from "./SearchResult";
import tagNameReducer from "./TagName";
import tagsReducer from "./Tags";

export const rootReducer = combineReducers({
    tags: tagsReducer,
    tagName: tagNameReducer,
    filter: filterReducer,
    searchResult: searchResultReducer
});