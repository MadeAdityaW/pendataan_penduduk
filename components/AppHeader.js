import React from 'react';
import {Header} from 'react-native-elements';

const AppHeader = ({headerText}) => (
  <Header
    centerComponent= {{ text: headerText, style: {color: 'black'} }}
    outerContainerStyle= {{ backgroundColor: '#E62117'}}
  />
  );


export default AppHeader;
