import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import QuestionsComponent from './pages/Questions';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/search" component={QuestionsComponent}></Route>
                <Route path="*">
                    <Redirect to="/search" />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
