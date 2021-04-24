import { Question } from "../question";

export type SearchResult = {
    has_more: true;
    questions: Question[];
    quota_max: number;
    quota_remaining: number;
};