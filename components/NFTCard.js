import React, {Component} from 'react';
import {View,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {COLORS,SIZES,SHADOWS,assets} from "../constants";

class NftCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={{backgroundColor:COLORS.white,
            borderRadius:SIZES.font,
                marginBottom:SIZES.extraLarge,
                margin:SIZES.base,
                ...SHADOWS.dark
            }}>
                <View style={{width:"100%",height:250}}>

                </View>
                <Text>NFTCard</Text>
            </View>
        );
    }
}

export default function(props){
    const navigation = useNavigation();

    return <NftCard {...props} navigation={navigation}></NftCard>
};