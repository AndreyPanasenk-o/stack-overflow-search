import React, { useContext } from 'react';
import { Question } from '../../models/question';
import Header from '../Header';
import { QuestionComponent } from '../Question/index';
import classes from './style.module.css';
import { connect } from "react-redux";
import { SearchResult } from '../../models/result';


const QuestionsComponent = (props: { searchResult: SearchResult }) => {
    return (
        <div className={classes.page}>
            <Header></Header>
            <div className={classes.questions}>
                {props.searchResult.questions?.map(question => <QuestionComponent key={question.question_id} {...question} />)}
            </div>
        </div >
    )
}

export default connect((state: { searchResult: SearchResult }) => { return { searchResult: state.searchResult } })(QuestionsComponent);

