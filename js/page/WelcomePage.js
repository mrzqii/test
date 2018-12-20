/**
 * 
 */

import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button,
    Dimensions
} from 'react-native'
// import NavigatorUtil from '../util/NavigatorUtil'
// import ThemeDao from '../expand/dao/ThemeDao'
// import SplashScreen from 'react-native-splash-screen'
import ButtonView from '../common/ButtonView'
import videoUrl from '../../res/pageImage/landing.mp4'
import Video from 'react-native-video'

import { connect } from 'react-redux'

import Orientation from 'react-native-orientation';
import { NavigationActions } from 'react-navigation';
const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'HomePage' }),
    ],
});


const { width, height } = Dimensions.get('window')
class WelcomePage extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        const { navigation, loginStaus, state } = this.props;
        console.warn('state::', state);
        if (loginStaus) {
            console.warn('已经登陆');
            navigation.navigate('HomePage', { name: "动态的" })
        } else {
            console.warn('没有登陆');
        }
        // Orientation.lockToLandscape();
        // new ThemeDao().getTheme().then((data) => {
        //     this.theme = data;
        // })
        // this.timer = setTimeout(() => {
        //     SplashScreen.hide();
        //     NavigatorUtil.resetToHomePage({
        //         theme: this.theme,
        //         navigation: this.props.navigation
        //     })
        // }, 500);
    }

    componentWillUnmount() {
    }

    render() {

        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Video
                        source={videoUrl}
                        repeat={true}
                        paused={false}
                        resizeMode={'stretch'}
                        style={styles.backgroundVideo}
                    />
                </View>
                <View style={styles.wxBtnWrapper}>
                    <ButtonView
                        btnStyle={styles.wxBtn}
                        underlayColor="#eee"
                        textStyle="去主页"
                        btnName="微信登陆"
                        onPress={() => {
                            navigation.navigate('HomePage', { name: "动态的" })
                            this.props.navigation.dispatch(resetAction);
                        }}
                    />
                </View>
                <View style={styles.telBtnWrapper}>
                    <ButtonView
                        btnStyle={styles.telBtn}
                        underlayColor="#eee"
                        textStyle={styles.telText}
                        btnName="账号密码登陆"
                        onPress={() => {
                            navigation.navigate('Login', { name: "参数" })
                        }}
                    />
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {

    return {
        loginStaus: state.user.loginStaus,
        state, state
    }
}
export default connect(mapStateToProps)(WelcomePage)
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    wxBtnWrapper: {
        position: 'absolute',
        bottom: 80,
        left: 0,
        right: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        zIndex: 1000
    },
    telBtnWrapper: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        zIndex: 1000
    },
    wxBtn: {
        height: 45,
        width: 250,
        backgroundColor: '#13E079',
        borderColor: '#ff8447',
        borderRadius: 22.5,

    },
    telBtn: {
        height: 45,
        width: 250,
        backgroundColor: 'transparent',
        borderColor: '#666',
        borderWidth: 1,
        borderRadius: 22.5,
    },
    telText: {
        color: '#333'
    },
    tips: {
        fontSize: 29
    },
    myvideo: {
        zIndex: -1000,
        height: 1000
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }

})
