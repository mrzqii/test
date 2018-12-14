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
    TouchableOpacity
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Avartar from '../../common/avatar'

export default class GoodItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    renderLine() {
        if (this.props.noLine) {
            return
        } else {
            return (
                <View
                    style={styles.line}
                ></View>
            )
        }
    }
    // _onPressButton() {
    //     const {navigation} = this.props;
    //     alert('点击事件')
    //     navigation.navigate('GoodsDetail', {name: "动态的"})
    // }
    render() {
        const navigation = this.props.navigation;
        let { goodsId, avatarUrl, avatarName, goodImageUrl, goodDscription, starNum, sharenUM } = this.props.info
        return (
            <View style={styles.container}>
                <View
                    style={styles.avatarWrapper}
                >
                    <Avartar
                        avatarName={avatarName}
                        avatarUrl={avatarUrl}
                    />
                    <Image
                        style={{
                            position: 'absolute',
                            right: 0, top: 0,
                            width: 20, height: 20,
                            tintColor: '#222',
                        }}
                        source={require('../../../res/image/enter.png')}
                    />

                </View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('GoodsDetail', { name: goodsId })
                }}>
                    <View>
                        <Image
                            style={styles.pic}
                            source={{ uri: goodImageUrl }}
                        />
                    </View>
                    <Text
                        style={styles.dis}
                    >{goodDscription}</Text>
                    <View>
                        <View style={styles.starShare}>
                            <View style={styles.star}>
                                <Image
                                    style={{
                                        width: 16, height: 16,
                                        marginRight:3
                                    }}
                                    source={require('../../../res/image/collect.png')}
                                />
                                <Text style={styles.text}>{starNum}</Text>
                            </View>
                            <View style={styles.vline}></View>
                            <View style={styles.share}>
                            <Image
                                    style={{
                                        width: 16, height: 14,
                                        marginRight:5,top:2
                                    }}
                                    source={require('../../../res/image/favorite.png')}
                                />
                                <Text style={styles.text}>{sharenUM}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                {this.renderLine()}
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginRight: 20,
        marginLeft: 20,

    },
    avatarWrapper: {
        flexDirection: 'row',
        marginBottom: 25,
        marginTop: 25,
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    pic: {
        height: 300
    },
    dis: {
        marginTop: 10,
        marginBottom: 10,
    },
    line: {
        height: 2,
        backgroundColor: '#333',
    },
    vline: {
        width: 1,
        backgroundColor: '#fff',
        marginBottom: 5,
        marginTop: 5,
    },
    starShare: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flex: 1,
        height: 40,
        backgroundColor: '#111',
        borderRadius: 5,
        marginBottom: 30,
    },
    star: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    share: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    text: {
        color: '#fff',
        fontSize: 14,
    }
});
