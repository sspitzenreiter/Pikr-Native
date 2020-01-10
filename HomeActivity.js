import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FormView from './FormView.js';
import MyApp from './Try.js';

const MainNavigator = createStackNavigator({
  FormView: {screen: FormView},
  MyApp: {screen: MyApp},
});

const App = createAppContainer(MainNavigator);

export default App;