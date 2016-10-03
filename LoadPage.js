'use strict';

import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

class LoadPage extends Component {
  componentWillMount() {
    var navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: 'ViewPage',
      });
    }, 1000);
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'blue', fontSize: 32,}}>Loading BookMarx..</Text>
      </View>
    );
  }
}

module.exports = LoadPage;
