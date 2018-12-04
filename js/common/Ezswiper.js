/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image
} from 'react-native';

const { height, width } = Dimensions.get('window');
import EZSwiper from 'react-native-ezswiper';


// const images = [require(`../../res/pageImage/swipper1.jpg`),require(`../../res/pageImage/swipper1.jpg`),require(`../../res/pageImage/swipper1.jpg`),require(`../../res/pageImage/swipper1.jpg`),require(`../../res/pageImage/swipper1.jpg`),require(`../../res/pageImage/swipper1.jpg`),require(`../../res/pageImage/swipper1.jpg`),require(`../../res/pageImage/swipper1.jpg`),require(`../../res/pageImage/swipper1.jpg`)]
const images = [
   {
       id:111,
       url: "https://gd4.alicdn.com/imgextra/i4/893954391/TB2TaE7r50TMKJjSZFNXXa_1FXa_!!893954391.jpg"
   },
   {
    id:222,
    url:"https://gd2.alicdn.com/imgextra/i2/893954391/TB2tETRjZ2vU1JjSZFwXXX2cpXa_!!893954391.jpg"
   },
    
    {
        id:333,
        url:"https://gd4.alicdn.com/imgextra/i4/893954391/TB2TaE7r50TMKJjSZFNXXa_1FXa_!!893954391.jpg"
    }
]

export default class Ezswiper extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 0,
    };
  }

  renderTitle(title){
    return <Text style={{backgroundColor:'green'}}>{title}</Text>
  }

  renderRow(obj, index) {
    return (
      <View style={[styles.cell,{backgroundColor:index % 2 === 0 ? 'red' : 'yellow'}]}>
        <Text>{obj}</Text>
      </View>
    )
  }

  renderImageRow(obj, index) {  
      let url = obj.url
      let id  = obj.id
    return (
      <View style={[styles.cell,{backgroundColor: 'transparent',overflow:'hidden'}]}>
       <Image
       style={{position:'absolute',top:0,right:0,bottom:0,left:0,width: undefined, height: undefined}}
        resizeMode={'contain'}
        source={{uri:url}}/>
        {/* source={obj}/> */}
                <Text style={{backgroundColor:'transparent',color:'white'}}>{'Victoria\'s Secre ' + index}</Text>

      </View>
    )
  }
  
  
  onPressRow(obj, index) {
    console.log('onPressRow=>obj:'+ obj + ' ,index:' + index);
    alert('id='+ obj.id + 'url='+obj.url+' ,index:' + index);
  }

  onWillChange(obj, index) {
    console.log('onWillChange=>obj:'+ obj + ' ,index:' + index);
    // alert('onWillChange=>obj:'+ obj + ' ,index:' + index);
  }
  
  onDidChange(obj, index) {
    console.log('onDidChange=>obj:'+ obj + ' ,index:' + index);
    // alert('onDidChange=>obj:'+ obj + ' ,index:' + index);
  }

  render() {
    return (
        <ScrollView style={[styles.container]} contentInsetAdjustmentBehavior="automatic">
          <EZSwiper style={[styles.swiper,{width: width,height: 150 }]}
                    dataSource={images}
                    width={ width }
                    height={150 }
                    renderRow={this.renderImageRow}
                    onPress={this.onPressRow} 
                    // ratio={0.867}    
                    ratio={0.3}                 
                    />
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',    
  },
  swiper: {
    backgroundColor: '#EEE',
  },
  cell: {
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageControl: {
    position: 'absolute',
    bottom: 4,
    right: 10,
  },
});