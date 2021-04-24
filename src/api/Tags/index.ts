const maxTagsToLoad = 25;
export function fetchPopularTags(dispatch: any, getState: any) {
    let url = `https://api.stackexchange.com/2.2/tags?site=stackoverflow&order=desc&sort=popular&max=${maxTagsToLoad}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const tags = data.items.map((t: any) => t.name);
            dispatch({ type: 'TAGS_POPULAR_FETCH', payload: tags });
        });
}

export function fetchTags(dispatch: any, getState: any) {
    const tagName = getState().tagName;
    let url = `https://api.stackexchange.com/2.2/tags?site=stackoverflow&order=desc&sort=popular&max=${maxTagsToLoad}&inname=${tagName}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const tags = data.items.map((t: any) => t.name);
            dispatch({ type: 'TAGS_POPULAR_FETCH', payload: tags });
        });
}