import React, {Component} from 'react';
import { View } from 'react-native';
import AppHeader from './components/AppHeader';
import TabNavigator from './components/TabNavigator';

export default class App extends Component  {
  render() {
    return(
      < View style={{ flex: 1, backgroundColor: '#ddd'}} >
      <AppHeader headerText="DATA PENDUDUK" />
      < TabNavigator />
      </View>
    );
  }
}
