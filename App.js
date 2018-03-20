/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  ImageBackground

} from 'react-native';
import Swiper from 'react-native-swiper';
import { StackNavigator } from 'react-navigation';
import DetailsScreen from './page/recom/recom'
import ManhuaScreen from './page/detail/detail'
import TodoScreen from './page/add/index'
import SearchScreen from './page/search/search'
import VedioScreen from './page/vedio/vedio'



const images = [
  'https://sinastorage.com/sandbox/client/2018/01/16/TGtlEODp.jpg',
  'https://sinastorage.com/sandbox/client/2018/01/30/crFlWr8F.jpg',
];

var Dimensions = require('Dimensions'); //必须要写这一行，否则报错，无法找到这个变量
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var ScreenScale = Dimensions.get('window').scale;

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={styles.top} width = {ScreenWidth}>
        <TouchableHighlight onPress={this._onPress}>

          <Image source={{ uri: 'https://img.manhua.weibo.com/static/b/wb_comic/dist/static/image/category.png?v=1' }} style={{ width: 24, height: 24, }} />
          </TouchableHighlight>
          <Image source={{ uri: 'https://img.manhua.weibo.com/static/b/wb_comic/dist/static/image/logo.png?v=1' }} style={{ width: 100, height: 24, }} />
          <Image source={{ uri: 'https://img.manhua.weibo.com/static/b/wb_comic/dist/static/image/search.png?v=1' }} style={{ width: 24, height: 24, }} />
          
        </View>
    );
  }
}


class MyApp extends Component {
  // static navigationOptions = {
  //   headerTitle instead of title
  //   headerTitle: <LogoTitle />,
    
  // };

  constructor(props) {
    super(props);
    this.state = {
        show: false,
    }
}

// 按压控制显示/隐藏菜单
_onPress= () =>  {
    console.log(this.state.show)
    this.setState({
            show: !this.state.show,
    });
    
}
_onPress1= () =>  {
  this.props.navigation.navigate('Details')  
}
_onPress2= () =>  {
  this.props.navigation.navigate('Todo')  
}
_onPress3= () =>  {
  this.props.navigation.navigate('Vedio')  
}
handleOnTouchStarCapture =()=>{
  this.props.navigation.navigate('Manhua')
}
_onPressSearch = ()=>{
  console.log(123)
  this.props.navigation.navigate('Search')
}
  
  render() {
    var v = this.state.show ? 
    <View style = {styles.topTitle} width = {ScreenWidth}>
      <Text style = {styles.topText}
        onPress={this._onPress1}
        >推荐</Text>
      <Text style = {styles.topText}
        onPress={this._onPress2}
      >看图</Text>
      <Text style = {styles.topText}
        onPress={this._onPress3}
      >关注</Text>
      <Text style = {styles.topText}>我的</Text>
    </View> : null;    // 菜单

    return (
      <View>

        <View style={styles.top}>
          <TouchableHighlight onPress={this._onPress}>
            <Image source={{ uri: 'https://img.manhua.weibo.com/static/b/wb_comic/dist/static/image/category.png?v=1' }} style={{ width: 24, height: 24, }} />
          </TouchableHighlight>
          <Image source={{ uri: 'https://img.manhua.weibo.com/static/b/wb_comic/dist/static/image/logo.png?v=1' }} style={{ width: 100, height: 24, }} />
          <TouchableHighlight onPress={this._onPressSearch}>
          <Image 
          source={{ uri: 'https://img.manhua.weibo.com/static/b/wb_comic/dist/static/image/search.png?v=1' }} style={{ width: 24, height: 24, }} />
          </TouchableHighlight>
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}
          bounces = {false}
        >
        {v}
        <View style={styles.container}>

          <Swiper style={styles.wrapper} height={200} horizontal={true} autoplay>
          <ImageBackground source={{ uri: 'https://sinastorage.com/sandbox/client/2018/01/16/TGtlEODp.jpg' }} style={{flex:1 }}>
            <View style={styles.slide1}
            onTouchStartCapture = {this.handleOnTouchStarCapture}
            >
              
                <Text style={styles.text}>And simple</Text> 
              
            </View>
            </ImageBackground>
            <View style={styles.slide2}
            onTouchStartCapture = {this.handleOnTouchStarCapture}
            >
              <Image source={{ uri: 'https://sinastorage.com/sandbox/client/2018/01/16/TGtlEODp.jpg' }} style={{resizeMode:'cover'  }} />
            </View>
            <View style={styles.slide3}
            onTouchStartCapture = {this.handleOnTouchStarCapture}
            >
              <Text style={styles.text}>And simple</Text>
            </View>
          </Swiper>

        </View>
        <View style={styles.container}></View>
        <View style={styles.container}></View>
        <View style={styles.container}></View>
        <View style={styles.container}></View>
        <View style={styles.container}></View>
        <View style={styles.container}></View>        
      </ScrollView>  
      </View>


    );
  }
  
 

}


const RootStack = StackNavigator(
  {
    Home: {
      screen: MyApp,
      navigationOptions:{
        // headerTitle instead of title
        headerTitle: <LogoTitle />,
      },
      
    
    },
    Details: {
      screen: DetailsScreen,
    },
    Manhua: {
      screen: ManhuaScreen,
    },
    Todo: {
      screen: TodoScreen,
    },
    Search:{
      screen: SearchScreen,
    },
    Vedio:{
      screen: VedioScreen,
    }
  },
  {
    //隐藏顶部title
    headerMode: 'none',
  }
);
export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = {
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingRight: 15,
    paddingLeft: 15,
  },
  topTitle:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position:'absolute',
    top:0,
    backgroundColor:'yellow',
    height:50,
    zIndex :999999999,
  },
  topText:{
    alignItems: 'center',
  },
  container: {
    height:200,
    backgroundColor:'#F00',
    borderBottomWidth:2,
    borderBottomColor:'#000'
  },
  wrapper: {
    height: 200
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }

};
