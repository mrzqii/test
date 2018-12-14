// 个人信息
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
    TouchableHighlight
} from 'react-native';
import NavigationBar from '../../../common/NavigationBar'
import ViewUtils from '../../../util/ViewUtils'

export default class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'个人管理'}
                    statusBar={{ backgroundColor: 'steelblue',hidden:true }}
                    leftButton={ViewUtils.getLeftButton(() => {
                        navigation.goBack(null)
                    })}
                />
                <View>
                    <View><Text>头像</Text></View>
                    <View><Text>会员名</Text></View>
                    <TouchableHighlight
                        underlayColor={'#666'}
                        onPress={() => {
                            navigation.navigate('Address', { name: "动态的" })
                        }}
                    ><Text>收货地址</Text></TouchableHighlight>
                    
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    page1: {
        flex: 1,
        backgroundColor: 'red',
    },
    page2: {
        flex: 1,
        backgroundColor: 'green',
    },
    image: {
        height: 22,
        width: 22
    }
});
