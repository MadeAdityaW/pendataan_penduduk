import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,ToastAndroid
} from 'react-native';
import RadioForm {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button';
var jeniskelamin=[
  {label: "Laki-laki", value: 0},
  {label: "Perempuan", value: 1},
];

export default class RadioButton extends Component<props>{
    render(){
      return(
        <View >
        <RadioForm
          radio_props={jeniskelamin}
          initial={-1}
          onPress={(value) => {ToastAndroid.show(value.toString(), ToastAndroid.SHORT)} }
          disable={true}
        />
        </View>
      );
    }

}
