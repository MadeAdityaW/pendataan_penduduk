import React, {Component} from 'react';
import { Text, View, Image, StyleSheet, TextInput,} from 'react-native';
import { Button } from 'react-native-elements';
//import {Card, CardItem, Container, Content, Header, Left, Right} from 'native-base'
class SearchBox extends Component {
  state = { term: ''};



  render(){
    const {containerStyle,
          seachTextStyle,
          buttonStyle,
        }=styles;

    return(
      <View style={containerStyle}>
        <TextInput
          style={seachTextStyle}
          onChangeText={term => this.setState({ term })}
          value={this.state.term}
        />
        <Button
          buttonStyle={buttonStyle}
          title="Search"
          onPress={() => this.props.onPressSearch(this.state.term)}
        />

      </View>


      );
  }
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,

  },
  seachTextStyle: {
    width: 240,
    height: 30,
    backgroundColor: 'white',
    marginBottom: 2
  },
  buttonStyle: {
    height: 30,
    width: 65,
    alignItems: 'center',
    marginBottom: 8,
    paddingRight: 8


  },

};

export default SearchBox;
