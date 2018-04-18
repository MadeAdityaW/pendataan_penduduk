import React from 'react';
import { StyleSheet, Text,TouchableHighlight, View, Button, TextInput,FlatList, List, ListItem, RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import SearchBox from './SearchBox';
import Form from './Form';
import {Header, Card, Container, CardItem, Left, Right, Content} from 'native-base';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
    };
}
_onRefresh() {
  this.setState({refreshing: true});
  fetchData().then(() => {
    this.setState({refreshing: false});
  });
}

componentDidMount()  {
  const url = 'https://ardywigunapart2.000webhostapp.com/getData.php';
   this.setState({ loading: true });
  fetch (url)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log("comp");
    console.log(responseJson);
    this.setState({
      data: responseJson,
      error: responseJson.error || null,
      loading: false,
      refreshing: false
    });
  }
);
}

  render() {
    return (
      
      <View style={{marginTop: 5, justifyContent:'center'}}>
      
      <FlatList
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this.componentDidMount.bind(this)}
                />
              }
        data={this.state.data}
        renderItem={({item}) =>
          <View style={styles.ListItem}>
            <Text style={styles.ListFirst}>Nama: {item.nama}</Text>
            <Text>NIK: {item.nik}</Text>
            <Text>TTL: {item.ttl}</Text>
            <Text>Agama: {item.agama}</Text>
            <Text>NO. HP: {item.no_hp}</Text>
          </View>
      }
      onRefresh={this.handRefresh}
      />
      
    </View>
    );
  }
}
const styles = StyleSheet.create({
  Header: {
      marginTop: 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#64B5F6',
  },
  TextHeader: {
      fontSize: 30
  },
  ListItem: {
      backgroundColor:'white',
      width: 350,
      marginTop: 2,
      flex: 1
  },
  ListFirst: {
    fontSize: 20
  }

});

class SettingsScreen extends React.Component {
  onPressSearch = term =>{
    console.log(term);
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        < Form
          onPressSearch={this.onPressSearch}
         />


      </View>
    );
  }
}

export default TabNavigator(
  {
    Beranda: { screen: HomeScreen },
    Daftar: { screen: SettingsScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Beranda') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Daftar') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
    animationEnabled: true,
    swipeEnabled: true,
  }
);
