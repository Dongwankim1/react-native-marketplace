
import React, {Component} from 'react';
import {View,SafeAreaView,FlatList,Text} from 'react-native';

import {COLORS,NFTData} from '../constants';
import {NftCard,HomeHeader,FocusedStatusBar} from '../components';


class Home extends Component {


    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <FocusedStatusBar background={COLORS.primary}/>
                <View style={{flex:1 }}>
                    <View style={{zIndex:0}}>
                        <FlatList data={NFTData}
                            renderItem={({item})=> <NftCard  data={item} />}
                                  keyExtractor={(item)=>item.id}
                                  showsVerticalScrollIndicator={false}
                                  ListHeaderComponent={<HomeHeader/>}
                        />
                    </View>

                </View>
                <View style={{
                    position:"absolute",
                    top:0,
                    bottom:0,
                    right:0,
                    left:0,
                    zIndex:-1,
                }}>
                    <View style={{height:300,backgroundColor:COLORS.primary}}/>
                    <View style={{flex:1,backgroundColor:COLORS.white}}/>
                </View>
            </SafeAreaView>
        );
    }
}

export default Home;