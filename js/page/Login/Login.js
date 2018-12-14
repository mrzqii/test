

import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Button,
    TextInput,
    View,
    TouchableOpacity
} from 'react-native';
import NavigationBar from '../../common/NavigationBar'
import ViewUtils from '../../util/ViewUtils'
import User from '../../models/user'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            validcode: '',
            valiImage: ''
        }
    }
    componentDidMount() {
        this.setState({
            valiImage: `http://10.0.2.2:18081/b2c/validcode.do?vtype=memberlogin`
        })

    }
    login() {
        const {
            username,
            password,
           
        } = this.state
        if (!username) {
            // return Toast.warn('请输入用户名')
            return alert('请输入用户名')
        }
        if (!password) {
            return alert('请输入密码')
            // return Toast.warn('请输入密码')
        }
        const params = {
            username,
            password,
           
            // login_type: "password"
        }
        User.login(params).then((res) => {
            console.warn(res);
        })

    }
    _changeValiImage = () => {
        this.setState({
            valiImage: `http://10.0.2.2:18081/b2c/validcode.do?vtype=memberlogin${new Date().getTime()}`
        })
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'登陆'}
                    leftButton={ViewUtils.getLeftButton(() => {
                        navigation.goBack()
                    })}
                    rightButton={ViewUtils.getRightButton('注册', () => {
                        navigation.navigate('Register')
                    })}
                />
                <View style={styles.view1}>
                    <TextInput
                        style={styles.textInput1}
                        placeholder={'手机号或账号'}
                        onChangeText={(e) => {
                            this.setState({
                                username: e
                            })
                        }}
                        value={this.state.username}
                        underlineColorAndroid={'transparent'}
                        placeholderTextColor={'#CCCCCC'}
                    />
                </View>
                <View style={styles.view1}>
                    <TextInput
                        style={styles.textInput1}
                        value={this.state.password}
                        placeholder={'密码'}
                        secureTextEntry={true}
                        onChangeText={(e) => {
                            this.setState({
                                password: e
                            })
                        }}
                        underlineColorAndroid={'transparent'}
                        placeholderTextColor={'#CCCCCC'}
                    />
                </View>
                {/* <View style={styles.view1}>
                    <TextInput
                        style={styles.textInput1}
                        value={this.state.validcode}
                        placeholder={'验证码'}
                        secureTextEntry={false}
                        onChangeText={(e) => {
                            this.setState({
                                validcode: e
                            })
                        }}
                        underlineColorAndroid={'transparent'}
                        placeholderTextColor={'#CCCCCC'}
                    />
                </View> */}
                {/* <View style={styles.View5}>
                    <Text
                        style={styles.text5}
                        onPress={() => navigation.navigate('UserFindPassword')}
                    >
                        忘记密码
							</Text>
                    <Text
                        style={styles.text5}
                        onPress={() => navigation.navigate('UserRegister')}
                    >
                        账号注册
							</Text>
                </View> */}
                {/* <TouchableOpacity
                    onPress={() => {
                        this._changeValiImage()
                    }}
                    style={{ flexDirection: 'row', justifyContent: 'space-around', left: -50 }}
                >
                    <Image
                        style={{ width: 100, height: 50 }}
                        source={{ uri: this.state.valiImage }}
                    />
                </TouchableOpacity> */}

                <Button
                    onPress={() => {
                        this.login()
                    }}
                    title={'登陆'}
                />

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
    },
    textInput1: {
        // flex: 1,
        width: 200,
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
        justifyContent: 'center',
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
        color: '#333',
        fontSize: 14,
        fontFamily: 'PingFangSC-Regular',
    }
});
