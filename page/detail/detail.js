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
        refreshing:false
        
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
            
          // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
          this.setState({
            data: this.state.data.concat(responseData.movies),
            //data: [this.state.data,...responseData.movies],
            loaded: true,
          });
          console.log(this.state.data)
          
        });
    }
  
    render() {
      if (!this.state.loaded) {
        return this.renderLoadingView();
      }
  
      return (
        <FlatList
          refreshing = {this.state.refreshing}
          data={this.state.data}
          renderItem={this.renderMovie}
          ListHeaderComponent={this._header}
          ListFooterComponent={this._footer}
          ItemSeparatorComponent={this._separator}
          style={styles.list}
          
          
          onRefresh = {this._onRefresh}
          keyExtractor = {this._extraUniqueKey}
          //horizontal={true} //横向列表 
          onEndReachedThreshold={0}
          onEndReached={(info)=>{
            //console.warn(info.distanceFromEnd);
            this._endReached();
          }}

          // onViewableItemsChanged={(info)=>{
            
          //   console.warn(info);
          // }}
         // onEndReached = {this._endReached}
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
    _separator = () => {
      return <View style={{height:2,backgroundColor:'yellow'}}/>;
  }
    _header = () => {
      return <Text style={[styles.txt,{backgroundColor:'green'}]}>这是头部</Text>;
  }

  _footer = () => {
      return <Text style={[styles.txt,{backgroundColor:'green'}]}>这是尾部</Text>;
  }
  _endReached = ()=>{
    this.fetchData();
  }
  _extraUniqueKey(item,index){
    return item.id + index
  }
  _onRefresh= ()=>{
    this.setState({
      data:[],
      refreshing: true,
    });
    this.fetchData();
    if(this.state.data.length){
      this.setState({
        refreshing: false,
      });
    }


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
  
  