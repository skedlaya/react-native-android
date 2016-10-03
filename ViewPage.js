'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  ListView,
  Navigator,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

//var REQUEST_URL = 'https://demo9956158.mockable.io/Bookmarx';
var REQUEST_URL = 'http://demo9956158.mockable.io/Bookmarx';
 GLOBAL = require('./globals');
 global.bookmarxJson = null;

class ViewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //movies: null,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 != row2,
      }),
      loaded: false,
      prevUrl: '',
    };

  }
  componentDidMount(){
    this.fetchData();
  }
  fetchData(){
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        //responseData.Bookmarx.push({"url":addurl});
        bookmarxJson = responseData.Bookmarx;
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
          renderScene={this.renderScene.bind(this)}
          navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: '#246dd5', alignItems: 'center'}}
                routeMapper={NavigationBarRouteMapper} />
          } />
    );
  }
  renderScene(route, navigator) {
    return (
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-start',}}>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
        <TouchableHighlight
            onPress={this.gotoAdd.bind(this)}>
          <Text style={{color: 'red',  textAlign: 'center',backgroundColor:'white', }}>Add Bookmark</Text>
        </TouchableHighlight>
        <TouchableHighlight
            onPress={this.onLoad.bind(this)}>
          <Text style={{color: 'red',  textAlign: 'center',backgroundColor:'white', }}>Refresh</Text>
        </TouchableHighlight>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderMovie}
          style={styles.listView}
          />
      </View>
    );
  }
  renderMovie(movie) {
    return (
      <View style={styles.container}>
      <View style={styles.box}>
    <Text style={styles.title}>{movie.url}</Text>
    <View style={styles.rightContainer}>
      <Image source={require('./edit1.jpeg')}
       style={styles.thumbnail}
      />

      <Image source={require('./delete1.png')}
       style={styles.thumbnail}
      />
    </View>
    </View>

      </View>
      );
    }
  gotoAdd() {
    this.props.navigator.push({
      id: 'AddPage',
      name: 'viewNext',
  });
  }
  onLoad() {
    //if(this.state.prevUrl != addurl){
    bookmarxJson.push({"url":addurl}),
    bookmarxJson.splice(1,1)
    this.setState({
    dataSource:
    this.state.dataSource.cloneWithRows(bookmarxJson)
    })
    this.state.prevUrl = addurl;
  //}
}

}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return null;
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
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  listView: {

    backgroundColor: '#F5FCFF',

  },
  box: {
  flex: 300,
  flexDirection: 'row',
  justifyContent: 'space-between',
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
    width: 30,
    height: 30,
  },
});
module.exports = ViewPage;
