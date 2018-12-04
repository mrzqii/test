/**商品详情页面
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
    Button,
    Image,
    Text,
    ScrollView,
    View,
    TouchableOpacity
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CountDown from '../../common/CountDown'
import ShoppingExplanation from '../../common/ShoppingExplanation'
import GoodsAuthor from './GoodsAuthor'
import videoUrl from '../../../res/pageImage/xinyun2017.4.11.mp4'
import Video from 'react-native-af-video-player'


class MyVideo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.videoWrapper}>
                <Video
                    url={videoUrl}
                />
            </View>
        );
    }
}
export default class GoodsDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goodsDetail: {
                viewNum: 2121,
                endTime: '2018-12-12',
                isCheck: false,
                salePrice: 100,
                payment: '', //定金
                purchase: '', // 购买
                detaiImage: 'https://gd2.alicdn.com/imgextra/i2/791105148/O1CN011ntpPgZdIqVNox8_!!791105148.jpg'
            },
            authorInfo: {
                avatarUrl: 'https://gd1.alicdn.com/imgextra/i4/791105148/O1CN01uVEr3b1ntpQGtz8Cg_!!791105148.jpg_400x400.jpg',
                avatarName: '哆啦咪',
                authorDescrip: "用美好的事物包围自己，善待此生",
                isFollow: true,
                recommend: [
                    {
                        goodsId: 11,
                        goodsImageUrl: 'https://gd1.alicdn.com/imgextra/i4/791105148/O1CN01uVEr3b1ntpQGtz8Cg_!!791105148.jpg_400x400.jpg'
                    },
                    {
                        goodsId: 22,
                        goodsImageUrl: 'https://gd1.alicdn.com/imgextra/i4/791105148/O1CN01uVEr3b1ntpQGtz8Cg_!!791105148.jpg_400x400.jpg'
                    },
                    {
                        goodsId: 33,
                        goodsImageUrl: 'https://gd1.alicdn.com/imgextra/i4/791105148/O1CN01uVEr3b1ntpQGtz8Cg_!!791105148.jpg_400x400.jpg'
                    },
                    {
                        goodsId: 44,
                        goodsImageUrl: 'https://gd1.alicdn.com/imgextra/i4/791105148/O1CN01uVEr3b1ntpQGtz8Cg_!!791105148.jpg_400x400.jpg'
                    },
                ],
                note: [
                    {
                        avatarName: '米拉',
                        avatarUrl: 'https://gd1.alicdn.com/imgextra/i4/791105148/O1CN01uVEr3b1ntpQGtz8Cg_!!791105148.jpg_400x400.jpg',
                        words: '产品很不错，下次再来买,产品很不错，下次再来买',
                        stars: 240
                    },
                    {
                        avatarName: '叶子节点',
                        avatarUrl: 'https://gd1.alicdn.com/imgextra/i4/791105148/O1CN01uVEr3b1ntpQGtz8Cg_!!791105148.jpg_400x400.jpg',
                        words: '产品很不错，下次再来买',
                        stars: 200
                    },
                    {
                        avatarName: '米拉',
                        avatarUrl: 'https://gd1.alicdn.com/imgextra/i4/791105148/O1CN01uVEr3b1ntpQGtz8Cg_!!791105148.jpg_400x400.jpg',
                        words: '产品很不错，下次再来买,产品很不错，下次再来买',
                        stars: 220
                    },
                ]
            }

        }
    }
    // 付定金
    paymented = () => {
        if (!this.state.goodsDetail.isCheck) {
            alert('请先一元查看')
            return false
        }
        // 请求接口返回数据，如果成功这执行如下
        let newobj = Object.assign({}, this.state.goodsDetail, { payment: 300 })
        this.setState({
            goodsDetail: newobj
        })
    }
    // 支付一元查看价格
    showPrice = () => {

        // 请求接口返回数据，如果成功这执行如下
        let newobj = Object.assign({}, this.state.goodsDetail, { isCheck: true })
        this.setState({
            goodsDetail: newobj
        })

    }
    render() {

        const navigation = this.props.navigation;
        // console.warn('这个商品的ID是' + navigation.state.params.name)
        let imageUrl = this.state.goodsDetail.detaiImage
        return (
            <View style={styles.container}>

                <ScrollView>
                    <View style={styles.sectionDetail}>
                        <View>
                            <MyVideo />
                            <StatusBar goodsDetail={this.state.goodsDetail} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Image
                                style={{ width: '100%', height: 800 }}
                                source={{ uri: imageUrl }}
                            />
                        </View>
                    </View>
                    <View>
                        <GoodsAuthor
                            data={this.state.authorInfo}
                        />
                    </View>
                    <ShoppingExplanation/>
                    
                </ScrollView>
                <HandleBar
                    goodsDetail={this.state.goodsDetail}
                    showPrice={this.showPrice}
                    paymented={this.paymented}
                />
            </View>
        );
    }
}
// 视频下面的状态显示条
class StatusBar extends Component {
    // 已付定金
    paymented = () => {
        return (
            <View style={{}}>
                <View style={styles.dollar}>
                    <Image
                        source={require('../../../res/pageImage/icon_order_money.png')}
                        style={{
                            top: -5,
                            width: 40,
                            height: 40,
                            zIndex: 1000,
                        }}
                    />
                </View>
                <Text style={styles.price}>{'已付定金'}</Text>
            </View>
        )
    }
    // 一元查看
    checked = (isCheck) => {
        return (
            <View style={{}}>
                <Text style={styles.price}>{isCheck ? '当前价' : '一元查看'}</Text>
            </View>)
    }
    render() {
        const { endTime, viewNum, isCheck, salePrice, payment, purchase } = this.props.goodsDetail
        let isPayment = payment ? this.paymented() : this.checked(isCheck)
        return (
            <View style={styles.statusbar}>
                <View style={styles.viewNum}>
                    <Image
                        source={require('../../../res/pageImage/icon_tab_category_selected.png')}
                        style={{
                            width: 25,
                            height: 25
                        }}
                    />
                    <Text style={styles.text}>{viewNum}</Text>
                </View>
                <View style={styles.endTime}>
                    <CountDown
                        //date={new Date(parseInt(endTime))}
                        date={endTime}
                        days={{ plural: 'Days ', singular: 'day ' }}
                        hours=':'
                        mins=':'
                        segs=''

                        daysStyle={styles.time}
                        hoursStyle={styles.time}
                        minsStyle={styles.time}
                        secsStyle={styles.time}
                        firstColonStyle={styles.colon}
                        secondColonStyle={styles.colon}
                    />
                </View>
                <View style={styles.payment}>
                    {isPayment}
                    <Text style={styles.salePrice}>{isCheck ? salePrice : '? 元'}</Text>
                </View>
            </View>

        );
    }
}
// 页面最底部的操作栏
class HandleBar extends Component {
    notCheck = () => {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.showPrice()
                }}
                style={styles.handlePrice}
            >
                <Text style={{ color: '#fff', paddingTop: 8, textAlign: 'center' }}>
                    {'一元查看价格'}
                </Text>
            </TouchableOpacity>
        )
    }
    notPayment = () => {
        return (
            <TouchableOpacity
                style={styles.handlePayment}
                onPress={() => {
                    this.props.paymented()
                }}
            >
                <MaterialCommunityIcons
                    name={'share'}
                    size={40}
                    color={'#fff'}
                />
                <Text style={{ color: '#fff', paddingTop: 8, textAlign: 'center' }}>
                    {'付定金'}
                </Text>
            </TouchableOpacity>
        )
    }
    paymented = (payment) => {
        if (payment) {
            return (
                <TouchableOpacity style={styles.handleBuy}
                    onPress={() => {
                        alert('.')
                    }}
                >
                    <Text style={{ color: '#fff', paddingTop: 8, textAlign: 'center' }}>
                        {'购买'}
                    </Text>
                    <Text style={styles.paymented}>{'你已付定金'}</Text>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity style={styles.handleBuy}
                    onPress={() => {
                        alert('.')
                    }}
                >
                    <MaterialCommunityIcons
                        name={'share'}
                        size={40}
                        color={'#fff'}
                    />
                    <Text style={{ color: '#fff', paddingTop: 8, textAlign: 'center' }}>
                        {'购买'}
                    </Text>
                </TouchableOpacity>
            )
        }
    }
    render() {
        const { endTime, viewNum, isCheck, salePrice, payment, purchase } = this.props.goodsDetail
        // 设置底部状态栏是否显示一元显示价格的按钮
        let bar = isCheck ? null : this.notCheck()
        let isPayment = payment ? null : this.notPayment()
        return (
            <View style={styles.handleBar}>
                {bar}
                {isPayment}
                {this.paymented(payment)}
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
         
    },
    sectionDetail: {
        flex: 1,
        paddingLeft: 25,
        paddingRight: 25
    },
    statusbar: {
        flexDirection: 'row',
        width: '100%',
    },
    viewNum: {
        width: 150,
        height: 65,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 20,
        alignItems: 'center',
        backgroundColor: '#3A3A3A',

    },
    text: {
        fontSize: 20,
        color: '#fff',
        marginLeft: 20,
    },
    endTime: {
        width: 220,
        height: 65,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    time: {
        backgroundColor: '#000',
        color: '#fff',
        fontSize: 18,
        marginLeft: 3
    },
    payment: {
        flex: 1,
        height: 65,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#3A3A3A',
    },
    paymented: {
        position: 'absolute',
        top: -5,
        left: 0,
        width: 80,
        height: 20,
        fontSize: 12,
        color: '#fff',
        borderRadius: 4,
        backgroundColor: '#CD1076',
    },
    dollar: {
        position: 'absolute',
        left: 60,
        top: 0
    },
    price: {
        color: '#fff',
        marginLeft: 20
    },
    salePrice: {
        width: 60,
        height: 40,
        textAlign: 'center',
        color: '#fff',
        paddingTop: 9,
        borderRadius: 7,
        backgroundColor: '#E4007F',
    },
    handleBar: {
        flexDirection: 'row',
        height: 50,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#000',
    },
    handlePrice: {
        width: 180,
        textAlign: 'center',
        borderRightWidth: 2,
        borderRightColor: '#eee',
    },
    handlePayment: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        borderRightWidth: 2,
        borderRightColor: '#eee',
        flexDirection: 'row',
    },
    handleBuy: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',

    },
    detaiImage: {
        flex: 1
    },
    videoWrapper: {
        height: 400,
        width: '100%'
    },

});
