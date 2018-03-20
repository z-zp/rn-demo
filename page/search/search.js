import React, { Component } from 'react';
import { TextInput, Button,View,Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Search extends Component {
    
  constructor(props) {
    super(props);
    this.state = { 
        text: '',
        title :'取消',
        data :'' 
    };
    this.handleOnChangeText = this.handleOnChangeText.bind(this)
  }
  handleOnChangeText(text= this.nativeEvent.text){
      //console.log(text)
      this.setState({text});
      //console.log(this.state.text)//因为是异步操作，所以此时的输出会是上一次的
      if(text ==''){
        this.setState({title : "取消"});
      }else{
        this.setState({title : "搜索"});  
      }
  }

  onPressLearnMore=() =>{
      if(this.state.title == "搜索"){
        //console.log(this.state.text)
        //console.log(this._textInput.props)
        this.setState({data : this.state.text});
      }else{
        this.props.navigation.goBack();
      }   
  }
  onSelectionChange({nativeEvent: {selection}}) {
    //console.log(selection)
  }
  render() {
    var v = this.state.data ? 
    <View>
      <Text>{ this.state.data}</Text>
      
    </View> : null;    // 菜单
    return (
      <View>  
        <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder = "Useless Placeholder"
            //onChangeText={(text)=>this.handleOnChangeText(text)}
            onChangeText={this.handleOnChangeText}            
            value={this.state.text}
            returnKeyType = {'search'}
            onChange={(event) => {console.log(event.nativeEvent);}}
            ref={textInput => (this._textInput = textInput)}
            //按下的什么键
            onKeyPress={(event) => {
                //console.log(event.nativeEvent.key)
            }}
            //选中的start，end的index
            onSelectionChange={this.onSelectionChange.bind(this)}


        />
        <Button
            onPress={this.onPressLearnMore}
            title={this.state.title}
            color="#841584"
            //给残障人士阅读使用
            accessibilityLabel="Learn more about this purple button"
        />
        {v}
      </View>
    )
  }
}