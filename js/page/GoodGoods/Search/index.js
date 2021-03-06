/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    AsyncStorage,
    Platform,
    Alert,
    TouchableOpacity,
    StyleSheet,
    Image,
    Text,
    Animated,
    TextInput,
    View,
    Dimensions
} from 'react-native';
import {scaleSize,scaleHeight,setSpText2,} from '../../../util/screenUtil'
import Goods from '../../../models/goods'
const {width,height} = Dimensions.get('window')
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textTop: new Animated.Value(scaleSize(60)),
            textLeft: new Animated.Value(scaleSize(20)),
            isShowSearch: true, // 是否显示搜索初始页面
            history: [], //历史搜索记录
            keyword: '',
            hotSearch: ["口红", "毛衣", "袜子", "保温杯"],
            goodsList:[]
        }
    }
    _retrieveData = async () => {
        AsyncStorage.getItem('SEARCH_HISTORY',(error,result)=> {
            if (result !== null) {
                this.setState({
                    history: JSON.parse(result)
                })
            }
        })
        
      
    }
    
    _getData = () => {
        this.refs.textInput.blur();
        // 设置输入框的动画
        this.setState({
            isShowSearch: false
        }, () => {
            this._animate()
        })
        const { history, keyword } = this.state
        const newHistory = history.filter((item) => {
            if (item != keyword) {
                return true
            }
        })
        // 限制历史纪录的长度
        if (newHistory.length >= 9) {
            newHistory.splice(9, 1)
        }
        newHistory.unshift(keyword)
        // 保存到本地存储
        AsyncStorage.setItem('SEARCH_HISTORY', JSON.stringify(newHistory))
        setTimeout(() => {
            this._retrieveData()
        }, 1000)
        Goods.goodSearch({keyword:this.state.keyword}).then(res=>{
             
            if(res.result==1){
                this.setState({
                    goodsList:res.data
                })
            }
        })
    }
    // 清除历史纪录
    _clearStorage = () => {
        Alert.alert(
            '提示',
            '是否清除历史纪录？',
            [
                { text: '确定', onPress: () => {
                    AsyncStorage.removeItem('SEARCH_HISTORY',()=>{
                        this.setState({
                            history: []
                        })
                    })
                } },
                { text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
               
            ],
            { cancelable: false }
        )
    }
    _history = () => {
        const { history, hotSearch } = this.state
        const flag = Array.isArray(history) && history.length > 0
        return (
            flag ?
                <View style={styles.history}>
                    <View style={{ flex: 1,width:width-60, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{}}>
                            <Text style={{ fontSize: 14, }}>历史记录</Text>
                        </View>
                        <TouchableOpacity
                            onPress={this._clearStorage}
                        >
                            <Image
                                source={require('../../../../res/image/icon_trash.png')}
                                style={{ width: 24, height: 24, tintColor: '#333' }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 20 }}>
                        {history.map((item, i) => {
                            return (
                                <TouchableOpacity
                                    key={i}
                                    onPress={() => {
                                        this.setState({
                                            keyword: item
                                        }, () => {
                                            this._getData()
                                        })

                                    }}
                                >
                                    <Text style={styles.historyKeyword}>{item}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </View> : null
        )
    }
    // 热门搜索
    _hotSearch = () => {
        const { hotSearch } = this.state
        return (
            <View style={styles.hotSearch}>
                <Text style={{ fontSize: 14 }}>热门搜索</Text>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    {hotSearch.map((item, i) => {
                        return (
                            <TouchableOpacity
                                key={i}
                                onPress={() => {
                                    this.setState({
                                        keyword: item
                                    }, () => {
                                        this._getData(item)
                                    })

                                }}
                            >
                                <Text style={styles.keyword}>{item}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
        )
    }
   
    // 设置输入框的动画
    _animate = () => {
        const { isShowSearch, textTop, textLeft, isSearchEnd } = this.state;
        if (!isShowSearch) {
            Animated.parallel([
                Animated.timing(textTop, {
                    toValue: 0,
                    duration: 500,
                }),
                Animated.timing(textLeft, {
                    toValue: scaleSize(35),
                    duration: 500,
                }),

            ]).start()
        } else {
            Animated.parallel([
                Animated.timing(textTop, {
                    toValue: scaleSize(60),
                    duration: 500,
                }),
                Animated.timing(textLeft, {
                    toValue: scaleSize(20),
                    duration: 500,
                }),

            ]).start()
        }
    }
    // 搜索结束以后获取焦点
    _onfucus = () => {
        const { isShowSearch, textTop, textLeft } = this.state;
        if (!isShowSearch) {
            this.setState({
                isShowSearch: true
            }, () => {
                this._animate()
            })
        }
    }
    componentWillMount() {
        this._retrieveData()
    }
    // 单个商品的样式
    _goodItem = (item)=>{
        return (
            <View>
                <View></View>
            </View>
        )
    }
    render() {
        const { navigation } = this.props;
        const { isShowSearch, textTop, textLeft } = this.state;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={{ position: 'absolute', top: 20, left: 20 }}
                    onPress={() => { navigation.goBack() }}
                >
                    <Image
                        style={styles.goBack}
                        source={require('../../../../res/image/arrowLeft.png')}
                    />
                </TouchableOpacity>
                <Animated.View style={{ position: 'absolute', top: textTop, left: textLeft, width: '100%' }}>
                    <TextInput
                        ref="textInput"
                        style={[isShowSearch ? styles.textInput : styles.textInput2]}
                        placeholder={'想找什么？'}
                        value={this.state.keyword}
                        onChangeText={(e) => {
                            this.setState({
                                keyword: e
                            })
                        }
                        }
                        onFocus={this._onfucus}
                        onSubmitEditing={this._getData}
                        underlineColorAndroid={'transparent'}
                        placeholderTextColor={'#CCCCCC'}
                    />
                </Animated.View>

                {isShowSearch ?
                    <View style={{ flex: 1 }}>
                        {this._hotSearch()}
                        {this._history()}
                    </View> : <Text>这个是搜索的结果</Text>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingHorizontal: 30,
    },
    goBack: {
        width:scaleSize(10),
        height: scaleHeight(20),
        paddingHorizontal:scaleSize(10),
        tintColor: '#222',
    },
    textInput: {
        width: '85%',
        fontSize: setSpText2(30),
        color: '#CCC',
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
    },
    textInput2: {
        width: '76%',
        fontSize: 20,
        color: '#CCC',
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
    },
    hotSearch: {
        position: 'absolute',
        top: scaleSize(150),
        left: 0,
        zIndex: 100
    },
    history: {
        position: 'absolute',
        top: scaleSize(250),
        left: 0,
        zIndex: 100,
    },
    keyword: {
        padding: 10,
        backgroundColor: '#FFF3F4',
        color: '#FF4357',
        marginRight: 15,
        borderRadius: 3,
    },
    historyKeyword: {
        marginTop: 5,
        padding: 10,
        backgroundColor: '#eee',
        color: '#222',
        marginRight: 15,
        borderRadius: 3,
    }
});
