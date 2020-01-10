import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Try from './Try.js';
import FormView from './FormView.js';

const AppNavigator = createStackNavigator({
    Try: { screen: Try },
    Form: { screen: FormView },

});

const App = createAppContainer(AppNavigator);

export default App;
