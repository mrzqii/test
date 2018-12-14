/**注册页面
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity,
    View,
    Alert
} from 'react-native';

import NavigationBar from '../../common/NavigationBar'
import ViewUtils from '../../util/ViewUtils'
import { Button, Toast, WhiteSpace, WingBlank } from 'antd-mobile-rn';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
export default class Register extends Component {
    state = {
		username: '',
		email:'', 
        password: '',
        secureTextEntry: true
	};
    _submit = () => {
        const { navigation } = this.props;
        Alert.alert(
            '注册成功',
            '',
            [
                
                { text: '登陆', onPress: () => {
                    navigation.navigate('Login', { name: "动态的" })
                } },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        )
    }
    render() {
        const { navigation } = this.props;
        const { username, secureTextEntry } = this.state;
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'注册'}
                    statusBar={{ backgroundColor: 'steelblue', hidden: true }}
                    style={{ backgroundColor: 'steelblue', }}
                    leftButton={ViewUtils.getLeftButton(() => {
                        navigation.goBack()
                    })}
                />
                <KeyboardAwareScrollView>
                    <View
                        style={{
                            paddingHorizontal: 30,
                        }}
                    >
                        {/* 设置商标
                        <View style={styles.logoView}>
                            <Image
                                source={require('../../../res/image/mine.png')}
                                style={styles.logo}
                            />
                        </View> */}
                        <View style={styles.view1}>
                            <TextInput
                                style={styles.textInput1}
                                placeholder={'请输入用户名'}
                                onChangeText={(e) => this.setState({ username: e })}
                                underlineColorAndroid={'transparent'}
                                placeholderTextColor={'#CCCCCC'}
                            />
                             
                        </View>
                        <View style={styles.view1}>
                            <TextInput
                                style={styles.textInput1}
                                placeholder={'请输入邮箱'}
                                onChangeText={(e) => {
                                    this.setState({ email: e })
                                }}
                                value={this.state.email}
                                underlineColorAndroid={'transparent'}
                                placeholderTextColor={'#CCCCCC'}
                            />
                        </View>
                        <View style={styles.view1}>
                            <TextInput
                                style={styles.textInput1}
                                value={this.state.password}
                                placeholder={'设置密码(必须包含数字和字母)'}
                                secureTextEntry={secureTextEntry}
                                onChangeText={(e) => {
                                    this.setState({ password: e })
                                }}
                                underlineColorAndroid={'transparent'}
                                placeholderTextColor={'#CCCCCC'}
                            />
                            <TouchableOpacity
                                style={{
                                    position: 'absolute',
                                    alignSelf: 'center',
                                    right: 10
                                }}
                                onPress={() => {
                                    this.setState({
                                        secureTextEntry: !secureTextEntry
                                    })
                                }}
                            >
                                <Image
                                    resizeMode='contain'
                                    source={require('../../../res/image/yan.png')}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor:'#333',
                                        transform: [{ rotateX: secureTextEntry ? '0deg' : '180deg' }]
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <Button
                            onClick={this._submit}
                            type='primary'
                        >
                            注 册
						</Button>
                    </View>
                </KeyboardAwareScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    textInput1: {
		flex: 1,
		padding: 0,
		fontSize: 16,
		color: '#333',
		height: 45,
		borderBottomWidth: 0.5,
		borderBottomColor: '#eaeaea'
	},
	view1: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 15,
	},
	text1: {
		fontSize: 20,
		color: '#000000',
		fontWeight: 'bold',
	},
	view2: {
		justifyContent: 'center',
		marginTop: 40,
	},
	view3: {
		alignItems: 'center',
		marginTop: 30,
	},
	text3: {
		fontSize: 14,
		color: '#999999',
	},
	logoView: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
		marginTop: 46
	},
	logo: {
		width: 129,
        height: 43,
        tintColor:'red',
	},
	criclecss: {
		width: 60, height: 60, backgroundColor: '#F4F4F4', borderRadius: 30,
		alignItems: 'center', justifyContent: 'center',
	},
	buttonView: {
		height: 44,
		borderRadius: 30,
		alignItems: 'center',
		backgroundColor: '#FF7541',
		borderWidth: 0,
	},
	logintext: {
		color: '#fff',
	},
	View4: {
		alignItems: 'center',
		marginTop: 20,
	},
	weiViewcss: {
		width: 50,
		height: 50,
		borderRadius: 25,
		borderWidth: 1,
		borderColor: '#EAEAEA',
		justifyContent: 'center',
		alignItems: 'center',
	},
	View5: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginTop: 15,
		marginBottom: 26,
		alignItems: 'center'
	},
	text4: {
		color: '#999999',
		fontSize: 15,
		textDecorationLine: 'underline',
	},
	text5: {
	 
		fontSize: 14,
		fontFamily: 'PingFangSC-Regular',
	}
});
