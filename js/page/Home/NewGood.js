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
    Button,
    View,
    ScrollView,
 
} from 'react-native';
import Swipper from '../../common/Swipper'
import CuttingLine from '../../common/CuttingLine'
import GoodItem from './GoodItem'
import ThemeRecommend from './ThemeRecommend'
import Ezswiper from '../../common/Ezswiper';
import EndLine from '../../common/EndLine';
import {scaleSize,scaleHeight,setSpText2,} from '../../util/screenUtil'
export default class NewGood extends Component {
    constructor(props){
        super(props);
        this.state = {
            swipperArray:[
                {
                    goodsTitle:'手提袋成交价格是1元',
                    goodsUrl:"https://gd3.alicdn.com/imgextra/i3/893954391/TB1paz1mMoQMeJjy0FoXXcShVXa_!!0-item_pic.jpg",
                    goodsId:"111"

                },
                {
                    goodsTitle:'手提袋成交价格是2元',
                    goodsUrl:"https://gd3.alicdn.com/imgextra/i3/893954391/TB1paz1mMoQMeJjy0FoXXcShVXa_!!0-item_pic.jpg",
                    goodsId:"222"

                },
                {
                    goodsTitle:'手提袋成交价格是3元',
                    goodsUrl:"https://gd3.alicdn.com/imgextra/i3/893954391/TB1paz1mMoQMeJjy0FoXXcShVXa_!!0-item_pic.jpg",
                    goodsId:"333"

                },
                {
                    goodsTitle:'手提袋成交价格是4元',
                    goodsUrl:"https://gd3.alicdn.com/imgextra/i3/893954391/TB1paz1mMoQMeJjy0FoXXcShVXa_!!0-item_pic.jpg",
                    goodsId:"444"

                },
            ],
             goodItemsData:[
                {
                    goodsId:111,
                    avatarUrl:'https://gd1.alicdn.com/imgextra/i4/791105148/O1CN01uVEr3b1ntpQGtz8Cg_!!791105148.jpg_400x400.jpg',
                    avatarName:'橙子天堂',
                    goodImageUrl:'https://gd1.alicdn.com/imgextra/i4/791105148/O1CN01uVEr3b1ntpQGtz8Cg_!!791105148.jpg_400x400.jpg',
                    goodDscription:'1这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍avatarWrapperavatarWrapperavatarWrapperavatarWrapper',
                    starNum:'5.35k',
                    sharenUM:'4.35k'
                 },
                 {
                    goodsId:222,
                    avatarUrl:'https://gd1.alicdn.com/imgextra/i4/791105148/O1CN01uVEr3b1ntpQGtz8Cg_!!791105148.jpg_400x400.jpg',
                    avatarName:'哆啦咪',
                    goodImageUrl:'https://gd1.alicdn.com/imgextra/i4/791105148/O1CN01uVEr3b1ntpQGtz8Cg_!!791105148.jpg_400x400.jpg',
                    goodDscription:'2这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍这是一段介绍avatarWrapperavatarWrapperavatarWrapperavatarWrapper',
                    starNum:'5.35k',
                    sharenUM:'4.35k'
                 }
             ],
             dataArray:[
                {   
                    id:111,
                    title:'梦幻系列',
                    desc:'这一季，美美的活在梦里',
                    imageUrl:'https://gd2.alicdn.com/imgextra/i2/791105148/O1CN011ntpPgZdIqVNox8_!!791105148.jpg',
                },
                {
                    id:222,
                    title:'清新如页',
                    desc:'校园故事里有你有我有他',
                    imageUrl:'https://gd2.alicdn.com/imgextra/i2/791105148/O1CN011ntpPgZdIqVNox8_!!791105148.jpg',
                },
                {
                    id:333,
                    title:'单纯的浪漫',
                    desc:'早春系列',
                    imageUrl:'https://gd2.alicdn.com/imgextra/i2/791105148/O1CN011ntpPgZdIqVNox8_!!791105148.jpg',
                },
                {
                    id:444,
                    title:'冬季暖暖',
                    desc:'时尚达人冬日情怀',
                    imageUrl:'https://gd2.alicdn.com/imgextra/i2/791105148/O1CN011ntpPgZdIqVNox8_!!791105148.jpg',
                },
            ]
        }
        this.navigation = this.props.navigation
    }
    goodItems(data,flag,key){
        if(flag){
            return (
                <GoodItem key={key} info={data} noLine={flag} navigation={this.navigation} />
            )
        }
        return  (
            <GoodItem key={key} info={data} navigation={this.navigation} />
        )
    }
    render() {
        
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.swipperWapper}>
                        <Swipper
                            data = {this.state.swipperArray}
                        />
                    </View>
                    <View style={{
                        marginLeft:30,
                        marginRight:30,
                        paddingTop:40,
                        backgroundColor:'#EEE'
                    }}>
                        <CuttingLine 
                            style={{left:-20}}
                            title={"热门新品"} />
                        <View>
                            {this.state.goodItemsData.map((item,i,arr) =>{
                                let len = arr.length
                                if(i === len-1){
                                    return this.goodItems(item,true,i)
                                }
                                return this.goodItems(item,false,i)
                            })}
                        </View>
                        <CuttingLine title={"你的风格"} />
                        <View style={{marginBottom:40,marginTop:40,flex:1}}>
                            <Ezswiper/>
                        </View>
                        <CuttingLine title={"主题推荐"}/>
                        <View style={styles.themeRecommend}>
                            
                            {this.state.dataArray.map((item,i,arr) =>{
                                    return  <ThemeRecommend key={i} data={item} />
                            })}
                        </View>
                        <EndLine title={'没有更多了'}/> 
                    </View>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    swipperWapper:{
        flex:1,
        marginTop:20,
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
    },
    themeRecommend:{
        marginBottom:40,
        marginTop:40,
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent: 'space-around',
    }
});
