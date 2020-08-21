import React from 'react';
import { Route, useHistory } from 'react-router-dom';

export default function({component: Component, path, ...rest}){

    const { push } = useHistory();
    if(localStorage.getItem("token")){
        return(
            <Route path={path}>
                <Component {...rest} />
            </Route>
        )

    }else{
        push("/")
        return null;
    }
}