import React,{ Component } from 'react';
import { connect } from 'react-redux'
import {
    View,
    Text,
    ListView,
    StyleSheet,
    FlatList,
} from 'react-native';


 class TodoList extends Component{
  constructor(props){
    super(props);
  }
     render(){
         return(
            <FlatList
          
          data={this.porps.items}
          renderItem={this.renderMovie}
          style={styles.list}/>
          
         )
     }
     renderMovie(movie) {
        return (
          <View style={styles.container}>
            <View style={styles.rightContainer}>
              <Text style={styles.title}>{movie.item.key}</Text>
            </View>
          </View>
        );
      }
 }
function mapStateToProps(state){
  return{
      items:state.item
  }
}

export default connect(mapStateToProps)(TodoList);
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
  
