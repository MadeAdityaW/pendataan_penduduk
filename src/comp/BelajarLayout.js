import React from 'react';
import { AppRegistry, Button, TextInput, StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {

  render() {
    return (
    <View style={styles.containerMain}>

      <View style={styles.box1}>
        <Text style={styles.textHeader}>Prakiraan Cuaca</Text>
      </View>
        <View style={{ margin: 20, padding: 10, backgroundColor: 'white' }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="Masukkan Kota"
            onChangeText={(kota)} => this.setState({kota})}
            keyboardType='text'

</View>
    );
  }
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    padding: 30
  },
  textMain: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white'
  },
  texFooter: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    padding: 20
  },
  containerMain: {
    backgroundColor: 'lightblue',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 1,
    backgroundColor: 'green',
  },
  box2: {
    flex: 2,
    backgroundColor: '#2196f3',
    flexDirection: 'column',
    justifyContent: 'space-around', //main axis
    alignItems: 'center' //secondary axis
    //space between -> hanya di tengah" ada spasi
    //space around -> di sekeliling ada spasi
  },
  box3: {
    flex: 1,
    backgroundColor: '#90caf9',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box4: {
    flex: 1,
    backgroundColor: '#90caf9',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box5: {
    flex: 1,
    backgroundColor: 'blue',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});
