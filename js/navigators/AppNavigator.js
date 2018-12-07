import React from 'react'
import {StackNavigator} from 'react-navigation';
import WelcomePage from '../page/WelcomePage'
import HomePage from '../page/HomePage'
// import RepositoryDetail from '../page/RepositoryDetail'
// import SearchPage from '../page/SearchPage'
// import FavoritePage from '../page/FavoritePage'
// import WebViewPage from '../page/WebViewPage'
// import CustomKeyPage from '../page/my/CustomKeyPage'
// import CustomTheme from '../page/my/CustomTheme'
import MyPage from '../page/my/MyPage'
import GoodsDetail from '../page/GoodsDetail/GoodsDetail'
// import GoodItem from '../page/Home/GoodItem'
import HomeIndex from '../page/Home/HomeIndex'
import NewGood from '../page/Home/NewGood'
import Login from '../page/Login/Login'
import Register from '../page/Login/Register'
import UserInfo from '../page/my/UserInfo'
import Address from '../page/my/UserInfo/Address'
 

export default AppNavigator = StackNavigator({
    WelcomePage: {
        screen: WelcomePage
    },
    HomePage: {
        screen: HomePage
    },
    MyPage:{
        screen: MyPage
    },
    // 用户头像 会员名 地址
    UserInfo:{
        screen: UserInfo
    },
    // 用户地址
    Address:{
        screen: Address
    },
    // CustomKeyPage:{
    //     screen: CustomKeyPage
    // },
    GoodsDetail:{
        screen: GoodsDetail
    },
    // GoodItem:{
    //     screen: GoodItem
    // },
    HomeIndex:{
        screen: HomeIndex
    },
    NewGood:{
        screen: NewGood
    },
    // 登陆页面
    Login:{
        screen: Login
    },
    // 注册页面
    Register:{
        screen: Register
    }
    
    
}, {
    navigationOptions: {
        header: null
    }
})