import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {useIsFocused} from "@react-navigation/native";
class FocusedStatusBar extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props.background)
        const {isFocused} = this.props;
        return (
            isFocused ? <StatusBar animated={true} backgroundColor={this.props.background} isFocused={this.props.isFocused}/> : null

        );
    }
}

export default function(props){
    const isFocused = useIsFocused();

    return <FocusedStatusBar {...props} isFocused={isFocused} />
}