import React from 'react';

import { Route, Switch } from 'react-router-dom';

// import pages
import HomePage from '../pages/Homepage'
import Blog from '../pages/Blog'

const Routes = (props) => {
    return(
        <React.Fragment>
        <Switch>
            <Route exact path='/' render={() => <HomePage events={props.events}/>}/>
            <Route exact path='/blog' render={() => <Blog/>}/>
        </Switch>
        </React.Fragment>
    )
}

export default Routes;