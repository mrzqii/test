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
    View
} from 'react-native';
import Swiper from 'react-native-swiper'
 
 
export default class Swipper extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
        this.slide1 = this.props.slide
    }
    rederImage(data){
        let Imageurl = data.goodsUrl
        return (
            <View style={styles.slide375}>
                <Text style={styles.text}>{data.goodsTitle}</Text>
                <Image
                    style={styles.img}
                    source = {{uri:Imageurl}}
                />
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container} style={{
                height:375,
              }}>
                 <Swiper style={styles.wrapper} style={{height:375}} showsButtons={false}
                >
                    {this.props.data.map((item)=>{
                        return this.rederImage(item)
                    })}
                </Swiper>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
  
    },
    wrapper: {
        flexDirection:'row',
        height:375
    },
    slide375: {
        flexDirection:'row',
        height:375,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333',
    },
  
    text: {
        position:'absolute',
        textAlign:'center',
        zIndex: 100,
        top:10,
        left:0,
        width:'100%',
        height:30,
        color: '#fff',
        fontSize: 15,
        backgroundColor:'rgba(0,0,0,.3)'
    },
    img:{
        flex:1,
        height: 400,
    }
});
