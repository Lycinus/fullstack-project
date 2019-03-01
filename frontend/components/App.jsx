import React from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import SignupContainer from '../containers/signup_container';
import LoginContainer from '../containers/login_container';
import { AuthRoute } from '../util/auth_util';
import AuthNavContainer from '../containers/auth_nav_container';
import HomePage from './home_page'
import CreateStoryContainer from '../containers/create_story_form_container';
import EditStoryContainer from '../containers/edit_story_form_container'

const App = () => (
    <>
        <div className="nav-bar">
            <NavLink to="/">
                <h1 id="site-title">Idiom</h1>
            </NavLink>
            <AuthNavContainer />
        </div>
        <Switch>
            <AuthRoute path="/signup" component={SignupContainer}/>
            <AuthRoute path="/login" component={LoginContainer}/>
            <Route exact path="/" component={HomePage}/>
            <Route path="/stories/new" component={CreateStoryContainer}/>
            <Route path="/stories/edit" component={EditStoryContainer}/>
            <Redirect to="/"/>
        </Switch>
    </>
)

export default App