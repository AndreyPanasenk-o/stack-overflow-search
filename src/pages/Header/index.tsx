import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { useContext } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchQuestions } from "../../api/Questions";
import { fetchTags } from "../../api/Tags";
import { Filter } from "../../models/filter";
import classes from './style.module.css';


const Header = (props: { tags: string[], filter: Filter }) => {
    const dispatch = useDispatch();

    const handleTagNameChange = (event: any) => {
        dispatch({ type: 'TAG_NAME_CHANGED', payload: event.target.value })
        dispatch(fetchTags);
    }

    const handleTagsChanged = (event: any, newValue: string[]) => {
        dispatch({ type: 'TAGS_UPDATED', payload: { ...props.filter, tags: [...newValue] } });
        dispatch(fetchQuestions);
    }

    return (
        <div className={classes.header}>
            <Autocomplete
                multiple
                options={props.tags}
                getOptionLabel={(tag) => tag}
                style={{ width: 300 }}
                onChange={handleTagsChanged}
                renderInput={(params) => <TextField {...params} onChange={handleTagNameChange} label="Tags" variant="outlined" />}
            />
        </div>
    )
}

export default connect((state: { tags: string[], filter: Filter }) => { return { tags: state.tags, filter: state.filter } })(Header);