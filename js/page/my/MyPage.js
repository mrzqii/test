
import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    ScrollView,
    TextInput,
    View,
    Dimensions, 
    Platform,
    AsyncStorage
} from 'react-native';
// import NavigationBar from '../../common/NavigationBar'
// import Toast, {DURATION} from 'react-native-easy-toast' 
import CustomKeyPage from './CustomKeyPage';
import ButtonView from '../../common/ButtonView';
import Xiding from '../../demo/xiding'
import NavPage from '../../common/NavBar'

let { width } = Dimensions.get('window')
let navHeight = (Platform.OS === 'ios' ? 20 : 0) + 45
export default class MyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 0
        }
    }
    onScroll = (event) => {
        let offsetY = event.nativeEvent.contentOffset.y
        let opacity = offsetY / navHeight
        // if(opacity > 5 || opacity < -5) { // 这里可以优化减少render， 1和0 滑快了会有些影响， 这里你可以看着给值， 当然也可以不优化
        //   return
        // }
        this.setState({
            opacity
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <NavPage
                    title={'个人中心'}
                    opacity={this.state.opacity}
                />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    ref='scroll'
                    onScroll={this.onScroll}
                    scrollEventThrottle={16}>
                    <Image style={{ width: width, height: 300 }} source={{ uri: 'https://dimg07.c-ctrip.com/images/100e0t000000ihd4r494C_C_500_280.jpg' }} />
                    <Image style={{ width: width, height: 300, marginTop: 20 }} source={{ uri: 'https://dimg04.c-ctrip.com/images/300e0q000000g5o8b658A_C_500_280.jpg' }} />
                    <Image style={{ width: width, height: 300, marginTop: 20 }} source={{ uri: 'https://dimg04.c-ctrip.com/images/100l0s000000hg344225B_C_500_280.jpg' }} />
                    <Image style={{ width: width, height: 300, marginTop: 20 }} source={{ uri: 'https://youimg1.c-ctrip.com/target/100f0d0000006xaav4A5E_C_220_110.jpg' }} />
                </ScrollView>
               
            </View>
        );
    }
    // render() {
    //     return (
    //         <View style={styles.container}>
    //             <NavigationBar
    //                 title='我的'
    //                 style={{ backgroundColor: '#2196F3' }}
    //             />
    //             <Text
    //                 onPress={() => {
    //                     this.props.navigation.push('CustomKeyPage', { ...this.props })
    //                 }}
    //             >自定义标签</Text>
    //             <ButtonView
    //                 btnName='获取验证码'
    //                 btnStyle={{ width: 90, marginRight: 10, backgroundColor: '#D6D6D6' }}
    //                 onPress={this._getPhoneCode}
    //                 textStyle={{ color: 'gray', justifyContent: 'flex-end', }}
    //             ></ButtonView>

    //         </View>
    //     );
    // }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    btn: {
        margin: 5,
        borderWidth: 1,
        padding: 2
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
