import React,{ Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
import { addTodo } from './actions'


const fullWidth = Dimensions.get('window').width;
class Input extends Component{
     render(){
         return(
             <View style={styles.todoRow}>
                <TextInput
                    style={{height: 40}}
                    placeholder={this.props.placeholder}
                    onChangeText={this.handleChangeText}
                /> 
                <TouchableOpacity onPress={this.props.handleappendTodoLis} style={styles.button}>
					<Text style={styles.buttonText}>添加</Text>
				</TouchableOpacity>

             </View>
         )
     }
}
function mapStateToProps(state){
    return{
        text: state.text,
        placeholder: state.placeholder
    }
}
 const mapDispatchToProps = (dispatch)=>{
    return {
        handleappendTodoLis:()=>{
            dispatch(addTodo("女神节快乐"))
        } 
    }
}

 var styles = StyleSheet.create({
	todoRow: {
		paddingLeft: 10,
		paddingRight: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: fullWidth,
		height: 40,
		borderBottomColor: '#EEEEEE',
		borderBottomWidth: 1,
    },
    inputText: {
		height: 40,
		width: (fullWidth-20)*0.8,
		borderBottomColor: '#EEEEEE',
		borderBottomWidth: 1,
	},
  });
  export default connect(mapStateToProps,mapDispatchToProps)(Input);