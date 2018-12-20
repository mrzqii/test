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
import MyPage from '../page/My'
import GoodsDetail from '../page/GoodsDetail/GoodsDetail'
// import GoodItem from '../page/Home/GoodItem'
import HomeIndex from '../page/Home'
import NewGood from '../page/Home/NewGood'
import Login from '../page/Login/Login'
import Register from '../page/Login/Register'
import UserInfo from '../page/My/UserInfo'
import Address from '../page/My/UserInfo/Address'
import HelpCenter from '../page/My/HelpCenter'
import GoodGoods from '../page/GoodGoods'
import Search from '../page/GoodGoods/Search'
import Category from '../page/Category'
import Setting from '../page/My/Setting'

 

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
    // 好物
    GoodGoods:{
        screen: GoodGoods
    },
    // 搜索页面
    Search:{
        screen: Search
    },
    // 用户头像 会员名 地址
    UserInfo:{
        screen: UserInfo
    },
    // 用户地址
    Address:{
        screen: Address
    },
    // 分类
    Category:{
        screen: Category
    },
    // 帮助中心
    HelpCenter:{
        screen: HelpCenter
    },
    // 设置
    Setting:{
        screen: Setting
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