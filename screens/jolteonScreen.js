import React from 'react';
import { StyleSheet, Text, View,Image,  TouchableOpacity } from 'react-native';
export default class JolteonScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.screenText}> Math Time!</Text></View>
        )
    }
  
}
const styles=StyleSheet.create({
container:{
    backgroundColor:'yellow',
    flex:1

}, 
screenText:{
color:'black',
justifyContent:'center',
alignItems:'center',
fontSize:35,
fontWeight:'bold'



}
})