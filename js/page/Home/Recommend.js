import React, { Component } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import {scaleSize,scaleHeight,setSpText2,} from '../../util/screenUtil'
const REQUEST_URL = 'https://api.github.com/search/repositories?q=javascript&sort=stars&page=';
let pageNo = 1;//当前第几页
let totalPage = 5;//总的页数
let itemNo = 0;//item的个数

const TEST_DATA = [
    {
        goodsTitle: '1卖萌神器|我不是狼外婆，我只是一个卖耳罩的小女孩。哈哈哈',
        goodsUrl: "https://gd3.alicdn.com/imgextra/i3/893954391/TB1paz1mMoQMeJjy0FoXXcShVXa_!!0-item_pic.jpg",
        goodsId: "111"

    },
    {
        goodsTitle: '2卖萌神器|我不是狼外婆，我只是一个卖耳罩的小女孩。哈哈哈',
        goodsUrl: "https://gd3.alicdn.com/imgextra/i3/893954391/TB1paz1mMoQMeJjy0FoXXcShVXa_!!0-item_pic.jpg",
        goodsId: "222"

    },
    {
        goodsTitle: '3卖萌神器|我不是狼外婆，我只是一个卖耳罩的小女孩。哈哈哈',
        goodsUrl: "https://gd3.alicdn.com/imgextra/i3/893954391/TB1paz1mMoQMeJjy0FoXXcShVXa_!!0-item_pic.jpg",
        goodsId: "333"

    },
    {
        goodsTitle: '4卖萌神器|我不是狼外婆，我只是一个卖耳罩的小女孩。哈哈哈',
        goodsUrl: "https://gd3.alicdn.com/imgextra/i3/893954391/TB1paz1mMoQMeJjy0FoXXcShVXa_!!0-item_pic.jpg",
        goodsId: "444"

    },
    {
        goodsTitle: '5卖萌神器|我不是狼外婆，我只是一个卖耳罩的小女孩。哈哈哈',
        goodsUrl: "https://gd3.alicdn.com/imgextra/i3/893954391/TB1paz1mMoQMeJjy0FoXXcShVXa_!!0-item_pic.jpg",
        goodsId: "555"

    },
    {
        goodsTitle: '6卖萌神器|我不是狼外婆，我只是一个卖耳罩的小女孩。哈哈哈',
        goodsUrl: "https://gd3.alicdn.com/imgextra/i3/893954391/TB1paz1mMoQMeJjy0FoXXcShVXa_!!0-item_pic.jpg",
        goodsId: "666"

    },
    {
        goodsTitle: '7卖萌神器|我不是狼外婆，我只是一个卖耳罩的小女孩。哈哈哈',
        goodsUrl: "https://gd3.alicdn.com/imgextra/i3/893954391/TB1paz1mMoQMeJjy0FoXXcShVXa_!!0-item_pic.jpg",
        goodsId: "777"

    },
    {
        goodsTitle: '8卖萌神器|我不是狼外婆，我只是一个卖耳罩的小女孩。哈哈哈',
        goodsUrl: "https://gd3.alicdn.com/imgextra/i3/893954391/TB1paz1mMoQMeJjy0FoXXcShVXa_!!0-item_pic.jpg",
        goodsId: "888"

    },

];
export default class LoadMoreDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            //网络请求状态
            error: false,
            errorInfo: "",
            dataArray: [],
            showFoot: 0, // 控制foot， 0：隐藏footer  1：已加载完成,没有更多数据   2 ：显示加载中
            isRefreshing: false,//下拉控制
        }
    }

    //网络请求——获取第pageNo页数据
    fetchData(pageNo) {
        //这个是js的访问网络的方法
        // fetch(REQUEST_URL + pageNo)
        //     .then((response) => response.json())
        //     .then((responseData) => {
        //         let data = responseData.items;
        //         let dataBlob = [];
        //         let i = itemNo;

        //         data.map(function (item) {
        //             dataBlob.push({
        //                 key: i,
        //                 value: item,
        //             })
        //             i++;
        //         });
        //         itemNo = i;
        //         console.log("itemNo:" + itemNo);
        //         let foot = 0;
        //         if (pageNo >= totalPage) {
        //             foot = 1;//listView底部显示没有更多数据了
        //         }

        //         this.setState({
        //             //复制数据源
        //             dataArray: this.state.dataArray.concat(dataBlob),
        //             isLoading: false,
        //             showFoot: foot,
        //             isRefreshing: false,
        //         });
        //         data = null;
        //         dataBlob = null;
        //     })
        //     .catch((error) => {
        //         this.setState({
        //             error: true,
        //             errorInfo: error
        //         })
        //     })
        //     .done();
        let foot = 0;
        setTimeout(() => {
            this.setState({
                dataArray: TEST_DATA,
                isLoading: false,
                showFoot: foot,
                isRefreshing: false,
            });
        }, 1000);
    }

    componentDidMount() {
        //请求数据
        this.fetchData(pageNo);
    }

    //加载等待页
    renderLoadingView() {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    animating={true}
                    color='red'
                    size="large"
                />
            </View>
        );
    }

    //加载失败view
    renderErrorView() {
        return (
            <View style={styles.container}>
                <Text>
                    Fail
                </Text>
            </View>
        );
    }

    //返回itemView
    // _renderItemView({ item }) {
    //     return (
    //         <View>
    //             <Text style={styles.title}>name: {item.value.name}</Text>
    //             <Text style={styles.content}>stars: {item.value.stargazers_count}</Text>
    //             <Text style={styles.content}>description: {item.value.description}</Text>
    //         </View>
    //     );
    // }
    _renderItemView({ item }) {
        return (
            <TouchableOpacity
                onPress={()=> {
                    alert(item.goodsId)
                }}
            >
                <View style={{ flexDirection: 'row', marginVertical: scaleSize(20), paddingHorizontal: scaleSize(30) }}>
                    <View style={{ marginRight: scaleSize(5) }}>
                        <Image
                            source={{ uri: item.goodsUrl }}
                            style={{ width: scaleSize(100), height: scaleHeight(100), borderRadius: 20 }}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text numberOfLines={5} style={{ fontSize: setSpText2(14), color: '#333' }}>{item.goodsTitle}</Text>
                        <View style={{ flexDirection: 'row', marginTop:scaleSize(5)}}>
                            <Text style={{ fontSize: setSpText2(9), color: '#333', backgroundColor: '#ddd', padding:scaleSize(5), borderRadius: 5 }}>猜你喜欢</Text>
                        </View>
                        <View style={{flexDirection:'row',marginTop:scaleSize(10),alignItems:'center'}}>
                            <Image
                                source={require('../../../res/image/collected.png')}
                                style={{ width: scaleSize(15), height: scaleSize(15), tintColor: 'pink' }}
                            />
                            <Text style={{ fontSize: setSpText2(10), color: '#333', marginLeft:5}}>1000</Text>
                        </View>
                    </View>
                </View>

            </TouchableOpacity>
        )
    }

    // renderData() {
    //     return (
    //         <View style={styles.container}>
    //             <FlatList
    //                 data={this.state.dataArray}
    //                 renderItem={this._renderItemView}
    //                 ListFooterComponent={this._renderFooter.bind(this)}
    //                 onEndReached={this._onEndReached.bind(this)}
    //                 onEndReachedThreshold={1}
    //                 ItemSeparatorComponent={this._separator}
    //             />
    //         </View>
    //     );
    // }
    renderData() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataArray}
                    renderItem={this._renderItemView}
                    ListFooterComponent={this._renderFooter.bind(this)}
                    onEndReached={this._onEndReached.bind(this)}
                    onEndReachedThreshold={1}
                // ItemSeparatorComponent={this._separator} 每个Item的分割线
                />
            </View>
        );
    }

    render() {
        //第一次加载等待的view
        if (this.state.isLoading && !this.state.error) {
            return this.renderLoadingView();
        } else if (this.state.error) {
            //请求失败view
            return this.renderErrorView();
        }
        //加载数据
        return this.renderData();
    }
    _separator() {
        return <View style={{ height: 1, backgroundColor: '#999999' }} />;
    }
    _renderFooter() {
        if (this.state.showFoot === 1) {
            return (
                <View style={{ height: 30, alignItems: 'center', justifyContent: 'flex-start', }}>
                    <Text style={{ color: '#999999', fontSize: 14, marginTop: 5, marginBottom: 5, }}>
                        没有更多数据了
                    </Text>
                </View>
            );
        } else if (this.state.showFoot === 2) {
            return (
                <View style={styles.footer}>
                    <ActivityIndicator />
                    <Text>正在加载更多数据...</Text>
                </View>
            );
        } else if (this.state.showFoot === 0) {
            return (
                <View style={styles.footer}>
                    <Text></Text>
                </View>
            );
        }
    }

    _onEndReached() {
        //如果是正在加载中或没有更多数据了，则返回
        if (this.state.showFoot != 0) {
            return;
        }
        //如果当前页大于或等于总页数，那就是到最后一页了，返回
        if ((pageNo != 1) && (pageNo >= totalPage)) {
            return;
        } else {
            pageNo++;
        }
        //底部显示正在加载更多数据
        this.setState({ showFoot: 2 });
        //获取数据
        this.fetchData(pageNo);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',

    },
    title: {
        fontSize: 15,
        color: 'blue',
    },
    footer: {
        flexDirection: 'row',
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    content: {
        fontSize: 15,
        color: 'black',
    }
});
