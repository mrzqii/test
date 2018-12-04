/**
 * 分割线
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
export default class CuttingLine extends Component {
    render() {
        // 通过参数来标记使用哪一种分割线
            return (
                <View style={styles.container}>
                     <Text style={styles.content}>{this.props.title}</Text>
                     <View style={styles.line}>
                        <View style={[styles.dolt,styles.leftdolt]}></View>
                        <View style={[styles.dolt,styles.middolt]}></View>
                        <View style={[styles.dolt,styles.righttdolt]}></View>
                     </View>
                </View>
            );
    }
}
// 第二种样式的分割线 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        left:-30
         
    },
    content: {
        width:330,
        height:38,
        lineHeight:30,
        textAlign:'left',
        color:'#fff',
        fontSize:16,
        backgroundColor: '#000',
        paddingLeft: 30,
    },
    line: {
        // flex:1,
        width:360,
        height:2,
        backgroundColor: '#333',
        zIndex:100
    },
    dolt:{
        position:'absolute',
        top:-5,
        width:10,
        height:10,
        borderRadius:5,
        backgroundColor:'red'
    },
    leftdolt:{
        left:30
    },
    middolt:{
        left:60
    },
    righttdolt:{
        left:90
    },
});
