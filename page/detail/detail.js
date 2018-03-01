import React, { Component } from 'react';
import {
    AppRegistry,
    Image,
    FlatList,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  
  var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';
  
  export default class SampleAppMovies extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        loaded: false,
      };
      // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
      // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
      this.fetchData = this.fetchData.bind(this);
    }
  
    componentDidMount() {
      this.fetchData();
    }
  
    fetchData() {
      fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData.movies)
          // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
          this.setState({
            data: this.state.data.concat(responseData.movies),
            //data: [this.state.data,...responseData.movies],
            loaded: true,
          });
        });
    }
  
    render() {
      if (!this.state.loaded) {
        return this.renderLoadingView();
      }
  
      return (
        <FlatList
          data={this.state.data}
          renderItem={this.renderMovie}
          style={styles.list}
        />
      );
    }
  
    renderLoadingView() {
      return (
        <View style={styles.container}>
          <Text>
            Loading movies...
          </Text>
        </View>
      );
    }
  
    renderMovie(movie) {
      return (
        <View style={styles.container}>
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.item.title}</Text>
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
    rightContainer: {
      flex: 1,
    },
    title: {
      fontSize: 20,
      marginBottom: 8,
      textAlign: 'center',
    },
    year: {
      textAlign: 'center',
    },
    thumbnail: {
      width: 53,
      height: 81,
    },
    list: {
      paddingTop: 20,
      backgroundColor: '#F5FCFF',
    },
  });
  
  