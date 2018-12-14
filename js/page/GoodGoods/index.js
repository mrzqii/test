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
    View
} from 'react-native';
import NavigationBar from '../../common/NavigationBar'
import ViewUtils from '../../util/ViewUtils'

export default class GoodGoods extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'好物'}
                    style={{ backgroundColor: 'steelblue', }}
                    rightButton={ViewUtils.getRightImageButton(() => {
                        navigation.navigate('Search', { name: "动态的" })
                    })}
                />
                <Text>ttttttt</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    page1: {
        flex: 1,
        backgroundColor: 'red',
    },
    page2: {
        flex: 1,
        backgroundColor: 'green',
    },
    image: {
        height: 22,
        width: 22
    }
});
