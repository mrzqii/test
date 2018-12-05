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
import Login from '../page/my/Login'
// import SortKeyPagePage from '../page/my/SortKeyPagePage'
// import AboutMePage from '../page/about/AboutMePage'
// import AboutPage from '../page/about/AboutPage'

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
    Login:{
        screen: Login
    }
    
    
}, {
    navigationOptions: {
        header: null
    }
})