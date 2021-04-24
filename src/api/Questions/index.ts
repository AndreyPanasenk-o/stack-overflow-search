import { Filter } from "../../models/filter";

const maxQuestionsToLoad = 25;
export function fetchQuestions(dispatch: any, getState: any) {
    const filter = getState().filter;

    parseFilter(filter);

    let url = 'https://api.stackexchange.com/2.2/questions?site=stackoverflow';
    const filterAsString = parseFilter(filter);
    if (filterAsString) {
        url += filterAsString;
    }
    fetch(url)
        .then(response => response.json())
        .then(data => {
            dispatch({ type: 'QUESTIONS_UPDATED', payload: { ...data, questions: [...data.items] } });
        });
}

const parseFilter = (filter: Filter): string => {
    let result = `&order=${filter.order}&sort=${filter.sort}`
    if (filter.from_date)
        result += `&fromdate=${filter.from_date.getTime()}`;
    if (filter.to_date)
        result += `&todate=${filter.to_date.getTime()}`;
    if (filter.tags.length)
        result += `&tagged=${filter.tags.join()}`;
    return result;
}