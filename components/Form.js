import React, { Component } from 'react';
import { View, TextInput, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,  } from 'native-base';
import { Button } from 'react-native-elements';
//import RadioButton from './RadioButton';
export default class StackedLabelExampl extends Component {
    state = { term: ''};

    constructor(){
      super();
      this.state={
        nama: '',
        nik: '',
        ttl: '',
        agama: '',
        no_hp: '',
        ActivityIndicator_Loading: false,
      }
    }
    Insert_Data_Penduduk_MySQL = () => {

     this.setState({ ActivityIndicator_Loading: true }, () => {
       fetch('http://ardywigunapart2.000webhostapp.com/sentDatafix.php',
         {
           method: 'POST',
           headers:
             {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
             },
           body: JSON.stringify(
             {
               nama: this.state.nama,
               nik: this.state.nik,
               ttl: this.state.ttl,
               agama: this.state.agama,
               no_hp: this.state.no_hp,

             })

         }).then((response) => response.json()).then((responseJsonFromServer) => {
           alert(responseJsonFromServer);
           this.setState({ ActivityIndicator_Loading: false });
         }).catch((error) => {
           console.error(error);
           this.setState({ ActivityIndicator_Loading: false });
         });
         this.setState({
           nama: '',
           nik: '',
           ttl: '',
           agama: '',
           no_hp: ''
         })
     });


   }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Nama</Label>
              <TextInput
                style={{width: 250, height: 40, paddingTop: 2}}
                onChangeText={(TextInputText) => this.setState({nama:TextInputText})}
               />
            </Item>
            <Item stackedLabel>
              <Label>NIK</Label>
              <TextInput
                style={{width: 250, height: 40, paddingTop: 2}}
                onChangeText={(TextInputText) => this.setState({nik:TextInputText})}
                keyboardType="numeric"
                />
            </Item>
            <Item stackedLabel>
              <Label>TTL</Label>
              
              <TextInput
                style={{width: 250, height: 40, paddingTop: 2}}
                onChangeText={(TextInputText) => this.setState({ttl:TextInputText})}
                placeholder="   YYYY-MMMM-DDDD "
               />
            </Item>
            <Item stackedLabel >
              <Label>Agama</Label>
              <TextInput
                style={{width: 250, height: 40, paddingTop: 2}}
                onChangeText={(TextInputText) => this.setState({agama:TextInputText})}
                />
            </Item>
            <Item stackedLabel last>
              <Label>No. HP</Label>
              <TextInput
                style={{width: 250, height: 40, paddingTop: 2}}
                onChangeText={(TextInputText) => this.setState({no_hp:TextInputText})}
                keyboardType="numeric"
                />
            </Item>

            <Button
              title="Daftar"
              style={{borderRadius: 10}}
              onPress={ this.Insert_Data_Penduduk_MySQL }
            />

          </Form>
        </Content>
      </Container>
    );
  }
}
