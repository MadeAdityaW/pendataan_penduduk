import React from 'react';
import { StyleSheet, Text,TouchableHighlight, View, Button, TextInput,FlatList, List, ListItem } from 'react-native';


export default class Listview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
    };
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