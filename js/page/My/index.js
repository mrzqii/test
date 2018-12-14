// 我的个人中心
import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    ScrollView,
    SectionList,
    Text,
    TouchableHighlight,
    View,
    Dimensions,
    Platform,
    TouchableOpacity
} from 'react-native';
import {scaleSize,scaleHeight,setSpText2,} from '../../util/screenUtil'
// import NavigationBar from '../../common/NavigationBar'
// import Toast, {DURATION} from 'react-native-easy-toast' 
import CustomKeyPage from './CustomKeyPage';
import ButtonView from '../../common/ButtonView';
import Xiding from '../../demo/xiding'
import NavBar from '../../common/NavBar'
 

let { width } = Dimensions.get('window')
let navHeight = (Platform.OS === 'ios' ? 20 : 0) + 45

const arrow = require('../../../res/image/mq_arrow_right.png')
export default class MyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 0,
            topValue: 0,
            headTop: 0,
            userInfo: {
                type: '新晋移民',
                avatarUrl: 'https://gd1.alicdn.com/imgextra/i4/791105148/O1CN01uVEr3b1ntpQGtz8Cg_!!791105148.jpg_400x400.jpg',
                avatarName: '叶子节点',
                Bought: 0,
                focus: 32,
                favorite: 1,
                buyer: [
                    {
                        buyerId: 11,
                        buyerName: '肖嗯Pick',
                        buyerUrl: 'https://gd1.alicdn.com/imgextra/i4/791105148/O1CN01uVEr3b1ntpQGtz8Cg_!!791105148.jpg_400x400.jpg',
                        buyerDesc: '看评测,买好货'
                    },
                    {
                        buyerId: 22,
                        buyerName: '不要妹',
                        buyerUrl: 'https://gd1.alicdn.com/imgextra/i4/791105148/O1CN01uVEr3b1ntpQGtz8Cg_!!791105148.jpg_400x400.jpg',
                        buyerDesc: '看评测,买好货'
                    },
                    {
                        buyerId: 33,
                        buyerName: '韦小宝',
                        buyerUrl: 'https://gd1.alicdn.com/imgextra/i4/791105148/O1CN01uVEr3b1ntpQGtz8Cg_!!791105148.jpg_400x400.jpg',
                        buyerDesc: '看评测,买好货'
                    },
                    {
                        buyerId: 44,
                        buyerName: '城市岛屿',
                        buyerUrl: 'https://gd1.alicdn.com/imgextra/i4/791105148/O1CN01uVEr3b1ntpQGtz8Cg_!!791105148.jpg_400x400.jpg',
                        buyerDesc: '看评测,买好货'
                    },
                ]

            }
        }
    }
    onScroll = (event) => {
        let offsetY = event.nativeEvent.contentOffset.y
        let top = -45 + (offsetY / 2.4)
        if (top >= 0) {
            top = 0
        }
        let headTop = -offsetY / 1.5
        let opacity = offsetY / navHeight - 0.7 // 这里为了让不透明度变化的更加明显

        // if(opacity > 5 || opacity < -5) { // 这里可以优化减少render， 1和0 滑快了会有些影响， 这里你可以看着给值， 当然也可以不优化
        //   return
        // }
        this.setState({
            opacity,
            topValue: top,
            headTop
        })
    }
    _renderHead = () => {
        const { navigation } = this.props;
        const { avatarUrl, avatarName, type, Bought, focus, favorite } = this.state.userInfo
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('UserInfo', { name: "动态的" })
                }}
                style={{
                    position: 'absolute',
                    top: this.state.headTop,
                    zIndex: 10
                }}
                activeOpacity={0.5}
            >
                <View style={styles.headSection}>
                    <View style={styles.avatar}>
                        <Image
                            source={{ uri: avatarUrl }}
                            style={styles.avatarImg}
                        />
                        <View style={styles.avatarName}>
                            <View style={styles.name}>
                                <Text style={{ color: '#fff', fontSize: 18 }}>{avatarName}</Text>
                                <Text style={styles.type}>{type}</Text>
                            </View>
                            <View style={styles.numbers}>
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 12,
                                }}>{`买到${Bought}个好物.${focus}个关注.${favorite}喜欢`}</Text>
                            </View>
                        </View>
                        <Image
                            style={styles.arrow}
                            source={arrow}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    _renderBody = () => {

        const { favorite, buyer } = this.state.userInfo
        return (
            <View style={{ padding: 30, flex: 1}}>
                <View style={styles.BuyerFavi}>
                    <View style={styles.Buyer}>
                        <Text>我的关注</Text>
                        <View style={styles.BuyerAvatar}>
                            <View style={{ flexDirection: 'row' }}>
                                {buyer.map((item,i) => {
                                    return (
                                        <Image
                                            key={i}
                                            source={{ uri: item.buyerUrl }}
                                            style={{ width: 20, height: 20, borderRadius: 10 }}
                                        />
                                    )
                                })}
                                <Text
                                    style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: '#999', textAlign: 'center' }}
                                >{buyer.length}</Text>
                            </View>
                            <Image
                                style={[styles.arrow, { marginRight: 20 }]}
                                source={arrow}
                            />
                        </View>
                    </View>
                    <View style={styles.Bfavi}>
                        <Text>我的收藏</Text>
                        <View style={styles.BfaviNum}>
                            <Text
                                style={{ fontSize: 18, color: '#333' }}
                            >{favorite}</Text>

                            <Image
                                style={[styles.arrow, { marginRight: 0 }]}
                                source={arrow}
                            />
                        </View>
                    </View>
                </View>
                <View>

                </View>
            </View>
        )
    }
    _renderItem() {
        const { navigation } = this.props;
        const data = [
            [
                {
                    icon: require('../../../res/image/setting/footmark.png'),
                    title: '会员中心',
                    other: '仅需3秒,超值礼金等你额'
                },
                {
                    icon: require('../../../res/image/setting/footmark.png'),
                    title: '我的订单',
                    other: ''
                },
                {
                    icon: require('../../../res/image/setting/footmark.png'),
                    title: '我的售后',
                    other: ''
                },
                {
                    icon: require('../../../res/image/setting/footmark.png'),
                    title: '消息中心',
                    other: '仅需3秒,超值礼金等你额'
                },
            ],
            [
                {
                    icon: require('../../../res/image/setting/footmark.png'),
                    title: '分享有奖',
                    other: '3折优惠券'
                },
                {
                    icon: require('../../../res/image/setting/footmark.png'),
                    title: '优惠卷',
                    other: ''
                }
            ],
            [
                {
                    icon: require('../../../res/image/setting/footmark.png'),
                    title: '联系客服',
                    other: ''
                },
                {
                    icon: require('../../../res/image/setting/footmark.png'),
                    title: '供应商入住申请',
                    other: ''
                },
                {
                    icon: require('../../../res/image/setting/footmark.png'),
                    title: '帮助中心',
                    other: '',
                    navigate: 'HelpCenter'
                }
            ],
            [
                {
                    icon: require('../../../res/image/setting/footmark.png'),
                    title: '设置',
                    other: '',
                    navigate: 'HelpCenter'
                }
            ]
        ]

        return data.map((items,i) => {
            return (
                <View key={i}>
                    {items.map((item, index) => {
                        return (
                            <TouchableHighlight
                                key={index}
                                underlayColor={'#DDD'}
                                onPress={() => {
                                    navigation.navigate(item.navigate, { name: "动态的" })
                                }}
                            >
                                <View
                                    style={styles.itemView}>
                                    <Image
                                        source={item.icon}
                                        style={{ width:scaleSize (20), height:scaleHeight( 19), tintColor: '#666', marginRight: scaleSize(10) }}
                                    />
                                    <Text style={{ fontSize:setSpText2(15)}}>{item.title}</Text>
                                    {item.other ? <Text
                                        style={[styles.otherText, { marginRight:scaleSize(20) }]}
                                    >{item.other}</Text> : null}
                                    <Image
                                        style={[styles.arrow2, { marginRight: scaleSize(20)}]}
                                        source={arrow}
                                    />
                                </View>
                            </TouchableHighlight>
                        )
                    })}
                    <View style={styles.line}></View>
                </View>
            )
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <NavBar
                    title={'个人中心'}
                    opacity={this.state.opacity}
                    top={this.state.topValue}
                />
                {this._renderHead()}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    ref='scroll'
                    onScroll={this.onScroll}
                    scrollEventThrottle={50}
                    style={{ paddingTop: 200 }}
                >
                    <View
                        style={{ flex:1,backgroundColor: '#fff',paddingBottom:200, borderTopRightRadius: 20, borderTopLeftRadius: 20,overflow:'hidden'}}
                    >
                        {this._renderBody()}
                        {this._renderItem()}
                    </View>
                </ScrollView>
            </View>
        );
    }
 
    //             <ButtonView
    //                 btnName='获取验证码'
    //                 btnStyle={{ width: 90, marginRight: 10, backgroundColor: '#D6D6D6' }}
    //                 onPress={this._getPhoneCode}
    //                 textStyle={{ color: 'gray', justifyContent: 'flex-end', }}
    //             ></ButtonView>


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAB9B2',
    },
    btn: {
        margin: 5,
        borderWidth: 1,
        padding: 2
    },
    headSection: {
        height:scaleSize(100),
        width: width,
        padding: 30,
        backgroundColor: '#FAB9B2',
        paddingTop: 60,

    },
    avatar: {
        flex: 1,
        flexDirection: 'row',
    },
    avatarImg: {
        width: 80,
        height: 80,
        borderColor:'#fff',
        borderWidth:2,
        borderRadius: 40,
        marginRight: 20
    },
    avatarName: {
        width: 200,
        height: 80,
        justifyContent: 'center',
    },
    name: {
        flexDirection: 'row'
    },
    type: {
        backgroundColor: '#DBAAA1',
        color: '#fff',
        fontSize: 12,
        padding: 5,
        borderRadius: 13,
        marginLeft: 3
    },
    numbers: {
        flexDirection: 'row'
    },
    arrow: {
        width: 22,
        height: 22,
        position: 'absolute',
        top: 30,
        right: 0
    },
    arrow2: {
        width: scaleSize(22),
        height: scaleHeight(22),
        position: 'absolute',
        top: 0,
        right: 0
    },
    otherText: {
        position: 'absolute',
        top: scaleSize(3),
        right: 25,
        fontSize:setSpText2(10)
    },
    BuyerFavi: {
        height: 100,
        flexDirection: 'row'
    }, //我的买手 我的喜欢
    Buyer: {
        flex: 1,
        borderRightWidth: 1,
        borderColor: '#eee',
        justifyContent: 'space-between'
    },
    Bfavi: {
        flex: 1,
        marginLeft: 30
    },
    BuyerAvatar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 20,
        alignItems: 'center',

    },
    line: {
        width: '90%',
        height: 1,
        backgroundColor: '#eee',
        marginBottom: scaleSize(15)
    },
    itemView: {
        flexDirection: 'row',
        paddingLeft:scaleSize(20),
        marginVertical: scaleSize(15),
        alignItems: 'center'
    }
});
