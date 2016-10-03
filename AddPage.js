'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  TextInput
} from 'react-native';

global.addurl = '';

class AddPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      url: '',
      description: '',
    }
  }
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigator={this.props.navigator}
          navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: '#246dd5'}}
                routeMapper={NavigationBarRouteMapper} />
          } />
    );
  }

  renderScene(route, navigator) {
    return (
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'flex-start', justifyContent:'flex-start'}}>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text>Name:</Text>
        <TextInput
          autoFocus={true}
          value={this.state.name}
          onChangeText={name => this.setState({name})}
        />
        <Text></Text>
        <Text>Url:</Text>
        <TextInput
          autoFocus={true}
          value={this.state.url}
          onChangeText={url => this.setState({url})}
        />
        <Text></Text>
        <Text>Description</Text>
        <TextInput
          ref="description"
          value={this.state.description}
          onChangeText={description => this.setState({description})}
          onSubmitEditing={this._submitForm}
        />
        <Text></Text>
        <TouchableHighlight onPress={this._submitForm}>
        <Text style={{color: 'red', margin: 10, fontSize: 16}}>
          Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }

  _submitForm = () => {
    const { name,url,description } = this.state
    addurl = this.state.url;
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigator.parentNavigator.pop()}>
        <Text style={{color: 'white', margin: 10,}}>
          View
        </Text>
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'red', margin: 10, fontSize: 16}}>
          BookMarx
        </Text>
      </TouchableOpacity>
    );
  }
};

var styles = StyleSheet.create({
  textInput: {
     borderWidth: 1,
     borderColor: 'red',
     height:80,
     textAlign: 'left',
     fontSize: 15,
     paddingTop: 10,
  },
});

module.exports = AddPage;
