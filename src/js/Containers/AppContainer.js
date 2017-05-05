import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    StatusBar
} from 'react-native';
import * as reducers from '../Reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
/**We need these in order to create a store and use async actions */
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

var PushNotification = require('react-native-push-notification');

export default class Dispatch extends Component {
    componentWillMount() {
        StatusBar.setHidden(true, 'none');
    }
    render() {
        return (
            <Provider store={store}>
                <Text>Hello</Text>
            </Provider>
        );
    }
}

