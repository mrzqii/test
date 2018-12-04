
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    Text,
    TextInput,
    View,
    AsyncStorage
} from 'react-native';
import NavigationBar from '../../common/NavigationBar'
// import Toast, {DURATION} from 'react-native-easy-toast' 
import CustomKeyPage from './CustomKeyPage';
import ButtonView from '../../common/ButtonView';


export default class MyPage extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title='我的'
                    style={{ backgroundColor: '#2196F3' }}
                />
                <Text
                    onPress={() => {
                        this.props.navigation.push('CustomKeyPage', { ...this.props })
                    }}
                >自定义标签</Text>
                <ButtonView
                    btnName='获取验证码'
                    btnStyle={{ width: 90, marginRight: 10, backgroundColor: '#D6D6D6' }}
                    onPress={this._getPhoneCode}
                    textStyle={{ color: 'gray', justifyContent: 'flex-end', }}
                ></ButtonView>

            </View>
        );
    }
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
