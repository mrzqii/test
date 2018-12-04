import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Dimensions } from 'react-native';


/**
 * 自定义导航栏
 */
let height = (Platform.OS === 'ios' ? 20 : 0) + 45
export default class NavPage extends Component {

  render() {
    let { opacity, children, title } = this.props
    return (
      <View style={[styles.container, { backgroundColor: `rgba(255,255,255, ${opacity})` }]}>
        {
          <View style={{ alignItems: 'center', flex: 1 }}>
            {
              opacity < 0.1 ? null :
                (children || <Text style={{ fontSize: 17,color: `rgba(0,0,0, ${opacity})` }}>{title}</Text>)
            }
          </View>
        }
      </View>
    );
  }
 
}
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: height,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    paddingHorizontal: 10,
    position: 'absolute',
    zIndex: 10
  },
  icon: {
    width: 21,
    height: 21,
  },
  item: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

NavPage.defaultProps = {
  title: 'title',
  opacity: 0
}
 