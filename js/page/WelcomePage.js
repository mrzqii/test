/**
 * Created by penn on 2016/12/14.
 */

import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button
} from 'react-native'
// import NavigatorUtil from '../util/NavigatorUtil'
// import ThemeDao from '../expand/dao/ThemeDao'
// import SplashScreen from 'react-native-splash-screen'
import ButtonView from '../common/ButtonView'
import videoUrl from '../../res/pageImage/landing.mp4'
import Video from 'react-native-af-video-player'


import {NavigationActions} from 'react-navigation';
const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({routeName: 'HomePage'}),
    ],
});
 

class MyVideo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Video
                    url={videoUrl}
                    autoPlay={true}
                    loop={true}
                    resizeMode={true}
                    fullScreenOnly
                />
            </View>
        );
    }
}
export default class WelcomePage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
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
        // this.timer && clearTimeout(this.timer);
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                        <Video
                            onPress={()=>false}
                            url={videoUrl}
                            autoPlay={true}
                            loop={true}
                            resizeMode={true}
                            fullScreenOnly
                        />
                </View>
                <View style={styles.wxBtnWrapper}>
                    <ButtonView
                        btnStyle={styles.wxBtn}
                        underlayColor=""
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
                        underlayColor=""
                        textStyle={styles.telText}
                        btnName="手机号登陆"
                        onPress={() => {
                            navigation.navigate('HomePage', { name: "动态的" })
                        }}
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    wxBtnWrapper:{
        position:'absolute',
        bottom:80,
        left:0,
        right:0,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center',
        zIndex: 1000
    },
    telBtnWrapper:{
        position:'absolute',
        bottom:20,
        left:0,
        right:0,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center',
        zIndex: 1000
    },
    wxBtn:{
        height:45,
        width:250,
        backgroundColor: '#13E079',
        borderColor: '#ff8447',
        borderRadius: 22.5,
        
    },
    telBtn:{
        height:45,
        width:250,
        backgroundColor: 'transparent',
        borderColor: '#666',
        borderWidth: 1,
        borderRadius: 22.5,
    },
    telText:{
        color:'#333'
    },
    tips: {
        fontSize: 29
    },
    myvideo: {
        zIndex: -1000,
        height: 1000
    },
     
})
