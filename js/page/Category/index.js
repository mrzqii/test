/**
 * 
 */
import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, SectionList, Dimensions } from 'react-native'
import NavigationBar from '../../common/NavigationBar'
import ViewUtils from '../../util/ViewUtils'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const CateData = require('./data.json')

export default class Category extends Component {

    constructor(props) {
        super(props)
        this._flatList = null
        this._sectionList = null
        this.state = {
            selectedRootCate: 0
        }
    }

    componentDidMount() {
        // 网络请求
    }

    renderNavBar() {
        return (
            <View>
                <NavigationBar
                    title={'商品详情页'}
                />
            </View>
        )
    }
    // 左列表的单个item
    _renderItem = item => {
        let index = item.index
        let title = item.item.title
        return (
            <TouchableOpacity
                key={index}
                style={[{ alignItems: 'center', justifyContent: 'center', width: 100, height: 44 }, this.state.selectedRootCate === index ? { backgroundColor: '#F5F5F5', borderLeftWidth: 3, borderLeftColor: 'red' } : { backgroundColor: 'white' }]}
                onPress={() => {
                    setTimeout(() => {
                        //   设置点击左列表item,滚动到列表顶部 右列表滚动到顶端位置
                        (CateData.data.length - index) * 45 > height - 65 ? this._flatList.scrollToOffset({ animated: true, offset: index * 45 }) : null
                        this._sectionList.scrollToLocation({ itemIndex: 0, sectionIndex: 0, animated: true, viewOffset: 40 })
                    }, 100)
                    this.setState({ selectedRootCate: index })
                }}
            >
                <Text style={{ fontSize: 13, color: this.state.selectedRootCate === index ? 'red' : '#333' }}>{title}</Text>
            </TouchableOpacity>
        )
    }
    // 渲染左边列表
    renderRootCate() {
        let data = []
        CateData.data.map((item, index) => {
            data.push({ key: index, title: item.firstCateName })
        })
        return (
            <View style={{ backgroundColor: '#F5F5F5' }}>
                <FlatList
                    ref={flatList => this._flatList = flatList}
                    data={data}
                    ListHeaderComponent={() => (<View />)}
                    ListFooterComponent={() => (<View />)}
                    ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#F5F5F5' }} />}
                    renderItem={this._renderItem}
                    onEndReachedThreshold={20}
                    showsVerticalScrollIndicator={false}
                >
                </FlatList>
            </View>
        )
    }
    // section的头部
    sectionComp(item) {
        return (
            <View style={{ backgroundColor: '#F5F5F5', justifyContent: 'center' }}>
                <Text style={{ color: 'gray', marginBottom: 8 }}>{item.section.key}</Text>
            </View>
        )
    }

    renderCell(item, sectionIndex, index) {
        return (
            <TouchableOpacity
                key={index}
                style={{ height: 110, width: (width - 140) / 3, backgroundColor: 'white', marginBottom: 8, marginRight: 10, alignItems: 'center' }}
                onPress={() => alert(`点击了第${sectionIndex}组中的第${index}个商品`)}
            >
                <Image style={{ width: 60, height: 70, marginVertical: 10 }} source={{ uri: item.itemImg }} />
                <Text style={{ color: '#ccc', fontSize: 13 }}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    renderItem(item) {
        let sectionIndex = item.section.data.sectionId
        // 获取到需要被渲染的单个section的数据 
        let data = item.section.data
        return item.index === 0 ?
            <View key={item.index} style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {data.map((cell, index) => this.renderCell(cell, sectionIndex, index))}
            </View> : null
    }

    renderItemCate() {
        //   对数据重新组装
        let tempArr = CateData.data[this.state.selectedRootCate].secondCateItems.map((item, index) => {
            let tempObj = {}
            tempObj.key = item.secondCateName
            tempObj.data = item.items
            tempObj.data.sectionId = index
            return tempObj
        })
        return (
            <View style={{ flex: 1, backgroundColor: '#F5F5F5', marginLeft: 10, marginTop: 8 }}>
                <SectionList
                    ref={(ref) => this._sectionList = ref}
                    renderSectionHeader={this.sectionComp}
                    renderItem={(data) => this.renderItem(data)}
                    sections={tempArr}
                    ItemSeparatorComponent={() => <View />}
                    ListHeaderComponent={() => <View />}
                    ListFooterComponent={() => <View />}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => 'key' + index + item}
                />
            </View>
        )
    }

    renderCategory() {
        return (
            <View style={{ flexDirection: 'row', flex: 1, backgroundColor: '#F5F5F5',marginBottom:25 }}>
                {this.renderRootCate()}
                {this.renderItemCate()}
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                {this.renderCategory()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})