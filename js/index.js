import React, { Component } from 'react';
// import App from "./containers/index";
import AppNavigator from './navigators/AppNavigator'
import { Provider } from "react-redux";
import store from "./store/index";

export default class Index extends Component {
    render() {
        return <Provider store={store}>
            <AppNavigator />
        </Provider>;
    }
}