

import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Button,
    TextInput,
    View,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';
import NavigationBar from '../../common/NavigationBar'
import ViewUtils from '../../util/ViewUtils'
import User from '../../models/user'
import { asyncLoging } from "../../actions/user";
import { connect } from 'react-redux'
import Toast, {DURATION} from 'react-native-easy-toast'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            validcode: '',
            valiImage: '',
            isError:false
        }
    }
    // 当登陆状态发生变化的时候 loginStaus
    componentDidUpdate(prevProps, prevState) {
        const { navigation, loginStaus } = this.props;
        if (prevProps.loginStaus !== loginStaus) {
            navigation.navigate('HomePage', { name: "动态的" })
        }

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
        }
        this.props.dispatch(asyncLoging(params)).then(res=>{
            if(res==="error"){
                this.refs.toast.show('登陆出错了!',500);
            }
        })
         

    }
    componentDidMount(){
        // const { isError} = this.props;
        // console.warn('isError::',isError);
        // if(isError){
        //     this.refs.toast.show('登陆出错了!',500);
        // }
        // 跳转页面的操作
    }
    render() {
        const { navigation, isError, isLoding } = this.props;
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
                {/* {isLoding ? <ActivityIndicator size="large" color="#0000ff" /> : null} */}
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
                <Toast ref="toast"/>

            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
        loginStaus: state.user.loginStaus,
        isLoding: state.user.isLoding,
        isError: state.user.isError
    }
}
export default connect(mapStateToProps)(Login)

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
