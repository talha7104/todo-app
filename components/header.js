import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Header(){
    return (
        <View style = { styles.header }>
            <Text style= { styles.title }>My Todo</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header : {
        paddingTop:40,
        height:20,
        backgroundColor:'coral'

    },
    title: {
        textAlign:'center',
        color:'#fff',
        fontSize:10,
        fontWeight:'bold',
        paddingHorizontal:160,
        marginTop:10
        
       
    },
})