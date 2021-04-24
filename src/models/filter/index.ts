export enum FilterOrder {
    desc = 'desc',
    asc = 'asc'
}

export enum FilterSorting {
    activity = 'activity',
    votes = 'votes',
    creation = 'creation',
    hot = "hot",
    week = 'week',
    month = 'month'
}



export type Filter = {
    tags: string[];
    order: FilterOrder;
    sort: FilterSorting;
    from_date?: Date;
    to_date?: Date;
};