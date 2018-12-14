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
    WebView,
    Text,
    View
} from 'react-native';


export default class HelpCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View style={styles.container}>
                <WebView
                    source={{ html: `<ul class=" list-paddingleft-2" style="width: 687px; display: block; float: left; margin-left: 23px; overflow: hidden;"><li><p>
                    订单查询方式：</p></li><li><p>
                    会员订单查询：</p></li></ul><p><br/></p><p><br/></p><p><br/></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;会员登陆会员中心后，在我的订单中可以看到订单列表</p><p><br/></p><p><img style="width: 749px; height: 312px;" alt="show.jpg" src="http://static.v5.javamall.com.cn/attachment/ueditor/201512201401041805.jpg" title="show.jpg" height="312" width="749"/></p><p><br/></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 在右侧的订单状态后面的订单状态查询输入框中输入要查询的订单号后，点击“查询（放大镜）”，就可用查询到相关订单</p><p><br/></p><p><img alt="show.jpg" src="http://static.v5.javamall.com.cn/attachment/ueditor/201512201401276815.jpg" title="show.jpg"/></p><p><br/></p><p><br/></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;订单签收须知：</p><ul class=" list-paddingleft-2" style="width: 687px; display: block; float: left; margin-left: 23px; overflow: hidden;"><li><p><br/></p></li><li><p>
                    &nbsp;</p></li><li><p>
                    1. 验货说明： 请您收到商品后务必先对商品的外包装进行检查，如包裹外包装完好无损，请您放心签收；本商城不提供验货再付<br/>
                    &nbsp;&nbsp; 款收货的服务，这是由于物流合作方规定，本商城对此将会尽力改进，请您谅解。如有疑虑请及时联系在线客服或本商城客服<br/>
                    &nbsp;&nbsp; 中心4001-234-567进行查询，客服会及时为您处理。<br/>
                    2. 签收说明： 需要您先签收后验货。您签收后发现商品有破损，可以直接联系本商城在线客服或客服电话4001-234-567，我们可<br/>
                    &nbsp;&nbsp; 以为您做相关处理。</p></li><li><p>
                    配送异常情况说明：</p></li><li><p>
                    &nbsp;</p></li><li><p>
                    1. 快递配送：由于配送前不会与收件人电话联系，而是直接按收件地址进行配送，所以会出现未妥投（地址无人接收），或者他<br/>
                    &nbsp;&nbsp; 人代签收的情况。如果您一直没有收到商品，请及时查询订单快递详情，或联系本商城在线客服、本商城客服电话4001-234-<br/>
                    &nbsp;&nbsp;&nbsp;567进行查询。<br/>
                    2. 延迟投递：您的货物已经到达当地的配送点，但由于时间原因需延迟到第二天派件。请您再耐心等待一天。<br/>
                    3. 宅急送：由于宅急送有些地区的货到付款款项交接，所以时间会有延时，如出现任何配送问题请及时与本商城在线客服联系或<br/>
                    &nbsp;&nbsp;&nbsp;拨打客服电话4001-234-567。</p></li></ul>`,baseUrl: '' }}
                    style={{ marginTop: 20 }}
                />
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
