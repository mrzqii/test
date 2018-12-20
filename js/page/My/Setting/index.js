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
    TouchableHighlight,
    StyleSheet,
    Image,
    Button,
    Text,
    View,
    FlatList,
    Alert,
    AsyncStorage
} from 'react-native';
import { loginOutAction } from '../../../actions/user'
import { connect } from 'react-redux'
import NavigationBar from '../../../common/NavigationBar'
import ViewUtils from '../../../util/ViewUtils'
import { scaleSize, scaleHeight, setSpText2, } from '../../../util/screenUtil'
import { NavigationActions } from 'react-navigation';
const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Login' }),
    ],
});
let itemData = [

    {
        icon: require('../../../../res/image/setting/footmark.png'),
        title: '清除缓存',
        action: 'clean'
    },
    {
        icon: require('../../../../res/image/setting/footmark.png'),
        title: '鼓励一下',
        action: 'encourage'
    },
    {
        icon: require('../../../../res/image/setting/footmark.png'),
        title: '隐私和协议',
        action: 'privacy'
    },

    {
        icon: require('../../../../res/image/setting/footmark.png'),
        title: '退出登陆',
        action: 'logout'
    },


]
class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    _logout = () => {
        const { navigation } = this.props;
        Alert.alert(
            '退出登陆',
            '',
            [
                {
                    text: '确认', onPress: () => {
                        this.props.loginOut() // dispach
                        // navigation.navigate('Login', { name: "动态的" })
                        // navigation.dispatch(resetAction);
                    }
                },
                { text: '取消', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        )
    }
    _goto = (action) => {
        switch (action) {
            case "clean":
                return this._clean()
            case "encourage":
                return this._encourage()
            case "privacy":
                return this._privacy()
            case "logout":
                return this._logout()
        }
    }
    _clean = ()=> {
        Alert.alert(
            '清除缓存?',
            '',
            [
                {
                    text: '确认', onPress: () => {
                        AsyncStorage.clean(()=>{
                            
                        })
                    }
                },
                { text: '取消', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        )
    }
    _renderItem = (item) => {
        return (
            <View>
                <TouchableHighlight
                    underlayColor={'#DDD'}
                    onPress={() => {
                        this._goto(item.action)
                    }}
                >
                    <View
                        style={styles.itemView}>
                        <Image
                            source={item.icon}
                            style={{ width: scaleSize(20), height: scaleHeight(19), tintColor: '#666', marginRight: scaleSize(10) }}
                        />
                        <Text style={{ fontSize: setSpText2(15) }}>{item.title}</Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.line}></View>
            </View>
        )
    }
    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'设置'}
                    statusBar={{ backgroundColor: 'steelblue', hidden: true }}
                    style={{ backgroundColor: 'steelblue', }}
                    leftButton={ViewUtils.getLeftButton(() => {
                        navigation.goBack()
                    })}
                />
                <FlatList
                    data={itemData}
                    renderItem={({ item }) => this._renderItem(item)}
                />
                {/* <Button
                    onPress={this.loginOut}
                    title={'退出登陆'}
                /> */}
            </View>
        );
    }
}
export default connect(null, { loginOut: loginOutAction })(Setting)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    line: {
        width: '90%',
        height: 1,
        backgroundColor: '#eee',
        marginBottom: scaleSize(15)
    },
    itemView: {
        flexDirection: 'row',
        paddingLeft: scaleSize(20),
        marginVertical: scaleSize(15),
        alignItems: 'center'
    }
});
