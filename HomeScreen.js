import React from 'react'
import { View, Text, Image,ToastAndroid, Button } from 'react-native';
import { Card, Icon, Input } from 'react-native-elements';
import axios from 'axios';
import FormView from './FormView.js';
import MyApp from './Try.js';

class HomeScreen extends React.Component{
    static navigationOptions = {
        title: 'Welcome',
      };
      render() {
        const {navigate} = this.props.navigation;
        return (
          <Button
            title="Go to Jane's profile"
            onPress={() => navigate('MyApp')}
          />
        );
      }
}
export default HomeScreen;