import { Question } from "../../models/question";
import { createContext, FC, useState, useEffect } from "react";
import { Filter, FilterOrder, FilterSorting } from "../../models/filter";


type Context = {
    questions: Question[];
    filter: Filter;
    tags: string[];
}

export const AppContext = createContext<Context>({} as Context);

export const AppProvider: FC = ({ children }) => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [filter, setFilter] = useState<Filter>({ order: FilterOrder.desc, sort: FilterSorting.activity, tags: [] });
    const [tags, setTags] = useState<string[]>([]);

    return (<AppContext.Provider value={{ questions, filter, tags }}>
        {children}
    </AppContext.Provider>
    )
}