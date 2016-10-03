

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

var ViewPage = require('./ViewPage');
var LoadPage = require('./LoadPage');
var AddPage = require('./AddPage');
 var addjson = {"url":"www.hello.com"};

var REQUEST_URL = 'https://demo9956158.mockable.io/Bookmarx';

class AwesomeProject1 extends Component {
constructor(props) {
  super(props);
  this.state = {
    //movies: null,
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 != row2,
    }),
    loaded: false,
  };
}
componentDidMount(){
  this.fetchData();
}
fetchData(){
  fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
       this.setState({
         //movies: responseData.movies,
	 dataSource:
	 this.state.dataSource.cloneWithRows(responseData.Bookmarx),
	 loaded: true,
       });
   })
.done();
}
render() {
   return (
     <Navigator
        initialRoute={{id:'LoadPage', name:'Index'}}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }} />
    );
  }

  renderScene(route, navigator) {
    var routeId = route.id;
    if(routeId === 'LoadPage') {
      return (
        <LoadPage
          navigator={navigator} />
      );
    }
      if(routeId === 'ViewPage') {
        return (
          <ViewPage
            navigator={navigator} />
        );
    }
    if(routeId === 'AddPage') {
      return (
        <AddPage
          navigator={navigator} />
      );
  }
    return this.noRoute(navigator);
  }

  noRoute(navigator){
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native1!
      </Text>
      </View>
    );
  }

  renderMovie(movie) {
    return (
      <View style={styles.container}>
      <View style={styles.box}>
	  <Text style={styles.title}>{movie.url}</Text>
	</View>

      </View>
      );
    }
  }

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headerContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 1,
  },
  listView: {

    backgroundColor: '#F5FCFF',

  },
  box: {
  flex: 300,
    borderWidth: 0.5,
  },
  title: {
  flex: 1,
   fontSize:20,
   marginBottom:8,
   textAlign: 'left',

  },
  header: {
    fontSize:30,
    padding:5,
    textAlign: 'left',
    backgroundColor: '#FF0000',
    color: '#FFFFFF'
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
});


AppRegistry.registerComponent('AwesomeProject1', () => AwesomeProject1);
