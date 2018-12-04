/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class ThemeRecommend extends Component {
    _onPressButton(id){
        alert('类目ID:'+id)
    }
    render() {
        let {data} = this.props
        let id = data.id
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={styles.container}>
                    <View style={styles.titleWrapper}>
                        <View style={styles.line}></View>
                        <Text style={styles.title}>{data.title}</Text>
                        <View style={styles.line}></View>
                    </View>
                    <Text style={styles.desc}>{data.desc}</Text>
                    <Image
                        style={styles.image}
                        source={{uri:data.imageUrl}}
                    />
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width:260,
        height:400,
        alignItems: 'center',
        backgroundColor: '#eee',
        marginBottom: 20,
        borderColor: '#333',
        borderWidth: 1,
    },
    titleWrapper:{
        flexDirection: 'row',
    },
    line:{
        width: 20,
        height:1,
        marginTop: 19,
        backgroundColor:'#333'
    },
    title: {
        textAlign:'center',
        color: '#222',
        fontSize: 16,
        margin:5,
    },
    desc: {
        textAlign:'center',
        color: '#999',
        fontSize: 13,
        margin:5,
    },
    image:{
        flex:1,
        width: 220,
        margin: 'auto',
        margin:3
         
    }
});
