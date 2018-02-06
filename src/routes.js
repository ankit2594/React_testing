import {BrowseRouter} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import {route} from 'react-router-dom';
import Person from './Person';
import Person_Data from './Person_Data';
import React from 'react'

export default()=>(
    <BrowseRouter>
    <Switch>
    <Route path="/" Component={Person_Data} ></Route>
    <Route path="/Person" Component={Person} ></Route>
    </Switch>
    </BrowseRouter>
)
