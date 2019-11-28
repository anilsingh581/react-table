import React from 'react';

import {Switch, Route, Redirect} from 'react-router-dom';
import User  from '../src/user'

export default () => {
    return(
        <Switch>
            <Route path='/' exact component={User} />

            <Redirect from='/*' to='/pagenotfound' />
        </Switch>
    )
}
