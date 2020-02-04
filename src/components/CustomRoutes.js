import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import Layout from "./layout/Layout";

//component used for pages in which you need to distinguish the mode - f.e. mode="edit" or mode="create"
export const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => {
            const currentUser = localStorage.getItem("id_user");
            if (currentUser) {
                // logged in so redirect to home page
                return <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
            }
            return  <Layout> <Component {...props} /> </Layout>
        }} />
    );
};

export const PrivateRouteWithMode = ({ component: Component, mode, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = localStorage.getItem("id_user");
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '', state: { from: props.location } }} />
        }
        // authorised so return component
        return  <Layout> <Component {...props} mode={mode}/> </Layout>
    }} />
);


export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = localStorage.getItem("id_user");
        console.log(currentUser)
        if (!currentUser) {
            console.log(currentUser)
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '', state: { from: props.location } }} />
        }
        // authorised so return component
        return  <Layout> <Component {...props} /> </Layout>
    }} />
);