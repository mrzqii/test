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
import TabNavigator from 'react-native-tab-navigator';
import HomeIndex from '../page/Home/HomeIndex'
import MyPage from '../page/my/MyPage'
import EZSwiperDemo from '../demo/EZSwiper'
import Swipper from '../demo/Swipper'
import Xiding from '../demo/xiding'
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

// type Props = {};
// export default class App extends Component<Props> {
export default class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'tb_home'
        }
        
    }
    render() {
        const navigation = this.props.navigation;
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_home'}
                        // 导航文字选中的颜色
                        selectedTitleStyle = {{color: '#2196F3'}} 
                        title="首页"
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_polular.png')} />}
                        // 设置选中的颜色 注意这里的写法
                        renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'#2196F3'}]} source={require('../../res/images/ic_polular.png')} />}
                        badgeText="2"  // 设置有几个消息
                        onPress={() => this.setState({ selectedTab: 'tb_home' })}>
                        <HomeIndex navigation={navigation}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_trending'}
                        title="分类"
                        selectedTitleStyle = {{color: '#2196F3'}} 
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_trending.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'#2196F3'}]} source={require('../../res/images/ic_trending.png')} />}
                        onPress={() => this.setState({ selectedTab: 'tb_trending' })}>
                        <Swipper/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_favorite'}
                        title="购物车"
                        selectedTitleStyle = {{color: '#2196F3'}} 
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_favorite.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'#2196F3'}]} source={require('../../res/images/ic_favorite.png')} />}
                        onPress={() => this.setState({ selectedTab: 'tb_favorite' })}>
                        <EZSwiperDemo/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_mine'}
                        title="我的"
                        selectedTitleStyle = {{color: '#2196F3'}} 
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_trending.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'#2196F3'}]} source={require('../../res/images/ic_trending.png')} />}
                        onPress={() => this.setState({ selectedTab: 'tb_mine' })}>
                        <MyPage {...this.props}></MyPage>
                        {/* <Xiding/> */}
                    </TabNavigator.Item>
                </TabNavigator>
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
        flex:1,
        backgroundColor: 'red',
    },
    page2: {
        flex:1,
        backgroundColor: 'green',
    },
    image:{
        height: 22,
        width: 22
    }
});
