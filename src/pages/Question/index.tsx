import { Avatar, Card, CardActions, CardContent, CardHeader, Chip, createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { Question } from "../../models/question";
import classes from './style.module.css';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import { green, orange, red } from "@material-ui/core/colors";
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 345,
            margin: 24,
            backgroundColor: orange[50]
        },
        cardHeader: {
            padding: 16
        },
        infoIcon: {
            verticalAlign: 'middle',
            color: orange[500],
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block'
        },
        infoTitle: {
            width: 78,
            textAlign: 'center'
        },
        resolveIcon: {
            verticalAlign: 'middle',
            color: green[500],
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block'
        },
        tags: {
            paddingTop: 8,
            paddingRight: 16,
            paddingBottom: 8,
            paddingLeft: 16
        },
        tag: {
            backgroundColor: orange[200],
            borderRadius: 4,
            marginRight: 8,
            marginBottom: 8
        },
        avatar: {
            backgroundColor: orange[500],
        },
        questionText:{
            wordBreak: 'break-word'
        }
    }),
);
export const QuestionComponent = (props: Question) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                className={classes.cardHeader}
                subheader={props.owner.display_name}
                title='Author:'
                titleTypographyProps={{ variant: 'caption', color: "textSecondary" }}
                subheaderTypographyProps={{ variant: 'h6', color: "textPrimary" }}
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        <HelpOutlineOutlinedIcon />
                    </Avatar>
                }
            >
            </CardHeader>
            <CardContent>
                <Typography variant="body1" color="textPrimary" component="p" className={classes.questionText}>
                    {props.title}
                </Typography>
            </CardContent>
            <CardActions>

                <span className={classes.infoTitle}>
                    <QuestionAnswerOutlinedIcon className={classes.infoIcon} titleAccess="Answers">
                    </QuestionAnswerOutlinedIcon>
                    {props.answer_count}
                </span>
                <span className={classes.infoTitle}>
                    <VisibilityOutlinedIcon className={classes.infoIcon} titleAccess="Views">
                    </VisibilityOutlinedIcon>
                    {props.view_count}
                </span>
                <span className={classes.infoTitle}>
                    <BarChartOutlinedIcon className={classes.infoIcon} titleAccess="Score">
                    </BarChartOutlinedIcon>
                    {props.view_count}
                </span>
                {props.is_answered ?
                    <span className={classes.infoTitle}>
                        <DoneRoundedIcon className={classes.resolveIcon} titleAccess="Resolved"></DoneRoundedIcon>
                        Resolved
                    </span>
                    : ''
                }
            </CardActions>
            <div className={classes.tags}>
                {props.tags.map(tag => <Chip className={classes.tag} label={tag} key={tag} />)}
            </div>
        </Card >
    );
}